<?php
/**
 * ============================================================
 *  api_equipos.php — API REST para gestión de equipos
 *  Grupo CINA
 * ============================================================
 *  Subir a: /public_html/api_equipos.php
 *  (mismo servidor que MySQL)
 *
 *  Endpoints:
 *  POST /api_equipos.php?action=cambio_estado
 *  POST /api_equipos.php?action=checklist
 *  POST /api_equipos.php?action=falla
 *  GET  /api_equipos.php?action=estado&interno=1520
 *  GET  /api_equipos.php?action=historial&interno=1520
 * ============================================================
 */

// ── CONFIGURACIÓN ────────────────────────────────────────────
define('DB_HOST',    'localhost');
define('DB_NAME',    'cinafrio_test');   // ← tu base de datos
define('DB_USER',    'tu_usuario');      // ← tu usuario MySQL
define('DB_PASS',    'tu_contraseña');   // ← tu contraseña
define('SECRET_KEY', 'cina_secret_2026'); // ← clave que usarás desde app.js
// ─────────────────────────────────────────────────────────────

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$action = $_GET['action'] ?? '';

// ── Conexión ─────────────────────────────────────────────────
try {
    $pdo = new PDO(
        "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4",
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
} catch (PDOException $e) {
    resp(500, ['error' => 'Error de conexión: ' . $e->getMessage()]);
}

// ── Enrutador ────────────────────────────────────────────────
switch ($action) {

    // ── GET: estado actual de un equipo ──────────────────────
    case 'estado':
        $interno = $_GET['interno'] ?? '';
        if (!$interno) resp(400, ['error' => 'Falta parámetro interno']);

        $stmt = $pdo->prepare("SELECT id, interno, denominacion, estado_actual, horometro_actual FROM equipos WHERE interno = ?");
        $stmt->execute([$interno]);
        $eq = $stmt->fetch();
        if (!$eq) resp(404, ['error' => 'Equipo no encontrado']);
        resp(200, $eq);
        break;

    // ── GET: historial de estados de un equipo ───────────────
    case 'historial':
        $interno = $_GET['interno'] ?? '';
        if (!$interno) resp(400, ['error' => 'Falta parámetro interno']);

        $stmt = $pdo->prepare("
            SELECT es.estado_anterior, es.estado_nuevo, es.fecha_hora,
                   es.usuario, es.horometro, es.motivo,
                   ROUND(es.minutos_en_estado_anterior/60, 1) AS horas_previas
            FROM equipo_estados es
            JOIN equipos e ON e.id = es.equipo_id
            WHERE e.interno = ?
            ORDER BY es.fecha_hora DESC
            LIMIT 50
        ");
        $stmt->execute([$interno]);
        resp(200, $stmt->fetchAll());
        break;

    // ── POST: registrar cambio de estado ─────────────────────
    case 'cambio_estado':
        $data = json_input();
        auth($data);

        $required = ['interno', 'estado_nuevo', 'usuario', 'horometro'];
        foreach ($required as $f) {
            if (empty($data[$f])) resp(400, ['error' => "Falta campo: $f"]);
        }

        $interno      = $data['interno'];
        $estadoNuevo  = $data['estado_nuevo'];
        $usuario      = $data['usuario'];
        $horometro    = (int)$data['horometro'];
        $motivo       = $data['motivo'] ?? null;

        // Validar estado
        $estadosValidos = ['Cargando', 'En marcha', 'Falla', 'Dado de baja'];
        if (!in_array($estadoNuevo, $estadosValidos)) {
            resp(400, ['error' => 'Estado inválido: ' . $estadoNuevo]);
        }

        // Buscar equipo
        $stmt = $pdo->prepare("SELECT id, estado_actual, horometro_actual FROM equipos WHERE interno = ?");
        $stmt->execute([$interno]);
        $equipo = $stmt->fetch();
        if (!$equipo) resp(404, ['error' => 'Equipo no encontrado: ' . $interno]);

        $equipoId      = $equipo['id'];
        $estadoAnterior = $equipo['estado_actual'];

        // Calcular minutos en estado anterior
        $minutosEnEstado = null;
        $stmtUlt = $pdo->prepare("
            SELECT fecha_hora FROM equipo_estados
            WHERE equipo_id = ? ORDER BY fecha_hora DESC LIMIT 1
        ");
        $stmtUlt->execute([$equipoId]);
        $ultimoCambio = $stmtUlt->fetchColumn();
        if ($ultimoCambio) {
            $diff = (new DateTime())->diff(new DateTime($ultimoCambio));
            $minutosEnEstado = ($diff->days * 1440) + ($diff->h * 60) + $diff->i;
        }

        $pdo->beginTransaction();
        try {
            // Insertar en historial
            $stmt = $pdo->prepare("
                INSERT INTO equipo_estados
                    (equipo_id, estado_anterior, estado_nuevo, fecha_hora, usuario, horometro, motivo, minutos_en_estado_anterior)
                VALUES (?, ?, ?, NOW(), ?, ?, ?, ?)
            ");
            $stmt->execute([$equipoId, $estadoAnterior, $estadoNuevo, $usuario, $horometro, $motivo, $minutosEnEstado]);
            $estadoId = $pdo->lastInsertId();

            // Actualizar equipo
            $stmt = $pdo->prepare("
                UPDATE equipos SET estado_actual = ?, horometro_actual = ?, updated_at = NOW()
                WHERE id = ?
            ");
            $stmt->execute([$estadoNuevo, $horometro, $equipoId]);

            // Si es Falla → crear registro en equipo_fallas
            if ($estadoNuevo === 'Falla' && $motivo) {
                $stmt = $pdo->prepare("
                    INSERT INTO equipo_fallas
                        (equipo_id, estado_id, usuario_reporta, fecha_hora, horometro, descripcion)
                    VALUES (?, ?, ?, NOW(), ?, ?)
                ");
                $stmt->execute([$equipoId, $estadoId, $usuario, $horometro, $motivo]);
            }

            $pdo->commit();
            resp(200, [
                'ok'              => true,
                'estado_id'       => $estadoId,
                'estado_anterior' => $estadoAnterior,
                'estado_nuevo'    => $estadoNuevo,
                'horometro'       => $horometro,
                'minutos_previos' => $minutosEnEstado,
            ]);
        } catch (Exception $e) {
            $pdo->rollBack();
            resp(500, ['error' => 'Error al guardar: ' . $e->getMessage()]);
        }
        break;

    // ── POST: registrar checklist de inicio ──────────────────
    case 'checklist':
        $data = json_input();
        auth($data);

        $required = ['interno', 'usuario', 'horometro_inicio', 'items'];
        foreach ($required as $f) {
            if (!isset($data[$f])) resp(400, ['error' => "Falta campo: $f"]);
        }

        $stmt = $pdo->prepare("SELECT id FROM equipos WHERE interno = ?");
        $stmt->execute([$data['interno']]);
        $equipoId = $stmt->fetchColumn();
        if (!$equipoId) resp(404, ['error' => 'Equipo no encontrado']);

        // Buscar el último estado_id (el cambio a En marcha recién registrado)
        $stmt = $pdo->prepare("
            SELECT id FROM equipo_estados
            WHERE equipo_id = ? AND estado_nuevo = 'En marcha'
            ORDER BY fecha_hora DESC LIMIT 1
        ");
        $stmt->execute([$equipoId]);
        $estadoId = $stmt->fetchColumn() ?: 0;

        $items   = $data['items'];   // array de 18 valores: 1, 0 o null
        $hayFalla = in_array(0, $items);
        $resultado = $hayFalla
            ? (array_sum($items) >= 15 ? 'Aprobado con observaciones' : 'Rechazado')
            : 'Aprobado';

        $stmt = $pdo->prepare("
            INSERT INTO equipo_checklist
                (equipo_id, estado_id, usuario, fecha_hora, horometro_inicio, resultado, observaciones,
                 item_01_extinguidores, item_02_espejos, item_03_cinturon, item_04_luz_delantera,
                 item_05_bocina, item_06_luz_trasera, item_07_alarma_retroceso, item_08_luz_electrob,
                 item_09_frenos, item_10_direccion, item_11_mastil_vertical, item_12_mastil_angulo,
                 item_13_apertura_unas, item_14_desplaz_lateral, item_15_cadena,
                 item_16_mangueras, item_17_asiento, item_18_jaula)
            VALUES (?,?,?,NOW(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        ");
        $stmt->execute([
            $equipoId, $estadoId, $data['usuario'], (int)$data['horometro_inicio'],
            $resultado, $data['observaciones'] ?? null,
            $items[0]??null, $items[1]??null, $items[2]??null,  $items[3]??null,
            $items[4]??null, $items[5]??null, $items[6]??null,  $items[7]??null,
            $items[8]??null, $items[9]??null, $items[10]??null, $items[11]??null,
            $items[12]??null,$items[13]??null,$items[14]??null, $items[15]??null,
            $items[16]??null,$items[17]??null,
        ]);

        resp(200, ['ok' => true, 'resultado' => $resultado, 'checklist_id' => $pdo->lastInsertId()]);
        break;

    // ── GET: lista de cámaras activas desde MySQL ───────────
    case 'camaras':
        $stmt = $pdo->query("
            SELECT
                c.CamaraID,
                c.CamaraNumero,
                c.CamaraCalles,
                c.CamaraFilas,
                c.CamaraNiveles,
                c.ReservaCliente,
                c.activo,
                t.TiposCamaraID,
                COALESCE(t.TipoNombre, t.Nombre, t.Descripcion, t.nombre, CONCAT('Tipo ', t.TiposCamaraID)) AS tipo_nombre
            FROM Camaras c
            LEFT JOIN TiposCamara t ON t.TiposCamaraID = c.TiposCamaraID
            WHERE c.activo = 1
            ORDER BY c.CamaraNumero ASC
        ");
        $camaras = $stmt->fetchAll();

        // Construir nombre para mostrar en la app
        foreach ($camaras as &$cam) {
            $num = $cam['CamaraNumero'];
            $tipo = strtolower($cam['tipo_nombre'] ?? '');
            if (str_contains($tipo, 'tunel') || str_contains($tipo, 'túnel')) {
                $cam['nombre_display'] = 'TÚNEL ' . $num;
            } elseif (str_contains($tipo, 'antec')) {
                $cam['nombre_display'] = 'ANTECÁMARA ' . $num;
            } elseif (str_contains($tipo, 'sala') || str_contains($tipo, 'maquina')) {
                $cam['nombre_display'] = 'SALA DE MÁQUINAS';
            } elseif (str_contains($tipo, 'exterior')) {
                $cam['nombre_display'] = 'EXTERIOR';
            } else {
                $cam['nombre_display'] = 'CÁMARA ' . $num;
            }
        }
        unset($cam);
        resp(200, $camaras);
        break;

    default:
        resp(404, ['error' => 'Acción no encontrada: ' . $action]);
}

// ── Helpers ──────────────────────────────────────────────────
function json_input(): array {
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);
    if (!is_array($data)) resp(400, ['error' => 'JSON inválido']);
    return $data;
}

function auth(array $data): void {
    if (($data['secret'] ?? '') !== SECRET_KEY) {
        resp(403, ['error' => 'No autorizado']);
    }
}

function resp(int $code, array $body): never {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}
