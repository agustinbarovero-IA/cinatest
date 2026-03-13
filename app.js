/* ═══════════════════════════════════════════════════════════
   SISTEMA GRUPO CINA — app.js
   ═══════════════════════════════════════════════════════════ */

const USER_NAME = 'agustin.barovero';

const menuTree = {
  title: 'INICIO',
  children: [
    {
      title: 'LOGISTICA NACIONAL',
      children: [
        { title: 'CARGAS' },
        { title: 'PRE ENTRADAS' },
        { title: 'ENTRADAS' },
        { title: 'PRE SALIDAS' },
        { title: 'SALIDAS' }
      ]
    },
    {
      title: 'LOGISTICA FISCAL',
      children: [
        { title: 'CARGAS', fiscal: true },
        { title: 'PRE ENTRADAS', fiscal: true },
        { title: 'ENTRADAS', fiscal: true },
        { title: 'PRE SALIDAS',               url: 'https://sistema.cinafrio.com/intranet/index.php/presalidas/list/salida/0/fiscal/1' },
        { title: 'SALIDAS',                   url: 'https://sistema.cinafrio.com/intranet/index.php/presalidas/list/salida/1/fiscal/1' },
        { title: 'REPORTE DEPOSITO FISCAL AFIP', url: 'https://sistema.cinafrio.com/intranet2/app.php/reportestockafip/' }
      ]
    },
    {
      title: 'CALIDAD',
      children: [
        { title: 'CONTROL DE ENTRADAS',           url: 'https://sistema.cinafrio.com/intranet/index.php/carga/list/type/E' },
        { title: 'CONTROL DE SALIDAS',            url: 'https://sistema.cinafrio.com/intranet/index.php/carga/list/type/S' },
        { title: 'CONTROL DE INTERVENCIONES',     url: 'https://sistema.cinafrio.com/intranet/index.php/carga/listIntervenciones' },
        { title: 'VENCIMIENTO DE PRODUCTOS',      url: 'https://sistema.cinafrio.com/intranet/index.php/infostock/vencimientos' },
        { title: 'ESTADISTICAS DE INTERVENCIONES',url: 'https://sistema.cinafrio.com/intranet/index.php/carga/estadisticas' }
      ]
    },
    {
      title: 'PORTERIA',
      children: [
        { title: 'INGRESOS EGRESOS', url: 'https://sistema.cinafrio.com/intranet/index.php/ingreso/index' }
      ]
    },
    {
      title: 'TRANSPORTE',
      children: [
        {
          title: 'DATOS DE VEHICULOS',
          children: [
            { title: 'ASEGURADORAS', url: 'https://sistema.cinafrio.com/intranet/index.php/transporte_aseguradora' },
            { title: 'EMPRESAS',     url: 'https://sistema.cinafrio.com/intranet/index.php/transporte_empresa' },
            { title: 'CONDUCTORES',  url: 'https://sistema.cinafrio.com/intranet/index.php/transporte_conductor' },
            { title: 'VEHICULOS',    url: 'https://sistema.cinafrio.com/intranet/index.php/transporte_vehiculo' },
            { title: 'ACOPLADOS',    url: 'https://sistema.cinafrio.com/intranet/index.php/transporte_acoplado' }
          ]
        },
        {
          title: 'DATOS DE LA PLAYA DE MANIOBRA',
          children: [
            { title: 'BOXES',    url: 'https://sistema.cinafrio.com/intranet/index.php/box' },
            { title: 'TRONERAS', url: 'https://sistema.cinafrio.com/intranet/index.php/tronera' }
          ]
        }
      ]
    },
    {
      title: 'ADMINISTRACION',
      children: [
        { title: 'FACTURACION' },
        { title: 'REMITOS' },
        { title: 'COMPRAS' }
      ]
    },
    {
      title: 'RRHH',
      children: [
        { title: 'PERSONAL',            url: 'https://sistema.cinafrio.com/intranet2/app.php/persona/' },
        { title: 'AUSENTISMO',          url: 'https://sistema.cinafrio.com/intranet2/app.php/ausentismo/dashboard' },
        { title: 'VACUNACIONES',        url: 'https://sistema.cinafrio.com/intranet2/app.php/vacunacion/' },
        { title: 'EXAMENES ART',        url: 'https://sistema.cinafrio.com/intranet2/app.php/examenmedicoart/' },
        { title: 'EXAMENES INGRESOS',   url: 'https://sistema.cinafrio.com/intranet2/app.php/exameningreso/' },
        { title: 'LIBRETAS SANITARIAS', url: 'https://sistema.cinafrio.com/intranet2/app.php/libretasanitaria/' }
      ]
    },
    {
      title: 'MANTENIMIENTO',
      children: [
        { title: 'MANTENIMIENTO GENERAL',        url: 'https://sistema.cinafrio.com/intranet2/app.php/mantenimiento/' },
        { title: 'PR 6 CONTRASTE DE TERMOMETROS' },
        { title: 'PR 9 SEMANAL',                 url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmegcsemanal/' },
        { title: 'PR 22 LIMPIEZA TANQUES',        url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmreglimpiezatanque/' },
        { title: 'PR 24 DIARIO',                  url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmegcdiario/' },
        { title: 'PR 30 LIBRO DE GUARDIA',        url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmcontrol/' },
        { title: 'PR 80 PARADA DE CAMARAS',       url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmcamara/' },
        { title: 'PR 100 DESCONGELADO',           url: 'https://sistema.cinafrio.com/intranet2/app.php/sdmdescongelado/' }
      ]
    },
    {
      title: 'PRODUCTOS',
      children: [
        { title: 'CREAR NUEVOS PRODUCTOS', url: 'https://sistema.cinafrio.com/intranet/index.php/producto' }
      ]
    },
    {
      title: 'DASHBOARD',
      children: [
        { title: 'MAPA DE BOXES' },
        { title: 'DASHBOARD LOGISTICA NACIONAL' },
        { title: 'DASHBOARD LOGISTICA FISCAL' },
        { title: 'DASHBOARD EQUIPAMIENTO' },
        { title: 'DASHBOARD GENERAL', url: 'https://sistema.cinafrio.com/intranet2/app.php/ausentismo/dashboard' }
      ]
    },
    {
      title: 'REPORTES',
      children: [
        { title: 'CAMARAS' },
        { title: 'STOCK',               url: 'https://sistema.cinafrio.com/intranet/index.php/infostock/stockDetallado' },
        { title: 'MOVIMIENTOS' },
        { title: 'TIEMPOS CARGA DESCARGA', url: 'https://sistema.cinafrio.com/intranet/index.php/estiba/informes' },
        { title: 'AUSENTISMO' },
        { title: 'DEVOLUCIONES',        url: 'https://sistema.cinafrio.com/intranet/index.php/infostock/devoluciones' }
      ]
    },
    {
      title: 'INDICADORES',
      children: [
        { title: 'CARGAS I-2' },
        { title: 'MOVIMIENTOS' },
        { title: 'ESTADISTICAS DE PERSONAL' },
        { title: 'ALMACENAMIENTO DE POSICIONES' },  // I-36
        { title: 'POSICIONES INGRESADAS EGRESADAS' },
        { title: 'AJUSTES DE STOCK' },
        { title: 'CLIENTES QUE OPERARON' },
        { title: 'USO DE EQUIPOS' },
        { title: 'ESTIBAS CONGELADAS' }
      ]
    },
    {
      title: 'SISTEMA DE GESTION',
      children: [
        { title: 'INFORMACION DOCUMENTADA', url: 'https://manualcinafrio.com.ar/documentos/' },
        { title: 'INDICADORES',             url: 'https://manualcinafrio.com.ar/indicadores/' },
        { title: 'REGISTRO PR 44',          url: 'https://sistema.cinafrio.com/intranet/index.php/registro' },
        { title: 'FORMACION',               url: 'https://manualcinafrio.com.ar/formacion/' }
      ]
    },
    {
      title: 'SENASA',
      children: [
        { title: 'CERTIFICADOS',          url: 'https://sistema.cinafrio.com/intranet/index.php/certificados/list' },
        { title: 'CERTIFICADOS INTERNOS', url: 'https://sistema.cinafrio.com/intranet/index.php/certificado_interno' }
      ]
    },
    {
      title: 'CONFIGURACION',
      children: [
        { title: 'VETERINARIOS', url: 'https://sistema.cinafrio.com/intranet/index.php/veterinario/index' },
        {
          title: 'CLIENTES',
          children: [
            { title: 'CLIENTES DEPOSITO NACIONAL', url: 'https://sistema.cinafrio.com/intranet/index.php/clientes/list?fiscal=0&page=1' },
            { title: 'CLIENTES DEPOSITO FISCAL',   url: 'https://sistema.cinafrio.com/intranet/index.php/clientes/list/fiscal/1/page/1' },
            { title: 'GRUPO DE CLIENTES',          url: 'https://sistema.cinafrio.com/intranet/index.php/grupo/list' }
          ]
        },
        { title: 'COMPRAS' },
        { title: 'ESTABLECIMIENTOS' },
        {
          title: 'LOGISTICA',
          children: [
            { title: 'CAMARAS',               url: 'https://sistema.cinafrio.com/intranet/index.php/camaras' },
            { title: 'CONDUCTORES',           url: 'https://sistema.cinafrio.com/intranet/index.php/conductor_autoelevador' },
            { title: 'RESPONSABLE DE CARGAS', url: 'https://sistema.cinafrio.com/intranet/index.php/responsable_logistica' },
            { title: 'TIPO DE CAMARAS',       url: 'https://sistema.cinafrio.com/intranet/index.php/tiposcamara' },
            { title: 'TIPO DE ESTIBA',        url: 'https://sistema.cinafrio.com/intranet/index.php/tiposestiba' },
            { title: 'TIPO DE CERTIFICADOS',  url: 'https://sistema.cinafrio.com/intranet/index.php/tiposcertificados' },
            { title: 'TIPO DE INTERVENCIONES',url: 'https://sistema.cinafrio.com/intranet/index.php/intervenciones' },
            { title: 'TIPO DE PRODUCTOS',     url: 'https://sistema.cinafrio.com/intranet/index.php/tiposproducto' }
          ]
        }
      ]
    },
    {
      title: 'OTROS SISTEMAS',
      children: [
        { title: 'INFORMACION DOCUMENTADA', url: 'https://manualcinafrio.com.ar/documentos/' },
        { title: 'INDICADORES',             url: 'https://manualcinafrio.com.ar/indicadores/' },
        { title: 'REGISTRO PR 44',          url: 'https://sistema.cinafrio.com/intranet/index.php/registro' },
        { title: 'FORMACION',               url: 'https://manualcinafrio.com.ar/formacion/' }
      ]
    }
  ]
};

/* ── COLORES DE MENÚ ────────────────────────────────────────── */
const mainColorMap = {
  'LOGISTICA NACIONAL': '#36B0C9',
  'LOGISTICA FISCAL':   '#00BBB4',
  'CALIDAD':            '#E36B2C',
  'PORTERIA':           '#00A887',
  'TRANSPORTE':         '#00A887',
  'ADMINISTRACION':     '#001F60',
  'RRHH':               '#001F60',
  'MANTENIMIENTO':      '#001F60',
  'PRODUCTOS':          '#36B0C9',
  'DASHBOARD':          '#FFCC33',
  'REPORTES':           '#FFCC33',
  'INDICADORES':        '#FFCC33',
  'SISTEMA DE GESTION': '#001F60',
  'SENASA':             '#23BAC4',
  'CONFIGURACION':      '#001F60',
  'OTROS SISTEMAS':     '#001F60'
};

/* ── DATOS LOGÍSTICA ────────────────────────────────────────── */
const dashboardLogisticaNacionalData = [
  { tipo:'CAMARA', nombre:'1',  estibas:150, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'3',  estibas:200, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'4',  estibas:75,  temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'56', estibas:200, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'7',  estibas:120, temperatura:2,   clientes:['MI'],      extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'8',  estibas:850, temperatura:-21, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'11', estibas:760, temperatura:-21, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'12', estibas:300, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'14', estibas:243, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'15', estibas:200, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'16', estibas:350, temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'17', estibas:75,  temperatura:-18, clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'CAMARA', nombre:'DS', estibas:67,  temperatura:24,  clientes:['MB','ME'], extra:25, puerta:true, ventilador:true },
  { tipo:'TUNEL',  nombre:'2',  estibas:35,  temperatura:-27, clientes:['MD'],      extra:25, puerta:true, ventilador:true },
  { tipo:'TUNEL',  nombre:'9',  estibas:45,  temperatura:-27, clientes:['MD'],      extra:25, puerta:true, ventilador:true },
  { tipo:'TUNEL',  nombre:'10', estibas:40,  temperatura:-27, clientes:['MD'],      extra:25, puerta:true, ventilador:true }
];

/* ── DATOS EQUIPAMIENTO ─────────────────────────────────────── */
// Array mutable — los cambios del usuario se persisten aquí en memoria
const dashboardEquipamientoData = [
  // Autoelevadores Cuádruple
  { interno:1520, marca:'TOYOTA', modelo:'7FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-1520', estado:'Cargando',  planta:'Nacional',        horasBase:1111,  horasActual:1111,  usuario:'jlopez',    año:'N/D' },
  { interno:1523, marca:'TOYOTA', modelo:'7FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-1523', estado:'En marcha', planta:'Nacional',        horasBase:4208,  horasActual:4208,  usuario:'mrojas',    año:'N/D' },
  { interno:1556, marca:'TOYOTA', modelo:'7FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-1556', estado:'Falla',     planta:'Mantenimiento',   horasBase:10074, horasActual:10074, usuario:'agarcia',   año:'N/D' },
  { interno:5921, marca:'TOYOTA', modelo:'8FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-5921', estado:'En marcha', planta:'Nacional',        horasBase:17635, horasActual:17635, usuario:'lortiz',    año:'2020' },
  { interno:5922, marca:'TOYOTA', modelo:'8FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-5922', estado:'Falla',     planta:'Mantenimiento',   horasBase:17552, horasActual:17552, usuario:'jlopez',    año:'2020' },
  { interno:5923, marca:'TOYOTA', modelo:'8FBCU25',  tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-5923', estado:'Cargando',  planta:'Deposito Fiscal', horasBase:15100, horasActual:15100, usuario:'mrojas',    año:'2020' },
  { interno:6454, marca:'TOYOTA', modelo:'8FB25',    tipo:'Autoelevador Cuádruple', icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-6454', estado:'En marcha', planta:'Nacional',        horasBase:4782,  horasActual:4782,  usuario:'agarcia',   año:'2021' },
  // Autoelevadores Triple
  { interno:2496, marca:'TOYOTA', modelo:'7FB25',    tipo:'Autoelevador Triple',    icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-2496', estado:'En marcha', planta:'Nacional',        horasBase:22985, horasActual:22985, usuario:'acastro',   año:'2011' },
  { interno:2601, marca:'TOYOTA', modelo:'7FB25',    tipo:'Autoelevador Triple',    icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-2601', estado:'Cargando',  planta:'Deposito Fiscal', horasBase:21987, horasActual:21987, usuario:'lperez',    año:'2012' },
  { interno:7730, marca:'TOYOTA', modelo:'8FBN25',   tipo:'Autoelevador Triple',    icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-7730', estado:'Cargando',  planta:'Nacional',        horasBase:830,   horasActual:830,   usuario:'jmartin',   año:'2025' },
  // Autoelevador Triciclo
  { interno:7439, marca:'TOYOTA', modelo:'8FBE20',   tipo:'Autoelevador Triciclo',  icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-7439', estado:'En marcha', planta:'Nacional',        horasBase:3245,  horasActual:3245,  usuario:'lperez',    año:'2024' },
  // Autoelevador Diesel
  { interno:7259, marca:'TOYOTA', modelo:'62-8FD25', tipo:'Autoelevador Diesel',    icono:'img/autoelevador.png', isImage:true,
    denominacion:'SIL-7259', estado:'Cargando',  planta:'Deposito Fiscal', horasBase:844,   horasActual:844,   usuario:'acastro',   año:'2023' },
  // Apiladores
  { interno:3285, marca:'BT',     modelo:'SWE140',   tipo:'Apilador',               icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-3285', estado:'Cargando',  planta:'Nacional',        horasBase:1111,  horasActual:1111,  usuario:'jmartin',   año:'2013' },
  { interno:6600, marca:'BT',     modelo:'SWE140BR', tipo:'Apilador',               icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-6600', estado:'En marcha', planta:'Nacional',        horasBase:1468,  horasActual:1468,  usuario:'rsosa',     año:'2021' },
  // Zorras Op. Caminando
  { interno:3825, marca:'BT',     modelo:'LWE 200',  tipo:'Zorra Op. Caminando',    icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-3825', estado:'En marcha', planta:'Nacional',        horasBase:4613,  horasActual:4613,  usuario:'pdominguez',año:'2014' },
  { interno:5828, marca:'TOYOTA', modelo:'LWE200',   tipo:'Zorra Op. Caminando',    icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-5828', estado:'Cargando',  planta:'Deposito Fiscal', horasBase:1111,  horasActual:1111,  usuario:'sgimenez',  año:'2020' },
  // Zorras Op. a Bordo
  { interno:5672, marca:'TOYOTA', modelo:'LPE200',   tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-5672', estado:'En marcha', planta:'Nacional',        horasBase:3378,  horasActual:3378,  usuario:'cmedina',   año:'2018' },
  { interno:6488, marca:'TOYOTA', modelo:'LPE200',   tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-6488', estado:'Falla',     planta:'Mantenimiento',   horasBase:2890,  horasActual:2890,  usuario:'fvera',     año:'2021' },
  { interno:6886, marca:'TOYOTA', modelo:'LPE200B',  tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-6886', estado:'Cargando',  planta:'Nacional',        horasBase:4376,  horasActual:4376,  usuario:'rbenitez',  año:'2022' },
  { interno:6887, marca:'TOYOTA', modelo:'LPE200B',  tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-6887', estado:'En marcha', planta:'Deposito Fiscal', horasBase:4637,  horasActual:4637,  usuario:'mbazan',    año:'2022' },
  { interno:7502, marca:'TOYOTA', modelo:'LPE200',   tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-7502', estado:'Cargando',  planta:'Nacional',        horasBase:1735,  horasActual:1735,  usuario:'jgomez',    año:'2024' },
  { interno:7563, marca:'BT',     modelo:'LPE200B',  tipo:'Zorra Op. a Bordo',      icono:'img/apilador.png',     isImage:true,
    denominacion:'SIL-7563', estado:'En marcha', planta:'Nacional',        horasBase:560,   horasActual:560,   usuario:'druiz',     año:'2021' },
  // Robot de limpieza
  { interno:9001, marca:'Nilfisk',  modelo:'SC6000', tipo:'Robot de Limpieza',      icono:'img/robotlimpieza.png',isImage:true,
    denominacion:'SIL-9001', estado:'Cargando',  planta:'Nacional',        horasBase:340,   horasActual:340,   usuario:'lortiz',    año:'2022' },
  // Camión
  { interno:9010, marca:'Mercedes', modelo:'Atego',  tipo:'Camión',                 icono:'🚚',                   isImage:false,
    denominacion:'SIL-9010', estado:'En marcha', planta:'Nacional',        horasBase:6200,  horasActual:6200,  usuario:'druiz',     año:'2019' },
]
/* Opciones fijas para selects del editor */
const ESTADOS_EQUIPO = ['En marcha', 'Cargando', 'Falla'];
const PLANTAS_EQUIPO = ['Nacional', 'Deposito Fiscal', 'Mantenimiento', 'Otros'];

/* ── DATOS BOXES ────────────────────────────────────────────── */
const boxesData = Array.from({length: 16}, (_, i) => ({
  numero:    i + 1,
  titulo:    `Contenedor ${i + 1}`,
  ubicacion: `16-5-${Math.floor(i / 4) + 1}-${(i % 4) + 1}`,
  tipo:      i + 1 === 6 ? 'Pallet especial' : 'Pallet',
  ocupacion: i + 1 === 6 ? 78 : Math.min(100, 35 + i * 4),
  estiba:    i + 1 === 6 ? '65984-3' : `6598${i + 1}-1`
}));

const detailProducts = [
  { producto: 'Bondiola de cerdo congelada', fecha: '15/05/2026' },
  { producto: 'Pechito de cerdo congelado',  fecha: '22/05/2026' },
  { producto: 'Pulpa de cerdo exportación',  fecha: '03/06/2026' }
];

/* ── DOM REFS ───────────────────────────────────────────────── */
const historyStack   = [];
const menuGrid       = document.getElementById('menuGrid');
const menuWrap       = document.querySelector('.menu-wrap');
const screenTitle    = document.getElementById('screenTitle');
const screenSubtitle = document.getElementById('screenSubtitle');
const backBtn        = document.getElementById('backBtn');
const homeBtn        = document.getElementById('homeBtn');
const fullscreenBtn  = document.getElementById('fullscreenBtn');
const userBtn        = document.getElementById('userBtn');
const qrBox          = document.getElementById('qrBox');
const sinUbicacionBox= document.getElementById('sinUbicacionBox');
const vencidasBox    = document.getElementById('vencidasBox');
const metaPanel      = document.querySelector('.meta-panel');

/* ── HELPERS GENERALES ──────────────────────────────────────── */
function setHeader(title) {
  screenTitle.textContent    = title;
  screenSubtitle.textContent = USER_NAME;
}

function syncBackBtn() {
  backBtn.disabled = historyStack.length === 0;
}

/* Muestra / oculta la tira de datos superior */
function showMetaPanel(visible) {
  metaPanel.style.display = visible ? 'block' : 'none';
}

/* Modo "expandido" para formularios y vistas de detalle */
function setExpandedMode(enabled) {
  menuWrap.classList.toggle('expanded', enabled);
}

function getTextInitials(text) {
  return text.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function getCustomTileHTML(item) {
  // CARGAS I-2: mostrar % cumplimiento actual
  if (item.title === 'CARGAS I-2') {
    const pct   = Math.round((cargasI2Data.cumplidas / (cargasI2Data.planificadas || 1)) * 100);
    const color = pct >= 80 ? '#00A887' : pct >= 60 ? '#F97316' : '#DC2626';
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top">
          <span class="tile-kpi-badge">I-2</span>
        </div>
        <div class="tile-kpi-value tile-kpi-value--lg" style="color:${color}">${pct}<span class="tile-kpi-sym">%</span></div>
        <div class="tile-kpi-sublabel">CUMPLIMIENTO</div>
        <div class="tile-title one-line tile-label">CARGAS</div>
      </div>`;
  }
  // ALMACENAMIENTO DE POSICIONES I-36: mostrar valor actual del contenedor 5
  if (item.title === 'ALMACENAMIENTO DE POSICIONES') {
    const estEl  = document.getElementById('estibas-en-planta');
    const actual = estEl ? parseInt(estEl.textContent.replace(/\D/g,'')) || 6500 : 6500;
    const color  = actual >= 6200 ? '#00A887' : actual >= 5500 ? '#36B0C9' : '#F97316';
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top">
          <span class="tile-kpi-badge">I-36</span>
        </div>
        <div class="tile-kpi-value tile-kpi-value--md" style="color:${color}">${actual.toLocaleString('es-AR')}</div>
        <div class="tile-kpi-sublabel">POSICIONES</div>
        <div class="tile-title one-line tile-label">ALMACENAMIENTO</div>
      </div>`;
  }
  // POSICIONES INGRESADAS/EGRESADAS: dos valores verde/rojo con barra
  if (item.title === 'POSICIONES INGRESADAS EGRESADAS') {
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">I/E</span></div>
        <div class="tile-kpi-dual">
          <div class="tile-kpi-dual-item green">
            <span class="tile-kpi-dual-val">14.340</span>
            <span class="tile-kpi-dual-lbl">INGR.</span>
          </div>
          <div class="tile-kpi-dual-sep"></div>
          <div class="tile-kpi-dual-item red">
            <span class="tile-kpi-dual-val">15.405</span>
            <span class="tile-kpi-dual-lbl">EGR.</span>
          </div>
        </div>
        <div class="tile-title one-line tile-label">POS. INGR / EGR</div>
      </div>`;
  }
  // CLIENTES QUE OPERARON: cantidad de clientes
  if (item.title === 'CLIENTES QUE OPERARON') {
    const n = clientesOperaron.length;
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">CLI</span></div>
        <div class="tile-kpi-value tile-kpi-value--lg" style="color:#36B0C9">${n}</div>
        <div class="tile-kpi-sublabel">CLIENTES</div>
        <div class="tile-title one-line tile-label">QUE OPERARON</div>
      </div>`;
  }
  // MOVIMIENTOS (dentro de INDICADORES): 6 tiempos promedio
  if (item.title === 'MOVIMIENTOS') {
    const mes = movData.meses[movData.meses.length - 1];
    const veh = movData.vehiculos;
    return `
      <div class="tile-kpi-wrap tile-mov-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">MOV</span></div>
        <div class="tile-mov-grid">
          ${veh.map(v => `
            <div class="tile-mov-item">
              <span class="tile-mov-code">${v.code}</span>
              <span class="tile-mov-val">${Math.round(mes.promedios[v.id].prom * 60)}m</span>
            </div>`).join('')}
        </div>
        <div class="tile-title one-line tile-label">MOVIMIENTOS</div>
      </div>`;
  }
  // AJUSTES DE STOCK: I-3 y I-4 con 2 números
  if (item.title === 'AJUSTES DE STOCK') {
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">AJS</span></div>
        <div class="tile-adj-dual">
          <div class="tile-adj-row"><span class="tile-adj-code">I-3</span><span class="tile-adj-val">1</span></div>
          <div class="tile-adj-row"><span class="tile-adj-code">I-49</span><span class="tile-adj-val">2</span></div>
        </div>
        <div class="tile-title one-line tile-label">AJUSTES STOCK</div>
      </div>`;
  }
  // ESTADISTICAS DE PERSONAL: total usuarios online
  if (item.title === 'ESTADISTICAS DE PERSONAL') {
    const total = personalData.usuarios.length;
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">RRHH</span></div>
        <div class="tile-kpi-value tile-kpi-value--lg" style="color:#A78BFA">${total}</div>
        <div class="tile-kpi-sublabel">USUARIOS</div>
        <div class="tile-title one-line tile-label">ESTADÍSTICAS</div>
      </div>`;
  }
  // USO DE EQUIPOS
  if (item.title === 'USO DE EQUIPOS') {
    const ue = usoEquiposData;
    const mes = ue.meses[ue.meses.length-1];
    return `
      <div class="tile-kpi-wrap tile-mov-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">EQP</span></div>
        <div class="tile-mov-grid">
          <div class="tile-mov-item"><span class="tile-mov-code">BOX</span><span class="tile-mov-val" style="color:#36B0C9">${mes.boxes}h</span></div>
          <div class="tile-mov-item"><span class="tile-mov-code">TRON</span><span class="tile-mov-val" style="color:#36B0C9">${mes.troneras}h</span></div>
          <div class="tile-mov-item"><span class="tile-mov-code">AE</span><span class="tile-mov-val" style="color:#36B0C9">${mes.autoelevadores}h</span></div>
          <div class="tile-mov-item"><span class="tile-mov-code">CAM</span><span class="tile-mov-val" style="color:#36B0C9">${mes.camion}h</span></div>
          <div class="tile-mov-item"><span class="tile-mov-code">LIM</span><span class="tile-mov-val" style="color:#36B0C9">${mes.limpieza}h</span></div>
        </div>
        <div class="tile-title one-line tile-label">USO EQUIPOS</div>
      </div>`;
  }
  // ESTIBAS CONGELADAS: valor del mes en curso
  if (item.title === 'ESTIBAS CONGELADAS') {
    const actual = estibasCongeladasData.meses[estibasCongeladasData.meses.length-1].valor;
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge">❄</span></div>
        <div class="tile-kpi-value tile-kpi-value--md" style="color:#60c8e0">${actual.toLocaleString('es-AR')}</div>
        <div class="tile-kpi-sublabel">ESTIBAS MES</div>
        <div class="tile-title one-line tile-label">CONGELADAS</div>
      </div>`;
  }
  // FACTURACIÓN
  if (item.title === 'FACTURACION') {
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge" style="background:rgba(249,115,22,.2);color:#F97316;border-color:rgba(249,115,22,.4)">FAC</span></div>
        <div style="font-size:2rem;line-height:1">🧾</div>
        <div class="tile-kpi-sublabel">RESÚMENES</div>
        <div class="tile-title one-line tile-label">FACTURACIÓN</div>
      </div>`;
  }
  // REMITOS
  if (item.title === 'REMITOS') {
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge" style="background:rgba(167,139,250,.2);color:#A78BFA;border-color:rgba(167,139,250,.4)">REM</span></div>
        <div style="font-size:2rem;line-height:1">📋</div>
        <div class="tile-kpi-sublabel">DESCARGA</div>
        <div class="tile-title one-line tile-label">REMITOS</div>
      </div>`;
  }
  // COMPRAS
  if (item.title === 'COMPRAS') {
    const pendientes = (typeof comprasDB !== 'undefined') ? comprasDB.ordenes.filter(o => o.estado === 'PENDIENTE').length : 0;
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge" style="background:rgba(250,204,21,.15);color:#FACC15;border-color:rgba(250,204,21,.3)">OC</span></div>
        <div class="tile-kpi-value tile-kpi-value--lg" style="color:#FACC15">${pendientes > 0 ? pendientes : '—'}</div>
        <div class="tile-kpi-sublabel">${pendientes > 0 ? 'PENDIENTES' : 'ÓRDENES'}</div>
        <div class="tile-title one-line tile-label">COMPRAS</div>
      </div>`;
  }

  // SALIDAS: imagen personalizada + cantidad del mes
  if (item.title === 'SALIDAS') {
    const totalMes = logModData.salidas.length; // en producción vendría del server
    return `
      <div class="tile-kpi-wrap">
        <div class="tile-kpi-top"><span class="tile-kpi-badge" style="background:rgba(0,168,135,.18);color:#00A887;border-color:rgba(0,168,135,.4)">SAL</span></div>
        <img src="img/salidassimbolo.png" class="tile-custom-img" alt="Salidas" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div style="font-size:1.6rem;display:none">📤</div>
        <div class="tile-kpi-value tile-kpi-value--lg" style="color:#00A887">${totalMes}</div>
        <div class="tile-kpi-sublabel">SALIDAS DEL MES</div>
        <div class="tile-title one-line tile-label">SALIDAS</div>
      </div>`;
  }
  return null; // usar HTML por defecto
}

function getIconMarkup(title) {
  const imageMap = {
    'SISTEMA DE GESTION': 'img/iso_logo.png',
    'SENASA':             'img/senasa_logo.png'
  };
  if (imageMap[title]) {
    return `<img src="${imageMap[title]}" alt="${title}" onerror="this.style.display='none';this.parentElement.textContent='${getTextInitials(title)}';">`;
  }
  const symbolMap = {
    'LOGISTICA NACIONAL':     '🚛',
    'LOGISTICA FISCAL':       '📦',
    'CALIDAD':                '🌡',
    'PORTERIA':               '🚪',
    'TRANSPORTE':             '🚚',
    'INDICADORES':            '📊',
    'REPORTES':               '📑',
    'DASHBOARD':              '🖥',
    'ADMINISTRACION':         '🗂',
    'RRHH':                   '👥',
    'MANTENIMIENTO':          '🔧',
    'CONFIGURACION':          '⚙',
    'PRODUCTOS':              '📦',
    'OTROS SISTEMAS':         '🧩',
    'INFORMACION DOCUMENTADA':'📚',
    'REGISTRO PR 44':         '🗂',
    'FORMACION':              '👨‍🏫',
    'MAPA DE BOXES':          '🗺'
  };
  return symbolMap[title] || getTextInitials(title);
}

function getEquipmentIconMarkup(item) {
  if (item.isImage) {
    return `<img src="${item.icono}" alt="${item.tipo}" onerror="this.style.display='none';this.parentElement.textContent='🛗';">`;
  }
  return item.icono;
}

function getGridLayout(count) {
  // Returns a CSS class and also sets a data-count attribute on menuGrid
  // so CSS can use the right tile size
  if (count === 1)  return 'layout-1';
  if (count === 2)  return 'layout-2';
  if (count === 3)  return 'layout-3';
  if (count <= 4)   return 'layout-4';
  if (count <= 5)   return 'layout-5';
  if (count <= 6)   return 'layout-6';
  if (count <= 8)   return 'layout-8';
  if (count <= 9)   return 'layout-9';
  if (count <= 12)  return 'layout-12';
  if (count <= 14)  return 'layout-14';
  return 'layout-16';
}

function formatTitle(title) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return title;
  if (words.length === 2) return `${words[0]}<br>${words[1]}`;
  const mid = Math.ceil(words.length / 2);
  return `${words.slice(0, mid).join(' ')}<br>${words.slice(mid).join(' ')}`;
}

function titleClass(title) {
  return title.trim().split(/\s+/).length >= 2 ? 'two-lines' : 'one-line';
}

function openModule(url) {
  // Si es URL del sistema interno CINA, embeber en iframe
  if (url && url.includes('sistema.cinafrio.com')) {
    renderIframe(url);
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── IFRAME EMBEBIDO ─────────────────────────────────────────
   Carga páginas internas del sistema dentro del workspace,
   ocultando el sidebar y el botón de toggle de AdminLTE.
   ──────────────────────────────────────────────────────────── */
function renderIframe(url) {
  showMetaPanel(true);
  setExpandedMode(false);

  workspace.innerHTML = `
    <div class="iframe-wrap">
      <div class="iframe-toolbar">
        <span class="iframe-url-label">🌐 sistema.cinafrio.com</span>
        <a class="iframe-open-btn" href="${url}" target="_blank" title="Abrir en pestaña nueva">
          ↗ Nueva pestaña
        </a>
      </div>
      <iframe
        id="cinaFrame"
        src="${url}"
        class="cina-iframe"
        frameborder="0"
      ></iframe>
    </div>
  `;

  // Inyectar CSS en el iframe para ocultar sidebar AdminLTE
  const frame = document.getElementById('cinaFrame');
  if (frame) {
    frame.addEventListener('load', () => {
      try {
        const doc = frame.contentDocument || frame.contentWindow.document;
        const style = doc.createElement('style');
        style.textContent = `
          .main-sidebar { display: none !important; }
          .sidebar-toggle { display: none !important; }
          .content-wrapper { margin-left: 0 !important; }
          .main-header .logo { display: none !important; }
          .main-header .navbar { margin-left: 0 !important; }
          body { overflow-y: auto !important; }
          .main-footer { display: none !important; }
        `;
        doc.head.appendChild(style);
        // También ocultar via DOM directo
        ['aside.main-sidebar', '.sidebar-toggle', '.logo'].forEach(sel => {
          const el = doc.querySelector(sel);
          if (el) el.style.cssText += 'display:none!important';
        });
        const cw = doc.querySelector('.content-wrapper');
        if (cw) cw.style.marginLeft = '0';
        const nav = doc.querySelector('.navbar');
        if (nav) nav.style.marginLeft = '0';
      } catch(e) {
        // Cross-origin: no se puede modificar — igualmente el iframe carga
        console.warn('iframe cross-origin, no se pudo inyectar CSS:', e);
      }
    });
  }

  historyStack.push({ title: 'INICIO', children: menuTree });
  syncBackBtn();
}

function darkenColor(hex, amount) {
  let color = hex.replace('#', '');
  if (color.length === 3) color = color.split('').map(c => c + c).join('');
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function getTileColors(item, level) {
  const base = level === 0 ? (mainColorMap[item.title] || '#001F60') : '#163A7A';
  return { start: base, end: darkenColor(base, -28) };
}

function buildClientSlots(clientes) {
  const total  = 6;
  const filled = clientes.slice(0, total);
  const slots  = filled.map(c => `<div class="client-badge" title="${c}">${c}</div>`);
  for (let i = slots.length; i < total; i++) slots.push('<div class="client-badge empty"></div>');
  return slots.join('');
}

function getTemperatureStyle(temp) {
  if (temp >= 0)   return 'linear-gradient(135deg,#16a34a,#22c55e)';
  if (temp > -10)  return 'linear-gradient(135deg,#0891b2,#06b6d4)';
  if (temp > -20)  return 'linear-gradient(135deg,#2563eb,#3b82f6)';
  if (temp > -25)  return 'linear-gradient(135deg,#4338ca,#6366f1)';
  return 'linear-gradient(135deg,#7e22ce,#a855f7)';
}

function buildStatusRow(item) {
  return `
    <div class="dashboard-status-row">
      <div class="status-box ${item.puerta    ? 'true-state' : 'false-state'}" title="Puerta">🚪</div>
      <div class="status-box ${item.ventilador ? 'true-state' : 'false-state'}" title="Ventilador">🌀</div>
    </div>`;
}

function getEquipmentCardClass(estado) {
  if (estado === 'En marcha') return 'state-running-card';
  if (estado === 'Cargando')  return 'state-charging-card';
  return 'state-failure-card';
}

/* ── MODAL DE EDICIÓN DE EQUIPO ─────────────────────────────── */
function openEquipmentModal(index) {
  const item = dashboardEquipamientoData[index];

  // Eliminar modal previo si existe
  document.getElementById('equipModal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'equipModal';
  modal.className = 'equip-modal-overlay';

  modal.innerHTML = `
    <div class="equip-modal">
      <div class="equip-modal-header">
        <div class="equip-modal-title">
          <span class="equip-modal-denom">${item.denominacion}</span>
          <span class="equip-modal-type">${item.tipo}</span>
        </div>
        <button class="equip-modal-close" id="equipModalClose">✕</button>
      </div>

      <div class="equip-modal-body">

        <div class="equip-modal-field">
          <label class="equip-modal-label" for="em_estado">Estado</label>
          <div class="equip-modal-select-wrap">
            ${ESTADOS_EQUIPO.map(e => `
              <label class="equip-state-opt ${e === item.estado ? 'selected' : ''} state-opt-${e.toLowerCase().replace(/ /g,'-')}">
                <input type="radio" name="em_estado" value="${e}" ${e === item.estado ? 'checked' : ''}>
                ${e}
              </label>`).join('')}
          </div>
        </div>

        <div class="equip-modal-field">
          <label class="equip-modal-label" for="em_planta">Planta</label>
          <select id="em_planta" class="equip-modal-select">
            ${PLANTAS_EQUIPO.map(p => `<option value="${p}" ${p === item.planta ? 'selected' : ''}>${p}</option>`).join('')}
          </select>
        </div>

        <div class="equip-modal-field">
          <label class="equip-modal-label" for="em_usuario">Usuario</label>
          <input id="em_usuario" class="equip-modal-input" type="text" value="${item.usuario}" placeholder="Nombre de usuario">
        </div>

        <div class="equip-modal-field">
          <label class="equip-modal-label" for="em_horas">Horas en estado</label>
          <input id="em_horas" class="equip-modal-input" type="text" value="${item.horas}" placeholder="Ej: 01:30hs">
        </div>

      </div>

      <div class="equip-modal-footer">
        <button class="equip-modal-btn cancel" id="equipModalCancel">Cancelar</button>
        <button class="equip-modal-btn save"   id="equipModalSave">💾 Guardar cambios</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  /* Resaltar opción de estado al hacer click */
  modal.querySelectorAll('input[name="em_estado"]').forEach(radio => {
    radio.addEventListener('change', () => {
      modal.querySelectorAll('.equip-state-opt').forEach(l => l.classList.remove('selected'));
      radio.parentElement.classList.add('selected');
    });
  });

  /* Cerrar al click fuera */
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  document.getElementById('equipModalClose').addEventListener('click', closeModal);
  document.getElementById('equipModalCancel').addEventListener('click', closeModal);

  document.getElementById('equipModalSave').addEventListener('click', () => {
    const nuevoEstado  = modal.querySelector('input[name="em_estado"]:checked')?.value || item.estado;
    const nuevaPlanta  = document.getElementById('em_planta').value.trim();
    const nuevoUsuario = document.getElementById('em_usuario').value.trim();
    const nuevasHoras  = document.getElementById('em_horas').value.trim();

    // Validaciones básicas
    if (!nuevoUsuario) { showModalError('El campo usuario no puede estar vacío.'); return; }
    if (!nuevasHoras)  { showModalError('El campo horas no puede estar vacío.');  return; }

    // Persistir en el array fuente
    dashboardEquipamientoData[index].estado  = nuevoEstado;
    dashboardEquipamientoData[index].planta  = nuevaPlanta;
    dashboardEquipamientoData[index].usuario = nuevoUsuario;
    dashboardEquipamientoData[index].horas   = nuevasHoras;

    closeModal();

    // Re-renderizar el dashboard con los datos actualizados
    renderDashboardEquipamiento();

    showToast(`✓ ${item.denominacion} actualizado correctamente`);
  });

  // Animar entrada
  requestAnimationFrame(() => modal.classList.add('visible'));

  function closeModal() {
    modal.classList.remove('visible');
    setTimeout(() => modal.remove(), 220);
  }

  function showModalError(msg) {
    let err = modal.querySelector('.equip-modal-error');
    if (!err) {
      err = document.createElement('p');
      err.className = 'equip-modal-error';
      modal.querySelector('.equip-modal-footer').prepend(err);
    }
    err.textContent = msg;
  }
}

/* Toast de confirmación */
function showToast(msg) {
  document.getElementById('cinaToast')?.remove();
  const toast = document.createElement('div');
  toast.id = 'cinaToast';
  toast.className = 'cina-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ── RENDERS ────────────────────────────────────────────────── */
function renderDashboardLogisticaNacional() {
  setHeader('DASHBOARD LOGISTICA NACIONAL');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'dashboard-grid';

  dashboardLogisticaNacionalData.forEach(item => {
    const card = document.createElement('button');
    card.className = 'dashboard-card';
    card.type = 'button';
    card.innerHTML = `
      <div class="dashboard-left">
        <div class="dashboard-temp" style="background:${getTemperatureStyle(item.temperatura)}">
          <div class="dashboard-temp-label">Temp.</div>
          <div class="dashboard-temp-value">${item.temperatura}°C</div>
        </div>
        <div class="dashboard-alert">
          <div class="dashboard-alert-value">${item.extra}</div>
        </div>
      </div>
      <div class="dashboard-main">
        <div class="dashboard-title">${item.tipo} ${item.nombre}</div>
        <div class="dashboard-number">${item.estibas}</div>
        <div class="dashboard-sub">ESTIBAS</div>
        ${buildStatusRow(item)}
      </div>
      <div class="dashboard-clients">${buildClientSlots(item.clientes)}</div>`;
    grid.appendChild(card);
  });

  menuGrid.appendChild(grid);
  syncBackBtn();
}

function renderDashboardEquipamiento() {
  setHeader('DASHBOARD EQUIPAMIENTO');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'width:100%;box-sizing:border-box;padding:0 4px;';

  const grid = document.createElement('div');
  grid.className = 'equipment-grid';

  dashboardEquipamientoData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `equipment-card ${getEquipmentCardClass(item.estado)}`;

    card.innerHTML = `
      <div class="equipment-header">
        <div class="equipment-icon">${getEquipmentIconMarkup(item)}</div>
        <div class="equipment-title-wrap">
          <div class="equipment-type">${item.tipo}</div>
          <div class="equipment-name">${item.denominacion}</div>
        </div>
        <button class="equipment-edit-btn" title="Editar equipo" data-index="${index}">✏️</button>
      </div>
      <div class="equipment-row">
        <div class="equipment-label">Estado</div>
        <div class="equipment-value"><span class="state-badge">${item.estado}</span></div>
      </div>
      <div class="equipment-row">
        <div class="equipment-label">Marca / Modelo</div>
        <div class="equipment-value" style="font-size:.7rem">${item.marca||''} ${item.modelo||''}</div>
      </div>
      <div class="equipment-row">
        <div class="equipment-label">Horómetro</div>
        <div class="equipment-value"><strong>${(item.horasActual||item.horasBase||0).toLocaleString('es-AR')}</strong> hs</div>
      </div>
      <div class="equipment-row">
        <div class="equipment-label">Planta</div>
        <div class="equipment-value"><span class="plant-badge">${item.planta}</span></div>
      </div>
      <div class="equipment-row">
        <div class="equipment-label">Usuario</div>
        <div class="equipment-value">${item.usuario}</div>
      </div>`;

    // Botón editar dentro de la card
    card.querySelector('.equipment-edit-btn').addEventListener('click', e => {
      e.stopPropagation();
      openEquipmentModal(index);
    });

    // Click en la card según estado
    card.addEventListener('click', () => {
      if (item.estado === 'Cargando')    openChecklistEnMarcha(index);   // lista para poner en marcha
      else if (item.estado === 'Falla')  openCambioEstadoEquipo(index);  // solo pasar a Cargando
      else if (item.estado === 'En marcha') openCambioEstadoEquipo(index); // pasar a Falla o Cargando
    });
    card.style.cursor = 'pointer';

    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
  menuGrid.appendChild(wrapper);
  syncBackBtn();
}


/* ═══════════════════════════════════════════════════════════════
   INDICADOR: CARGAS I-2
   ═══════════════════════════════════════════════════════════════ */

// Datos base del indicador
const cargasI2Data = {
  planificadas: 10,
  cumplidas: 7,
  pendientes: 12,
  postergadas: 2,
  enEjecucion: 2,
};

// Datos históricos mensuales (últimos 12 meses) — cumplidas / total
const cargasI2Mensual = [
  { mes: 'Abr 24', cumplidas: 42, total: 58 },
  { mes: 'May 24', cumplidas: 55, total: 70 },
  { mes: 'Jun 24', cumplidas: 38, total: 52 },
  { mes: 'Jul 24', cumplidas: 61, total: 74 },
  { mes: 'Ago 24', cumplidas: 49, total: 63 },
  { mes: 'Sep 24', cumplidas: 53, total: 68 },
  { mes: 'Oct 24', cumplidas: 47, total: 60 },
  { mes: 'Nov 24', cumplidas: 66, total: 79 },
  { mes: 'Dic 24', cumplidas: 44, total: 58 },
  { mes: 'Ene 25', cumplidas: 58, total: 71 },
  { mes: 'Feb 25', cumplidas: 51, total: 65 },
  { mes: 'Mar 25', cumplidas: 7,  total: 33 },
];


// Datos cargas por depósito (misma proporción, dividida Nacional 60% / Fiscal 40%)
const cargasI2Nacional = [
  { mes: 'Abr 24', cumplidas: 25, total: 35 },
  { mes: 'May 24', cumplidas: 33, total: 42 },
  { mes: 'Jun 24', cumplidas: 23, total: 31 },
  { mes: 'Jul 24', cumplidas: 37, total: 44 },
  { mes: 'Ago 24', cumplidas: 29, total: 38 },
  { mes: 'Sep 24', cumplidas: 32, total: 41 },
  { mes: 'Oct 24', cumplidas: 28, total: 36 },
  { mes: 'Nov 24', cumplidas: 40, total: 47 },
  { mes: 'Dic 24', cumplidas: 26, total: 35 },
  { mes: 'Ene 25', cumplidas: 35, total: 43 },
  { mes: 'Feb 25', cumplidas: 31, total: 39 },
  { mes: 'Mar 25', cumplidas: 4,  total: 20 },
];
const cargasI2Fiscal = [
  { mes: 'Abr 24', cumplidas: 17, total: 23 },
  { mes: 'May 24', cumplidas: 22, total: 28 },
  { mes: 'Jun 24', cumplidas: 15, total: 21 },
  { mes: 'Jul 24', cumplidas: 24, total: 30 },
  { mes: 'Ago 24', cumplidas: 20, total: 25 },
  { mes: 'Sep 24', cumplidas: 21, total: 27 },
  { mes: 'Oct 24', cumplidas: 19, total: 24 },
  { mes: 'Nov 24', cumplidas: 26, total: 32 },
  { mes: 'Dic 24', cumplidas: 18, total: 23 },
  { mes: 'Ene 25', cumplidas: 23, total: 28 },
  { mes: 'Feb 25', cumplidas: 20, total: 26 },
  { mes: 'Mar 25', cumplidas: 3,  total: 13 },
];
function renderIndicadorCargasI2() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // ── CARD PRINCIPAL ──────────────────────────────────────────
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'indicador-card';
  card.title = 'Ver detalle por período';

  const total = cargasI2Data.planificadas + cargasI2Data.cumplidas +
                cargasI2Data.pendientes  + cargasI2Data.postergadas +
                cargasI2Data.enEjecucion;
  const pct = Math.round((cargasI2Data.cumplidas / (cargasI2Data.planificadas || 1)) * 100);

  card.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">I-2</span>
        CARGAS
      </div>
      <span class="indicador-hint">Toca para ver detalle por período →</span>
    </div>
    <div class="indicador-card-body">
      <canvas id="cargasPieChart" width="220" height="220"></canvas>
      <div class="indicador-legend">
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#36B0C9"></span>Planificadas<strong>${cargasI2Data.planificadas}</strong></div>
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#00A887"></span>Cumplidas<strong>${cargasI2Data.cumplidas}</strong></div>
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#F97316"></span>Pendientes<strong>${cargasI2Data.pendientes}</strong></div>
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#DC2626"></span>Postergadas<strong>${cargasI2Data.postergadas}</strong></div>
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#FACC15"></span>En ejecución<strong>${cargasI2Data.enEjecucion}</strong></div>
        <div class="ind-leg-sep"></div>
        <div class="ind-leg-item ind-leg-pct"><span>Cumpl. / Planif.</span><strong>${pct}%</strong></div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openCargasI2Modal());
  wrap.appendChild(card);

  // ── TABLA MENSUAL ────────────────────────────────────────────
  const mensualSection = document.createElement('div');
  mensualSection.className = 'indicador-mensual';
  mensualSection.innerHTML = `
    <div class="indicador-mensual-title">📅 Promedio mensual — Cumplidas / Total (últimos 12 meses)</div>
    <div class="indicador-mensual-grid">
      ${cargasI2Mensual.map(m => {
        const p = Math.round((m.cumplidas / m.total) * 100);
        const color = p >= 80 ? '#00A887' : p >= 60 ? '#F97316' : '#DC2626';
        return `
          <div class="ind-mes-card">
            <div class="ind-mes-label">${m.mes}</div>
            <div class="ind-mes-pct" style="color:${color}">${p}%</div>
            <div class="ind-mes-bar-wrap">
              <div class="ind-mes-bar-fill" style="width:${p}%;background:${color}"></div>
            </div>
            <div class="ind-mes-detail">${m.cumplidas}/${m.total}</div>
          </div>`;
      }).join('')}
    </div>
  `;
  wrap.appendChild(mensualSection);

  // ── SEPARADOR DEPOSITOS ──────────────────────────────────────
  const depTitle = document.createElement('div');
  depTitle.className = 'indicador-mensual';
  depTitle.innerHTML = '<div class="indicador-mensual-title">🏭 Cargas por Depósito — Depósito Nacional vs Depósito Fiscal</div>';
  wrap.appendChild(depTitle);

  // Helper: build deposito card without nested template literals
  const buildDepCard = (datos, label, badgeColor, pieId) => {
    const total  = datos.reduce((s,m)=>s+m.total,0);
    const cumpl  = datos.reduce((s,m)=>s+m.cumplidas,0);
    const pctG   = Math.round((cumpl/total)*100);
    const colorG = pctG>=80?'#00A887':pctG>=60?'#F97316':'#DC2626';

    const mesCards = datos.map(m => {
      const p = Math.round((m.cumplidas/m.total)*100);
      const c = p>=80?'#00A887':p>=60?'#F97316':'#DC2626';
      return '<div class="ind-mes-card">'
           + '<div class="ind-mes-label">'+m.mes+'</div>'
           + '<div class="ind-mes-pct" style="color:'+c+'">'+p+'%</div>'
           + '<div class="ind-mes-bar-wrap"><div class="ind-mes-bar-fill" style="width:'+p+'%;background:'+c+'"></div></div>'
           + '<div class="ind-mes-detail">'+m.cumplidas+'/'+m.total+'</div>'
           + '</div>';
    }).join('');

    const col = document.createElement('div');
    col.className = 'cargas-dep-col';
    col.innerHTML =
      '<div class="indicador-card indicador-card-static cargas-dep-card">'
    + '  <div class="indicador-card-header">'
    + '    <div class="indicador-card-title">'
    + '      <span class="indicador-badge" style="background:'+badgeColor+'20;color:'+badgeColor+';border-color:'+badgeColor+'40">I-2</span>'
    + '      '+label
    + '    </div>'
    + '  </div>'
    + '  <div class="indicador-card-body" style="gap:12px">'
    + '    <canvas id="'+pieId+'" width="160" height="160"></canvas>'
    + '    <div class="indicador-legend">'
    + '      <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#36B0C9"></span>Planif.<strong>'+Math.round(total*0.3)+'</strong></div>'
    + '      <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#00A887"></span>Cumpl.<strong>'+cumpl+'</strong></div>'
    + '      <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#F97316"></span>Pend.<strong>'+Math.round(total*0.18)+'</strong></div>'
    + '      <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#DC2626"></span>Post.<strong>'+Math.round(total*0.06)+'</strong></div>'
    + '      <div class="ind-leg-sep"></div>'
    + '      <div class="ind-leg-item ind-leg-pct"><span>Cumpl.</span><strong style="color:'+colorG+'">'+pctG+'%</strong></div>'
    + '    </div>'
    + '  </div>'
    + '  <div class="indicador-mensual-grid cargas-dep-grid" style="margin-top:10px">'
    + mesCards
    + '  </div>'
    + '</div>';
    return col;
  };

  const depRow = document.createElement('div');
  depRow.className = 'cargas-dep-row';
  depRow.appendChild(buildDepCard(cargasI2Nacional, 'Depósito Nacional', '#36B0C9', 'pieNacional'));
  depRow.appendChild(buildDepCard(cargasI2Fiscal,   'Depósito Fiscal',   '#A78BFA', 'pieFiscal'));
  wrap.appendChild(depRow);

  menuGrid.appendChild(wrap);
  syncBackBtn();

  // Draw all pies after DOM is ready
  requestAnimationFrame(() => {
    drawCargasPie();
    drawDepPie('pieNacional', cargasI2Nacional, '#36B0C9');
    drawDepPie('pieFiscal',   cargasI2Fiscal,   '#A78BFA');
  });
  syncBackBtn();
}


function drawDepPie(canvasId, datos, accentColor) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W/2, cy = H/2;
  const outerR = Math.min(W,H)/2 - 4;
  const innerR = outerR * 0.52;
  const total  = datos.reduce((s,m)=>s+m.total,0);
  const cumpl  = datos.reduce((s,m)=>s+m.cumplidas,0);
  const pend   = Math.round(total*0.18);
  const post   = Math.round(total*0.06);
  const planif = total - cumpl - pend - post;
  const slices = [
    { value: planif, color: '#36B0C9' },
    { value: cumpl,  color: '#00A887' },
    { value: pend,   color: '#F97316' },
    { value: post,   color: '#DC2626' },
  ];
  const sum = slices.reduce((s,sl)=>s+sl.value,0);
  let angle = -Math.PI/2;
  ctx.clearRect(0,0,W,H);
  slices.forEach(sl => {
    const sweep = (sl.value/sum)*2*Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,outerR,angle,angle+sweep);
    ctx.closePath();
    ctx.fillStyle = sl.color;
    ctx.fill();
    angle += sweep;
  });
  ctx.beginPath();
  ctx.arc(cx,cy,innerR,0,2*Math.PI);
  ctx.fillStyle = '#0f1e35';
  ctx.fill();
  const pct = Math.round((cumpl/sum)*100);
  const color = pct>=80?'#00A887':pct>=60?'#F97316':'#DC2626';
  ctx.fillStyle = color;
  ctx.font = 'bold 22px Segoe UI';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(pct+'%', cx, cy-8);
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.font = '10px Segoe UI';
  ctx.fillText('cumpl.', cx, cy+10);
}
function drawCargasPie() {
  const canvas = document.getElementById('cargasPieChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const outerR = Math.min(W, H) / 2 - 6;
  const innerR = outerR * 0.55;

  const slices = [
    { value: cargasI2Data.planificadas, color: '#36B0C9' },
    { value: cargasI2Data.cumplidas,    color: '#00A887' },
    { value: cargasI2Data.pendientes,   color: '#F97316' },
    { value: cargasI2Data.postergadas,  color: '#DC2626' },
    { value: cargasI2Data.enEjecucion,  color: '#FACC15' },
  ];
  const total = slices.reduce((s, x) => s + x.value, 0);

  ctx.clearRect(0, 0, W, H);
  let startAngle = -Math.PI / 2;
  slices.forEach(slice => {
    const angle = (slice.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, outerR, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();
    startAngle += angle;
  });
  // Donut hole
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,20,60,0.92)';
  ctx.fill();
  // Centro: total
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 28px Segoe UI, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(total, cx, cy - 10);
  ctx.font = '11px Segoe UI, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.6)';
  ctx.fillText('TOTAL', cx, cy + 14);
}

/* ── MODAL DETALLE POR PERÍODO ─────────────────────────────── */
function openCargasI2Modal() {
  // Datos simulados por día (se reemplazarán al filtrar)
  const today = new Date();
  const defEnd = today.toISOString().split('T')[0];
  const defStart = new Date(today - 30 * 864e5).toISOString().split('T')[0];

  const overlay = document.createElement('div');
  overlay.className = 'equip-modal-overlay';
  overlay.id = 'cargasI2Overlay';
  document.body.appendChild(overlay);

  overlay.innerHTML = `
    <div class="equip-modal cargas-modal">
      <div class="equip-modal-header">
        <div class="equip-modal-title">
          <span class="equip-modal-denom">CARGAS I-2</span>
          <span class="equip-modal-type">Detalle por período</span>
        </div>
        <button class="equip-modal-close" id="cargasModalClose">✕</button>
      </div>
      <div class="equip-modal-body cargas-modal-body">
        <div class="cargas-filtros">
          <div class="equip-modal-field">
            <label class="equip-modal-label">Fecha inicio</label>
            <input type="date" class="equip-modal-input" id="cargasFechaInicio" value="${defStart}">
          </div>
          <div class="equip-modal-field">
            <label class="equip-modal-label">Fecha fin</label>
            <input type="date" class="equip-modal-input" id="cargasFechaFin" value="${defEnd}">
          </div>
          <button class="equip-modal-btn save cargas-apply-btn" id="cargasApplyBtn">Ver gráfico</button>
        </div>
        <div class="cargas-chart-wrap">
          <canvas id="cargasLineChart"></canvas>
        </div>
        <div class="cargas-chart-legend">
          <span><span class="ind-leg-dot" style="background:#36B0C9;display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px"></span>Planificadas</span>
          <span><span class="ind-leg-dot" style="background:#00A887;display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px"></span>Cumplidas</span>
          <span><span class="ind-leg-dot" style="background:#F97316;display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px"></span>Pendientes</span>
          <span><span class="ind-leg-dot" style="background:#DC2626;display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px"></span>Postergadas</span>
          <span><span class="ind-leg-dot" style="background:#FACC15;display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px"></span>En ejecución</span>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => overlay.classList.add('visible'));

  document.getElementById('cargasModalClose').addEventListener('click', () => {
    overlay.classList.remove('visible');
    setTimeout(() => overlay.remove(), 250);
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('visible');
      setTimeout(() => overlay.remove(), 250);
    }
  });

  // Dibujar al abrir
  drawCargasLine(defStart, defEnd);

  document.getElementById('cargasApplyBtn').addEventListener('click', () => {
    const fi = document.getElementById('cargasFechaInicio').value;
    const ff = document.getElementById('cargasFechaFin').value;
    if (fi && ff && fi <= ff) drawCargasLine(fi, ff);
  });
}

function generateDayData(startStr, endStr) {
  // Genera datos simulados día a día entre las fechas
  const start = new Date(startStr);
  const end   = new Date(endStr);
  const days  = [];
  const rng   = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let seed    = start.getTime(); // pseudo-seed para consistencia
  const rand  = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) / 0xffffffff; };

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const plan = Math.floor(rand() * 8) + 3;
    const cum  = Math.floor(rand() * plan);
    const pend = Math.floor(rand() * 6) + 1;
    const post = Math.floor(rand() * 3);
    const ejec = Math.floor(rand() * 3);
    days.push({
      label: d.toLocaleDateString('es-AR', { day:'2-digit', month:'2-digit' }),
      planificadas: plan, cumplidas: cum,
      pendientes: pend, postergadas: post, enEjecucion: ejec
    });
  }
  return days;
}

function drawCargasLine(startStr, endStr) {
  const canvas = document.getElementById('cargasLineChart');
  if (!canvas) return;

  const days = generateDayData(startStr, endStr);
  const ctx  = canvas.getContext('2d');

  // Ajustar tamaño al contenedor
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth  || 600;
  canvas.height = wrap.clientHeight || 280;
  const W = canvas.width, H = canvas.height;
  const PAD = { top: 20, right: 20, bottom: 42, left: 36 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;

  const series = [
    { key: 'planificadas', color: '#36B0C9' },
    { key: 'cumplidas',    color: '#00A887' },
    { key: 'pendientes',   color: '#F97316' },
    { key: 'postergadas',  color: '#DC2626' },
    { key: 'enEjecucion',  color: '#FACC15' },
  ];

  // Max value for scale
  const maxVal = Math.max(...days.flatMap(d => series.map(s => d[s.key]))) + 2;
  const xStep = chartW / Math.max(days.length - 1, 1);

  ctx.clearRect(0, 0, W, H);

  // Background grid lines
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = PAD.top + chartH - (i / 4) * chartH;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.45)';
    ctx.font = '10px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round((i / 4) * maxVal), PAD.left - 4, y + 4);
  }

  // X axis labels (show every N days to avoid crowding)
  const step = Math.max(1, Math.ceil(days.length / 12));
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.font = '10px Segoe UI';
  ctx.textAlign = 'center';
  days.forEach((d, i) => {
    if (i % step === 0 || i === days.length - 1) {
      const x = PAD.left + i * xStep;
      ctx.fillText(d.label, x, H - PAD.bottom + 14);
    }
  });

  // Draw lines + fill areas
  series.forEach(s => {
    // Fill area
    ctx.beginPath();
    days.forEach((d, i) => {
      const x = PAD.left + i * xStep;
      const y = PAD.top + chartH - (d[s.key] / maxVal) * chartH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(PAD.left + (days.length - 1) * xStep, PAD.top + chartH);
    ctx.lineTo(PAD.left, PAD.top + chartH);
    ctx.closePath();
    ctx.fillStyle = s.color + '22';
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    days.forEach((d, i) => {
      const x = PAD.left + i * xStep;
      const y = PAD.top + chartH - (d[s.key] / maxVal) * chartH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots (only if few days)
    if (days.length <= 20) {
      days.forEach((d, i) => {
        const x = PAD.left + i * xStep;
        const y = PAD.top + chartH - (d[s.key] / maxVal) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      });
    }
  });
}


/* ═══════════════════════════════════════════════════════════════
   INDICADOR: POSICIONES ALMACENADAS I-36
   ═══════════════════════════════════════════════════════════════ */

const posicionesI36Mensual = [
  { mes: 'Abr 24', valor: 5820 },
  { mes: 'May 24', valor: 6100 },
  { mes: 'Jun 24', valor: 5430 },
  { mes: 'Jul 24', valor: 6350 },
  { mes: 'Ago 24', valor: 5980 },
  { mes: 'Sep 24', valor: 6220 },
  { mes: 'Oct 24', valor: 5760 },
  { mes: 'Nov 24', valor: 6480 },
  { mes: 'Dic 24', valor: 5510 },
  { mes: 'Ene 25', valor: 6040 },
  { mes: 'Feb 25', valor: 5890 },
  { mes: 'Mar 25', valor: 6500 },
];

function renderIndicadorPosiciones() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  // Leer el valor actual del contenedor 5 (ESTIBAS EN PLANTA)
  const estEl  = document.getElementById('estibas-en-planta');
  const actual = estEl ? parseInt(estEl.textContent.replace(/\D/g,'')) || 6500 : 6500;

  // Calcular promedio de los 12 meses
  const promedio = Math.round(posicionesI36Mensual.reduce((s,m) => s + m.valor, 0) / posicionesI36Mensual.length);
  const minVal   = 5000;
  const maxVal   = 6500;
  const pct      = Math.round(((actual - minVal) / (maxVal - minVal)) * 100);
  const color    = actual >= 6200 ? '#00A887' : actual >= 5500 ? '#36B0C9' : '#F97316';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // ── Card principal ──────────────────────────────────────────
  const card = document.createElement('div');
  card.className = 'indicador-card indicador-card-static';
  card.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">I-36</span>
        POSICIONES ALMACENADAS
      </div>
      <span class="indicador-hint">Promedio 12 meses: ${promedio.toLocaleString('es-AR')}</span>
    </div>
    <div class="indicador-card-body">
      <div class="indicador-big-pct">
        <svg viewBox="0 0 120 120" class="indicador-ring-svg">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="10"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="${color}"
            stroke-width="10" stroke-linecap="round"
            stroke-dasharray="${Math.round(Math.min(pct,100) * 3.267)} 326.7"
            transform="rotate(-90 60 60)"/>
        </svg>
        <div class="indicador-ring-center">
          <span class="indicador-ring-val" style="font-size:1.6rem">${actual.toLocaleString('es-AR')}</span>
          <span class="indicador-ring-label">POSICIONES</span>
        </div>
      </div>
      <div class="indicador-legend">
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:${color}"></span>Actuales<strong>${actual.toLocaleString('es-AR')}</strong></div>
        <div class="ind-leg-item"><span class="ind-leg-dot" style="background:#36B0C9"></span>Promedio 12m<strong>${promedio.toLocaleString('es-AR')}</strong></div>
        <div class="ind-leg-sep"></div>
        <div class="ind-leg-item"><span style="color:rgba(255,255,255,.5);font-size:.75rem">Mín referencia</span><strong style="color:rgba(255,255,255,.5)">${minVal.toLocaleString('es-AR')}</strong></div>
        <div class="ind-leg-item"><span style="color:rgba(255,255,255,.5);font-size:.75rem">Máx referencia</span><strong style="color:rgba(255,255,255,.5)">${maxVal.toLocaleString('es-AR')}</strong></div>
      </div>
    </div>
  `;
  wrap.appendChild(card);

  // ── Gráfico de barras mensual ───────────────────────────────
  const chartSection = document.createElement('div');
  chartSection.className = 'indicador-mensual';
  chartSection.innerHTML = `
    <div class="indicador-mensual-title">📦 Posiciones promedio por mes — últimos 12 meses</div>
    <div class="posiciones-chart-wrap">
      <canvas id="posicionesBarChart"></canvas>
    </div>
  `;
  wrap.appendChild(chartSection);

  // ── Mini-cards mensuales ────────────────────────────────────
  const gridSection = document.createElement('div');
  gridSection.className = 'indicador-mensual';
  gridSection.innerHTML = `
    <div class="indicador-mensual-title">📊 Detalle mensual</div>
    <div class="indicador-mensual-grid">
      ${posicionesI36Mensual.map(m => {
        const p   = Math.round(((m.valor - minVal) / (maxVal - minVal)) * 100);
        const col = m.valor >= 6200 ? '#00A887' : m.valor >= 5500 ? '#36B0C9' : '#F97316';
        const isActual = m.mes === posicionesI36Mensual[posicionesI36Mensual.length-1].mes;
        return `
          <div class="ind-mes-card${isActual ? ' ind-mes-actual' : ''}">
            <div class="ind-mes-label">${m.mes}</div>
            <div class="ind-mes-pct" style="color:${col}">${m.valor.toLocaleString('es-AR')}</div>
            <div class="ind-mes-bar-wrap">
              <div class="ind-mes-bar-fill" style="width:${p}%;background:${col}"></div>
            </div>
            <div class="ind-mes-detail">${isActual ? '← actual' : ''}</div>
          </div>`;
      }).join('')}
    </div>
  `;
  wrap.appendChild(gridSection);
  menuGrid.appendChild(wrap);
  syncBackBtn();

  // Dibujar gráfico de barras
  requestAnimationFrame(() => drawPosicionesBar(minVal, maxVal));
}

function drawPosicionesBar(minRef, maxRef) {
  const canvas = document.getElementById('posicionesBarChart');
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth  || 700;
  canvas.height = 220;
  const W = canvas.width, H = canvas.height;
  const PAD = { top: 20, right: 16, bottom: 38, left: 54 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;
  const ctx = canvas.getContext('2d');
  const data = posicionesI36Mensual;
  const n = data.length;
  const barW  = (chartW / n) * 0.62;
  const gap   = (chartW / n) * 0.38;
  const scale = 7000; // Y max

  ctx.clearRect(0, 0, W, H);

  // Grid lines + Y labels
  [5000, 5500, 6000, 6500].forEach(v => {
    const y = PAD.top + chartH - ((v - 0) / scale) * chartH;
    ctx.strokeStyle = 'rgba(255,255,255,.08)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.45)';
    ctx.font = '10px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(v.toLocaleString('es-AR'), PAD.left - 6, y + 4);
  });

  // Promedio line
  const promedio = Math.round(data.reduce((s,m) => s + m.valor, 0) / data.length);
  const promY = PAD.top + chartH - (promedio / scale) * chartH;
  ctx.strokeStyle = 'rgba(54,176,201,.6)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 4]);
  ctx.beginPath(); ctx.moveTo(PAD.left, promY); ctx.lineTo(PAD.left + chartW, promY); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(54,176,201,.9)';
  ctx.font = 'bold 10px Segoe UI';
  ctx.textAlign = 'left';
  ctx.fillText('Prom. ' + promedio.toLocaleString('es-AR'), PAD.left + 4, promY - 4);

  // Bars
  data.forEach((m, i) => {
    const x    = PAD.left + i * (barW + gap) + gap / 2;
    const barH = (m.valor / scale) * chartH;
    const y    = PAD.top + chartH - barH;
    const col  = m.valor >= 6200 ? '#00A887' : m.valor >= 5500 ? '#36B0C9' : '#F97316';
    const isLast = i === data.length - 1;

    // Bar fill
    ctx.fillStyle = isLast ? col : col + 'BB';
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(x, y, barW, barH, [4,4,0,0]) : ctx.rect(x, y, barW, barH);
    ctx.fill();

    // Value on top
    ctx.fillStyle = isLast ? '#fff' : 'rgba(255,255,255,.72)';
    ctx.font = (isLast ? 'bold ' : '') + '9px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText(m.valor.toLocaleString('es-AR'), x + barW / 2, y - 4);

    // X label
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    ctx.font = '9px Segoe UI';
    ctx.fillText(m.mes, x + barW / 2, H - PAD.bottom + 13);
  });
}


/* ═══════════════════════════════════════════════════════════════
   DATOS COMPARTIDOS
   ═══════════════════════════════════════════════════════════════ */

const clientesOperaron = [
  'ARCOR S.A.',
  'CINA S.R.L.',
  'CONGELADOS DEL SUR S.A. EXP.',
  'DROGUERÍA KELLERHOFF S.A.',
  'ETHICAL NUTRITION S.A.',
  'FROILÁN',
  'GLUFREEZ (PAULA SILNIK)',
  'HELACOR S.A. COMERCIO EXTERIOR',
  'HELACOR S.A. DEPÓSITO NACIONAL',
  'HELADOS ESTHER SRL',
  'IPANCO SRL DF',
  'IPANCO SRL DN',
  'KECLON S.A.',
  'LA SIBILA SA',
  'LOGÍSTICA RR CONGELADOS SA',
  'MCCAIN ARGENTINA SA',
  'MINERVA ARGENTINA S.A. (INSUMOS)',
  'MINERVA BEEF FIESTA',
  'MINERVA FOOD (0013 PLANTA SWIFT)',
  'MINERVA FOODS (1113 PLANTA VILLA MERCEDES)',
  'MINERVA FOODS (1373 PLANTA VENADO TUERTO)',
  'MINERVA FOODS (CTRO. DE DIST.) AMBIENTE',
  'MINERVA FOODS (CTRO. DE DIST.) CONGELADO',
  'MINERVA FOODS (CTRO. DE DIST.) ENFRIADO',
  'MINERVA FOODS (IMPORTACIÓN)',
  'MINERVA FOODS (MERCADERÍA DE TERCEROS)',
  'MINERVA FOODS (ROSARIO MERCADO EXTERNO)',
  'MINERVA FOODS BEEF CONGELADO',
  'MINERVA FOODS EXTERNO FISCAL (DEVOLUCIÓN)',
  'MINERVA FOODS IMPO FISCAL',
  'MINERVA FOODS MERCADO BEEF (CORTES ENFRIADOS)',
  'QUICKFOOD S.A. (MATERIA PRIMA)',
  'QUICKFOOD S.A. VEGETALES',
  'QUICKFOOD S.A. (SAN JORGE)',
  'QUICKFOOD SAN JORGE DF',
  'RAFAELA ALIMENTOS S.A. (CASILDA)',
  'SAVAZ SRL',
  'SAVAZ SRL EXP.',
  'SEJAS, BOGDANICH Y FLORES GALARZA S.H.',
  'SUDAMERICANA DE LÁCTEOS S.A.',
  'TERRAGENE ENF S.A.',
  'TERRAGENE SA.',
  'TERRAGENE SECO S.A.',
  'ULTRACONGELADOS ROSARIO',
  'ULTRACONGELADOS ROSARIO S.A. EXP.',
];

const ingEgrData = [
  { mes:'Abr 24', estIn:1820, estOut:1950, kgIn:2980000, kgOut:3120000 },
  { mes:'May 24', estIn:2100, estOut:2240, kgIn:3280000, kgOut:3410000 },
  { mes:'Jun 24', estIn:1650, estOut:1580, kgIn:2760000, kgOut:2690000 },
  { mes:'Jul 24', estIn:2350, estOut:2480, kgIn:3540000, kgOut:3680000 },
  { mes:'Ago 24', estIn:1980, estOut:2050, kgIn:3050000, kgOut:3190000 },
  { mes:'Sep 24', estIn:2210, estOut:2180, kgIn:3310000, kgOut:3280000 },
  { mes:'Oct 24', estIn:1760, estOut:1840, kgIn:2850000, kgOut:2940000 },
  { mes:'Nov 24', estIn:2440, estOut:2560, kgIn:3620000, kgOut:3750000 },
  { mes:'Dic 24', estIn:1590, estOut:1620, kgIn:2720000, kgOut:2800000 },
  { mes:'Ene 25', estIn:2080, estOut:2150, kgIn:3160000, kgOut:3240000 },
  { mes:'Feb 25', estIn:1920, estOut:1990, kgIn:2990000, kgOut:3080000 },
  { mes:'Mar 25', estIn:2260, estOut:2380, kgIn:3400000, kgOut:3520000 },
];

/* ═══════════════════════════════════════════════════════════════
   INDICADOR: CLIENTES QUE OPERARON
   ═══════════════════════════════════════════════════════════════ */
function renderIndicadorClientes() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Header card
  const header = document.createElement('div');
  header.className = 'indicador-card indicador-card-static';
  header.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">CLI</span>
        CLIENTES QUE OPERARON
      </div>
      <span class="indicador-hint">${clientesOperaron.length} clientes activos este período</span>
    </div>`;
  wrap.appendChild(header);

  // Search + list
  const listSection = document.createElement('div');
  listSection.className = 'indicador-mensual clientes-section';
  listSection.innerHTML = `
    <div class="clientes-search-wrap">
      <input type="text" id="clientesSearch" class="equip-modal-input clientes-search"
        placeholder="🔍  Buscar cliente..." autocomplete="off">
      <span class="clientes-count" id="clientesCount">${clientesOperaron.length} clientes</span>
    </div>
    <div class="clientes-grid" id="clientesGrid">
      ${clientesOperaron.map((c, i) => `
        <div class="cliente-row" data-name="${c.toLowerCase()}">
          <span class="cliente-num">${String(i+1).padStart(2,'0')}</span>
          <span class="cliente-name">${c}</span>
          <span class="cliente-dot"></span>
        </div>`).join('')}
    </div>
  `;
  wrap.appendChild(listSection);
  menuGrid.appendChild(wrap);
  syncBackBtn();

  // Live search
  requestAnimationFrame(() => {
    const input = document.getElementById('clientesSearch');
    const grid  = document.getElementById('clientesGrid');
    const count = document.getElementById('clientesCount');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      let visible = 0;
      grid.querySelectorAll('.cliente-row').forEach(row => {
        const match = !q || row.dataset.name.includes(q);
        row.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      count.textContent = visible + ' clientes';
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   INDICADOR: POSICIONES INGRESADAS / EGRESADAS
   ═══════════════════════════════════════════════════════════════ */
function renderIndicadorIngEgr() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const totalIn  = ingEgrData.reduce((s,m) => s + m.estIn,  0);
  const totalOut = ingEgrData.reduce((s,m) => s + m.estOut, 0);
  const totalKgIn  = ingEgrData.reduce((s,m) => s + m.kgIn,  0);
  const totalKgOut = ingEgrData.reduce((s,m) => s + m.kgOut, 0);

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Header card con totales
  const header = document.createElement('div');
  header.className = 'indicador-card indicador-card-static';
  header.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">I/E</span>
        POSICIONES INGRESADAS / EGRESADAS
      </div>
      <span class="indicador-hint">Últimos 12 meses</span>
    </div>
    <div class="inegr-totales">
      <div class="inegr-total-item">
        <span class="inegr-total-label">Total Estibas Ingresadas</span>
        <span class="inegr-total-val green">${totalIn.toLocaleString('es-AR')}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Total Estibas Egresadas</span>
        <span class="inegr-total-val red">${totalOut.toLocaleString('es-AR')}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Total Kg Ingresados</span>
        <span class="inegr-total-val green">${(totalKgIn/1e6).toFixed(1)}M kg</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Total Kg Egresados</span>
        <span class="inegr-total-val red">${(totalKgOut/1e6).toFixed(1)}M kg</span>
      </div>
    </div>`;
  wrap.appendChild(header);

  // ── 3 gráficos de ESTIBAS ──────────────────────────────────
  const chartsTitles = [
    { id:'chartEstIn',    title:'📦 Estibas Ingresadas — mes a mes',  key:'estIn',  color:'#00A887' },
    { id:'chartEstOut',   title:'📤 Estibas Egresadas — mes a mes',   key:'estOut', color:'#DC2626' },
    { id:'chartEstSum',   title:'📊 Estibas Totales (Ingr + Egr)',    key:null,     color:'#36B0C9', isSum:true },
  ];
  chartsTitles.forEach(cfg => {
    const sec = document.createElement('div');
    sec.className = 'indicador-mensual';
    sec.innerHTML = `
      <div class="indicador-mensual-title">${cfg.title}</div>
      <div class="inegr-chart-wrap"><canvas id="${cfg.id}"></canvas></div>`;
    wrap.appendChild(sec);
  });

  // ── 3 gráficos de KG ──────────────────────────────────────
  const kgCharts = [
    { id:'chartKgIn',  title:'⚖ Kg Ingresados — mes a mes',    key:'kgIn',  color:'#00A887' },
    { id:'chartKgOut', title:'⚖ Kg Egresados — mes a mes',     key:'kgOut', color:'#DC2626' },
    { id:'chartKgSum', title:'⚖ Kg Totales (Ingr + Egr)',      key:null,    color:'#36B0C9', isSum:true, isKg:true },
  ];
  kgCharts.forEach(cfg => {
    const sec = document.createElement('div');
    sec.className = 'indicador-mensual';
    sec.innerHTML = `
      <div class="indicador-mensual-title">${cfg.title}</div>
      <div class="inegr-chart-wrap"><canvas id="${cfg.id}"></canvas></div>`;
    wrap.appendChild(sec);
  });

  menuGrid.appendChild(wrap);
  syncBackBtn();

  // Dibujar todos los gráficos
  requestAnimationFrame(() => {
    [...chartsTitles, ...kgCharts].forEach(cfg => drawIngEgrBar(cfg));
  });
}

function drawIngEgrBar(cfg) {
  const canvas = document.getElementById(cfg.id);
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth || 700;
  canvas.height = 200;
  const W = canvas.width, H = canvas.height;
  const PAD = { top:22, right:16, bottom:38, left: cfg.isKg ? 68 : 48 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;
  const ctx = canvas.getContext('2d');
  const data = ingEgrData;
  const n = data.length;

  // Build values array
  const vals = data.map(m => {
    if (cfg.isSum) return cfg.isKg ? m.kgIn + m.kgOut : m.estIn + m.estOut;
    return m[cfg.key];
  });
  const maxVal = Math.max(...vals) * 1.12;
  const barW = (chartW / n) * 0.58;
  const gap  = (chartW / n) * 0.42;

  ctx.clearRect(0, 0, W, H);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = PAD.top + chartH - (i/4) * chartH;
    ctx.strokeStyle = 'rgba(255,255,255,.07)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
    const lbl = cfg.isKg
      ? ((maxVal * i/4)/1e6).toFixed(1) + 'M'
      : Math.round(maxVal * i/4).toLocaleString('es-AR');
    ctx.fillStyle = 'rgba(255,255,255,.42)';
    ctx.font = '9px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(lbl, PAD.left - 5, y + 3);
  }

  // Bars
  vals.forEach((v, i) => {
    const x    = PAD.left + i * (barW + gap) + gap/2;
    const bH   = (v / maxVal) * chartH;
    const y    = PAD.top + chartH - bH;
    const isLast = i === n - 1;

    ctx.fillStyle = isLast ? cfg.color : cfg.color + 'AA';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, barW, bH, [3,3,0,0]);
    else ctx.rect(x, y, barW, bH);
    ctx.fill();

    // Value on top
    ctx.fillStyle = isLast ? '#fff' : 'rgba(255,255,255,.7)';
    ctx.font = (isLast ? 'bold ' : '') + '9px Segoe UI';
    ctx.textAlign = 'center';
    const vlbl = cfg.isKg ? (v/1e6).toFixed(2)+'M' : v.toLocaleString('es-AR');
    ctx.fillText(vlbl, x + barW/2, y - 4);

    // X label
    ctx.fillStyle = 'rgba(255,255,255,.52)';
    ctx.font = '9px Segoe UI';
    ctx.fillText(data[i].mes, x + barW/2, H - PAD.bottom + 13);
  });

  // Promedio line
  const prom = vals.reduce((s,v) => s+v, 0) / vals.length;
  const promY = PAD.top + chartH - (prom / maxVal) * chartH;
  ctx.strokeStyle = 'rgba(255,255,255,.3)';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([4,4]);
  ctx.beginPath(); ctx.moveTo(PAD.left, promY); ctx.lineTo(PAD.left + chartW, promY); ctx.stroke();
  ctx.setLineDash([]);
  const promLbl = cfg.isKg ? 'Prom ' + (prom/1e6).toFixed(2)+'M' : 'Prom ' + Math.round(prom).toLocaleString('es-AR');
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.font = '9px Segoe UI';
  ctx.textAlign = 'left';
  ctx.fillText(promLbl, PAD.left + 4, promY - 4);
}


/* ═══════════════════════════════════════════════════════════════
   INDICADOR: MOVIMIENTOS I-4/5/6/6B/7/8
   ═══════════════════════════════════════════════════════════════ */

const movData = {
  vehiculos: [
    { id:'todos',    code:'I-4',  label:'Prom. Todos los Vehículos' },
    { id:'cont',     code:'I-5',  label:'Contenedores' },
    { id:'semi',     code:'I-6',  label:'Semiremolques' },
    { id:'semiSeca', code:'I-6B', label:'Semirrem. Cargas Secas' },
    { id:'balan',    code:'I-7',  label:'Balancines' },
    { id:'chasis',   code:'I-8',  label:'Chasis' },
  ],
  meses: (() => {
    const nombres = ['Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24',
                     'Oct 24','Nov 24','Dic 24','Ene 25','Feb 25','Mar 25'];
    // Genera datos simulados consistentes para cargas/bultos/kg x entrada/salida x vehículo
    const vIds = ['todos','cont','semi','semiSeca','balan','chasis'];
    const seed0 = 42;
    let seed = seed0;
    const rnd = () => { seed=(seed*1664525+1013904223)&0xffffffff; return Math.abs(seed)/0xffffffff; };
    const rv = (min,max) => +(min + rnd()*(max-min)).toFixed(1);

    return nombres.map(mes => {
      const promedios = {};
      vIds.forEach(id => {
        promedios[id] = {
          // [unidad][tipo] = horas promedio
          cargas:  { entrada: rv(1.5,6.5), salida: rv(1.2,5.8), prom: 0 },
          bultos:  { entrada: rv(2.0,7.5), salida: rv(1.8,6.9), prom: 0 },
          kg:      { entrada: rv(1.8,7.0), salida: rv(1.5,6.4), prom: 0 },
        };
        // prom = mean of the 6 values (entry+exit x 3 units)
        ['cargas','bultos','kg'].forEach(u => {
          promedios[id][u].prom = +((promedios[id][u].entrada + promedios[id][u].salida)/2).toFixed(1);
        });
        // top-level prom (for tile) = mean of cargas prom
        promedios[id].prom = promedios[id].cargas.prom;
      });
      return { mes, promedios };
    });
  })(),
};

function renderIndicadorMovimientos() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  // Estado reactivo
  let unidad = 'cargas'; // cargas | bultos | kg

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // ── Header + selector de unidad ─────────────────────────────
  const header = document.createElement('div');
  header.className = 'indicador-card indicador-card-static';
  header.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">MOV</span>
        MOVIMIENTOS — TIEMPOS DE OPERACIÓN
      </div>
      <span class="indicador-hint">Promedio mensual por tipo de vehículo (horas)</span>
    </div>
    <div class="mov-unidad-selector">
      <button class="mov-unidad-btn active" data-u="cargas">📦 Cargas</button>
      <button class="mov-unidad-btn" data-u="bultos">🎁 Bultos</button>
      <button class="mov-unidad-btn" data-u="kg">⚖ Kg</button>
    </div>`;
  wrap.appendChild(header);

  // ── 6 bloques de vehículo, cada uno con 3 gráficos ──────────
  const chartsWrap = document.createElement('div');
  chartsWrap.id = 'movChartsWrap';
  chartsWrap.className = 'mov-charts-outer';
  movData.vehiculos.forEach(v => {
    const block = document.createElement('div');
    block.className = 'indicador-mensual mov-vehiculo-block';
    block.dataset.vid = v.id;
    block.innerHTML = `
      <div class="indicador-mensual-title mov-veh-title">
        <span class="indicador-badge" style="font-size:.68rem">${v.code}</span>
        ${v.label}
      </div>
      <div class="mov-three-charts">
        <div class="mov-chart-col">
          <div class="mov-chart-label mov-label-entrada">↓ Entradas</div>
          <div class="inegr-chart-wrap"><canvas id="mov_${v.id}_entrada"></canvas></div>
        </div>
        <div class="mov-chart-col">
          <div class="mov-chart-label mov-label-salida">↑ Salidas</div>
          <div class="inegr-chart-wrap"><canvas id="mov_${v.id}_salida"></canvas></div>
        </div>
        <div class="mov-chart-col">
          <div class="mov-chart-label mov-label-prom">⇄ Promedio</div>
          <div class="inegr-chart-wrap"><canvas id="mov_${v.id}_prom"></canvas></div>
        </div>
      </div>`;
    chartsWrap.appendChild(block);
  });
  wrap.appendChild(chartsWrap);
  menuGrid.appendChild(wrap);
  syncBackBtn();

  const drawAll = () => {
    movData.vehiculos.forEach(v => {
      ['entrada','salida','prom'].forEach(tipo => {
        drawMovBar(`mov_${v.id}_${tipo}`, v.id, tipo, unidad);
      });
    });
  };

  requestAnimationFrame(drawAll);

  // Selector de unidad
  header.querySelectorAll('.mov-unidad-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      header.querySelectorAll('.mov-unidad-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      unidad = btn.dataset.u;
      drawAll();
    });
  });
}

function drawMovBar(canvasId, vId, tipo, unidad) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth || 280;
  canvas.height = 160;
  const W = canvas.width, H = canvas.height;
  const PAD = { top:18, right:8, bottom:32, left:34 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;
  const ctx = canvas.getContext('2d');
  const meses = movData.meses;
  const n = meses.length;
  const barW = (chartW / n) * 0.6;
  const gap  = (chartW / n) * 0.4;

  const colores = { entrada:'#00A887', salida:'#DC2626', prom:'#36B0C9' };
  const color   = colores[tipo];

  const vals = meses.map(m => m.promedios[vId][unidad] ? m.promedios[vId][unidad][tipo] : m.promedios[vId]['cargas'][tipo]);
  const maxVal = Math.max(...vals, 1) * 1.18;

  ctx.clearRect(0, 0, W, H);

  // Grid
  for (let i=0; i<=3; i++) {
    const y = PAD.top + chartH - (i/3)*chartH;
    ctx.strokeStyle = 'rgba(255,255,255,.07)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left+chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.38)';
    ctx.font = '8px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(((maxVal*i/3)).toFixed(1)+'h', PAD.left-3, y+3);
  }

  vals.forEach((v, i) => {
    const x   = PAD.left + i*(barW+gap) + gap/2;
    const bH  = (v/maxVal)*chartH;
    const y   = PAD.top + chartH - bH;
    const isLast = i === n-1;

    ctx.fillStyle = isLast ? color : color+'99';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, barW, bH, [2,2,0,0]);
    else ctx.rect(x, y, barW, bH);
    ctx.fill();

    // Valor encima
    ctx.fillStyle = isLast ? '#fff' : 'rgba(255,255,255,.62)';
    ctx.font = (isLast ? 'bold ' : '') + '7px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText(v+'h', x+barW/2, y-3);

    // Mes
    ctx.fillStyle = 'rgba(255,255,255,.45)';
    ctx.font = '7px Segoe UI';
    ctx.fillText(meses[i].mes.split(' ')[0], x+barW/2, H-PAD.bottom+11);
  });

  // Promedio line
  const prom = vals.reduce((s,v)=>s+v,0)/vals.length;
  const promY = PAD.top + chartH - (prom/maxVal)*chartH;
  ctx.strokeStyle = 'rgba(255,255,255,.28)';
  ctx.lineWidth = 1;
  ctx.setLineDash([3,3]);
  ctx.beginPath(); ctx.moveTo(PAD.left, promY); ctx.lineTo(PAD.left+chartW, promY); ctx.stroke();
  ctx.setLineDash([]);
}


/* ═══════════════════════════════════════════════════════════════
   DATOS: AJUSTES DE STOCK
   ═══════════════════════════════════════════════════════════════ */
const ajustesData = {
  meses: ['Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24','Oct 24','Nov 24','Dic 24','Ene 25','Feb 25','Mar 25'],
  cargas:  [3,5,2,7,4,6,3,8,5,4,6,1],
  bultos:  [42,68,31,95,57,74,45,102,63,51,78,12],
  totalCargas: 28940,
  totalBultos: 338421,
  ajustesDetalle: [
    // mes 0=Abr24 .. 11=Mar25
    // { mes, carga, bultos, usuario, motivo }
    {mes:0,  carga:'C-48201', bultos:12, usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:0,  carga:'C-48356', bultos:8,  usuario:'laura.benitez',   motivo:'Daño en estiba'},
    {mes:0,  carga:'C-48490', bultos:22, usuario:'mario.garcia',    motivo:'Faltante descarga'},
    {mes:1,  carga:'C-49102', bultos:5,  usuario:'pedro.suarez',    motivo:'Error conteo entrada'},
    {mes:1,  carga:'C-49250', bultos:15, usuario:'mario.garcia',    motivo:'Sobrante en recuento'},
    {mes:1,  carga:'C-49380', bultos:18, usuario:'laura.benitez',   motivo:'Daño en estiba'},
    {mes:1,  carga:'C-49510', bultos:9,  usuario:'ana.torres',      motivo:'Error etiquetado'},
    {mes:1,  carga:'C-49620', bultos:21, usuario:'pedro.suarez',    motivo:'Faltante descarga'},
    {mes:2,  carga:'C-50100', bultos:7,  usuario:'ana.torres',      motivo:'Error conteo entrada'},
    {mes:2,  carga:'C-50280', bultos:24, usuario:'mario.garcia',    motivo:'Reclamo cliente'},
    {mes:3,  carga:'C-51001', bultos:11, usuario:'laura.benitez',   motivo:'Error conteo entrada'},
    {mes:3,  carga:'C-51200', bultos:19, usuario:'pedro.suarez',    motivo:'Daño en estiba'},
    {mes:3,  carga:'C-51350', bultos:28, usuario:'mario.garcia',    motivo:'Sobrante en recuento'},
    {mes:3,  carga:'C-51480', bultos:14, usuario:'ana.torres',      motivo:'Faltante descarga'},
    {mes:3,  carga:'C-51600', bultos:10, usuario:'laura.benitez',   motivo:'Error etiquetado'},
    {mes:3,  carga:'C-51750', bultos:13, usuario:'mario.garcia',    motivo:'Reclamo cliente'},
    {mes:4,  carga:'C-52100', bultos:16, usuario:'pedro.suarez',    motivo:'Error conteo entrada'},
    {mes:4,  carga:'C-52250', bultos:22, usuario:'mario.garcia',    motivo:'Daño en estiba'},
    {mes:4,  carga:'C-52400', bultos:9,  usuario:'ana.torres',      motivo:'Error etiquetado'},
    {mes:4,  carga:'C-52580', bultos:10, usuario:'laura.benitez',   motivo:'Sobrante en recuento'},
    {mes:5,  carga:'C-53050', bultos:18, usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:5,  carga:'C-53200', bultos:25, usuario:'pedro.suarez',    motivo:'Reclamo cliente'},
    {mes:5,  carga:'C-53380', bultos:14, usuario:'ana.torres',      motivo:'Faltante descarga'},
    {mes:5,  carga:'C-53500', bultos:17, usuario:'laura.benitez',   motivo:'Daño en estiba'},
    {mes:6,  carga:'C-54020', bultos:8,  usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:6,  carga:'C-54200', bultos:20, usuario:'ana.torres',      motivo:'Error etiquetado'},
    {mes:6,  carga:'C-54380', bultos:17, usuario:'pedro.suarez',    motivo:'Sobrante en recuento'},
    {mes:7,  carga:'C-55001', bultos:30, usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:7,  carga:'C-55180', bultos:22, usuario:'laura.benitez',   motivo:'Reclamo cliente'},
    {mes:7,  carga:'C-55320', bultos:28, usuario:'pedro.suarez',    motivo:'Daño en estiba'},
    {mes:8,  carga:'C-56010', bultos:19, usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:8,  carga:'C-56180', bultos:24, usuario:'ana.torres',      motivo:'Faltante descarga'},
    {mes:8,  carga:'C-56350', bultos:20, usuario:'laura.benitez',   motivo:'Error etiquetado'},
    {mes:9,  carga:'C-57001', bultos:14, usuario:'pedro.suarez',    motivo:'Sobrante en recuento'},
    {mes:9,  carga:'C-57200', bultos:22, usuario:'mario.garcia',    motivo:'Error conteo entrada'},
    {mes:9,  carga:'C-57380', bultos:15, usuario:'laura.benitez',   motivo:'Reclamo cliente'},
    {mes:10, carga:'C-58020', bultos:28, usuario:'mario.garcia',    motivo:'Daño en estiba'},
    {mes:10, carga:'C-58200', bultos:33, usuario:'pedro.suarez',    motivo:'Error conteo entrada'},
    {mes:10, carga:'C-58380', bultos:17, usuario:'ana.torres',      motivo:'Error etiquetado'},
    {mes:11, carga:'C-59001', bultos:12, usuario:'mario.garcia',    motivo:'Ajuste manual'},
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATOS: ESTADÍSTICAS DE PERSONAL
   ═══════════════════════════════════════════════════════════════ */
const personalData = {
  perfiles: [
    'Administrador Principal','Administrador Calidad','Administrador Sala de Maquinas',
    'Administrador Logística','Administrador Recursos Humanos',
    'Operador Logistica Avanzado','Operador Logistica','Operador Calidad',
    'Operador Sala de Maquinas','Operador Recursos Humanos','Operador Básico',
    'Compras - Operador','Compras - Revisor','Compras - Autorizador',
    'Operador Calidad Avanzado','Operador Administracion','Auditoria',
    'Operador Logistica Especial','Logística - Avanzado','Cliente',
    'Operador Logistica DF','Logística - Encargado',
  ],
  usuarios: [
    {user:'alan.perez',          perfil:'Operador Logistica'},
    {user:'alfredo.perichon',    perfil:'Operador Logistica'},
    {user:'brandon.duarte',      perfil:'Operador Logistica'},
    {user:'brandon.peña',        perfil:'Operador Logistica'},
    {user:'carlos.aguirre',      perfil:'Operador Logistica'},
    {user:'celina.tasinazzo',    perfil:'Operador Logistica'},
    {user:'daniela.ojeda',       perfil:'Operador Logistica'},
    {user:'diego.corvalan',      perfil:'Operador Logistica'},
    {user:'diego.stoffel',       perfil:'Operador Logistica'},
    {user:'gabriel.cristaldo',   perfil:'Operador Logistica'},
    {user:'guillermo.aguirre',   perfil:'Operador Logistica'},
    {user:'hector.sanabria',     perfil:'Operador Logistica'},
    {user:'ignacio.rodriguez',   perfil:'Operador Logistica'},
    {user:'ivan.casalicchio',    perfil:'Operador Logistica'},
    {user:'javier.diaz',         perfil:'Operador Logistica'},
    {user:'jeremias.moyano',     perfil:'Operador Logistica'},
    {user:'jesus.centurion',     perfil:'Operador Logistica'},
    {user:'agustin.barovero',    perfil:'Administrador Principal'},
    {user:'mario.garcia',        perfil:'Administrador Logística'},
    {user:'laura.benitez',       perfil:'Operador Calidad'},
    {user:'pedro.suarez',        perfil:'Operador Logistica Avanzado'},
    {user:'ana.torres',          perfil:'Administrador Calidad'},
  ],
  // Movimientos mensuales por usuario (base ~250 variados)
  movimientos: (() => {
    const meses = ['Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24','Oct 24','Nov 24','Dic 24','Ene 25','Feb 25','Mar 25'];
    let s = 7;
    const r = () => { s=(s*1664525+1013904223)&0xffffffff; return Math.abs(s)/0xffffffff; };
    return meses.map(mes => {
      const vals = {};
      ['alan.perez','alfredo.perichon','brandon.duarte','brandon.peña','carlos.aguirre',
       'celina.tasinazzo','daniela.ojeda','diego.corvalan','diego.stoffel','gabriel.cristaldo',
       'guillermo.aguirre','hector.sanabria','ignacio.rodriguez','ivan.casalicchio',
       'javier.diaz','jeremias.moyano','jesus.centurion'].forEach(u => {
        vals[u] = Math.round(200 + r()*100);
      });
      return { mes, vals };
    });
  })(),
};

/* ═══════════════════════════════════════════════════════════════
   DATOS: USO DE EQUIPOS
   ═══════════════════════════════════════════════════════════════ */
const usoEquiposData = {
  meses: (() => {
    const ns = ['Abr 24','May 24','Jun 24','Jul 24','Ago 24','Sep 24','Oct 24','Nov 24','Dic 24','Ene 25','Feb 25','Mar 25'];
    let s = 13;
    const r = () => { s=(s*1664525+1013904223)&0xffffffff; return Math.abs(s)/0xffffffff; };
    const rv = (a,b) => Math.round(a + r()*(b-a));
    return ns.map(mes => ({
      mes,
      boxes:          rv(180,320),
      troneras:       rv(80,160),
      autoelevadores: rv(200,400),
      camion:         rv(60,140),
      limpieza:       rv(40,100),
      // detalle boxes 1-27
      boxDetalle: Array.from({length:27}, (_,i) => ({ id:`Box ${i+1}`, horas: rv(4,18) })),
      // detalle troneras 1-8 + DF1-DF3
      tronDetalle: [
        ...Array.from({length:8}, (_,i) => ({ id:`Tronera ${i+1}`, horas: rv(3,14) })),
        ...Array.from({length:3}, (_,i) => ({ id:`DF ${i+1}`, horas: rv(2,10) })),
      ],
      // AE ya los tenemos de dashboardEquipamientoData — simulamos por nombre
      aeDetalle: ['AE-01','AE-02','AE-03','AE-04','AE-05','AE-06','AE-07','AE-08']
                   .map(id => ({ id, horas: rv(20,80) })),
      camionDetalle: [{ id:'CM-01', horas: rv(40,130) }],
      limpiezaDetalle: [{ id:'RL-01', horas: rv(30,90) }],
    }));
  })(),
};

/* ═══════════════════════════════════════════════════════════════
   RENDER: AJUSTES DE STOCK
   ═══════════════════════════════════════════════════════════════ */
function renderIndicadorAjustes() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  let mesFiltro = null; // null = todos
  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Card resumen
  const card = document.createElement('div');
  card.className = 'indicador-card indicador-card-static';
  card.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">AJS</span>
        AJUSTES DE STOCK
      </div>
      <span class="indicador-hint">Desviaciones en cargas y bultos — últimos 12 meses</span>
    </div>
    <div class="inegr-totales">
      <div class="inegr-total-item">
        <span class="inegr-total-label">I-3 · Cargas con desvío</span>
        <span class="inegr-total-val" style="color:#F97316">${ajustesData.cargas.reduce((s,v)=>s+v,0)}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">I-49 · Bultos en desvío</span>
        <span class="inegr-total-val" style="color:#DC2626">${ajustesData.bultos.reduce((s,v)=>s+v,0)}</span>
      </div>
    </div>`;
  wrap.appendChild(card);

  // Gráficos cantidad
  [
    { id:'ajCargasChart', title:'📦 I-3 — Cargas con desvío por mes', vals: ajustesData.cargas, color:'#F97316' },
    { id:'ajBultosChart', title:'🎁 I-49 — Bultos en desvío por mes',  vals: ajustesData.bultos, color:'#DC2626' },
  ].forEach(cfg => {
    const sec = document.createElement('div');
    sec.className = 'indicador-mensual';
    sec.innerHTML = `<div class="indicador-mensual-title">${cfg.title}</div><div class="inegr-chart-wrap"><canvas id="${cfg.id}"></canvas></div>`;
    wrap.appendChild(sec);
  });

  // Gráficos porcentaje sobre total
  const totalCargasMes = ingEgrData.map(m => m.estIn + m.estOut);
  const totalBultosMes = ingEgrData.map(m => Math.round((m.kgIn + m.kgOut) / 25));
  [
    { id:'ajPctCargasChart', title:'📊 % Cargas con desvío / Total cargas del mes',
      vals: ajustesData.cargas.map((v,i) => +((v/Math.max(totalCargasMes[i],1))*100).toFixed(1)), color:'#F97316', isPct:true },
    { id:'ajPctBultosChart', title:'📊 I-49 % Bultos en desvío / Total bultos del mes',
      vals: ajustesData.bultos.map((v,i) => +((v/Math.max(totalBultosMes[i],1))*100).toFixed(1)), color:'#DC2626', isPct:true },
  ].forEach(cfg => {
    const sec = document.createElement('div');
    sec.className = 'indicador-mensual';
    sec.innerHTML = `<div class="indicador-mensual-title">${cfg.title}</div><div class="inegr-chart-wrap"><canvas id="${cfg.id}"></canvas></div>`;
    wrap.appendChild(sec);
  });

  // Selector de mes
  const selSec = document.createElement('div');
  selSec.className = 'indicador-mensual';
  selSec.innerHTML = `
    <div class="indicador-mensual-title">📅 Filtrar por mes — listado de ajustes realizados</div>
    <div class="ajustes-mes-selector" id="ajMesSel">
      <button class="ajustes-mes-btn active" data-mes="-1">Todos</button>
      ${ajustesData.meses.map((m,i)=>`<button class="ajustes-mes-btn" data-mes="${i}">${m}</button>`).join('')}
    </div>
    <div class="clientes-grid" id="ajustesList" style="margin-top:10px">
    </div>`;
  wrap.appendChild(selSec);
  menuGrid.appendChild(wrap);
  syncBackBtn();

  const renderList = (filtro) => {
    const list = document.getElementById('ajustesList');
    if (!list) return;
    const items = filtro === -1
      ? ajustesData.ajustesDetalle
      : ajustesData.ajustesDetalle.filter(a => a.mes === filtro);
    list.innerHTML = items.length === 0
      ? '<div style="color:rgba(255,255,255,.4);padding:16px;text-align:center">Sin ajustes en este período</div>'
      : items.map((a,i) => `
        <div class="cliente-row">
          <span class="cliente-num">${String(i+1).padStart(2,'0')}</span>
          <span class="cliente-name">
            <strong>${a.carga}</strong>
            <span style="color:rgba(255,255,255,.5);font-size:.78rem;margin-left:8px">${ajustesData.meses[a.mes]}</span>
          </span>
          <span style="color:#F97316;font-weight:800;font-size:.85rem;white-space:nowrap">${a.bultos} bts</span>
          <span style="color:rgba(255,255,255,.55);font-size:.78rem;white-space:nowrap">${a.usuario}</span>
        </div>`).join('');
  };

  requestAnimationFrame(() => {
    [
      { id:'ajCargasChart',    vals: ajustesData.cargas, color:'#F97316', isPct:false },
      { id:'ajBultosChart',    vals: ajustesData.bultos, color:'#DC2626', isPct:false },
      { id:'ajPctCargasChart', vals: ajustesData.cargas.map((v,i)=>+((v/Math.max((ingEgrData[i].estIn+ingEgrData[i].estOut),1))*100).toFixed(1)), color:'#F97316', isPct:true },
      { id:'ajPctBultosChart', vals: ajustesData.bultos.map((v,i)=>+((v/Math.max(Math.round((ingEgrData[i].kgIn+ingEgrData[i].kgOut)/25),1))*100).toFixed(1)), color:'#DC2626', isPct:true },
    ].forEach(cfg => drawSimpleBar(cfg.id, ajustesData.meses, cfg.vals, cfg.color, cfg.isPct));
    renderList(-1);
  });

  // Mes buttons
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.ajustes-mes-btn');
    if (!btn) return;
    wrap.querySelectorAll('.ajustes-mes-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderList(parseInt(btn.dataset.mes));
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: ESTADÍSTICAS DE PERSONAL
   ═══════════════════════════════════════════════════════════════ */
function renderIndicadorPersonal() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  let perfilFiltro = 'Operador Logistica';
  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Header
  const header = document.createElement('div');
  header.className = 'indicador-card indicador-card-static';
  header.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">RRHH</span>
        ESTADÍSTICAS DE PERSONAL
      </div>
      <span class="indicador-hint">${personalData.usuarios.length} usuarios en el sistema</span>
    </div>`;
  wrap.appendChild(header);

  // Selector de perfil
  const selSec = document.createElement('div');
  selSec.className = 'indicador-mensual';
  selSec.innerHTML = `
    <div class="indicador-mensual-title">👤 Filtrar por perfil</div>
    <div class="personal-perfil-wrap" id="perfilSel">
      ${personalData.perfiles.map(p => `
        <button class="ajustes-mes-btn personal-perfil-btn${p===perfilFiltro?' active':''}" data-p="${p}">${p}</button>
      `).join('')}
    </div>`;
  wrap.appendChild(selSec);

  // Gráfico movimientos
  const movSec = document.createElement('div');
  movSec.className = 'indicador-mensual';
  movSec.innerHTML = `
    <div class="indicador-mensual-title">📈 Movimientos mensuales — usuarios del perfil seleccionado</div>
    <div class="inegr-chart-wrap" style="height:220px"><canvas id="personalMovChart"></canvas></div>`;
  wrap.appendChild(movSec);

  // Cards de usuarios del perfil
  const usersSec = document.createElement('div');
  usersSec.className = 'indicador-mensual';
  usersSec.id = 'personalUsersSec';
  wrap.appendChild(usersSec);

  menuGrid.appendChild(wrap);
  syncBackBtn();

  const renderPersonalData = (perfil) => {
    const usuarios = personalData.usuarios.filter(u => u.perfil === perfil);
    const meses = personalData.movimientos.map(m => m.mes);
    // Suma de movimientos de todos los usuarios del perfil por mes
    const totalPorMes = personalData.movimientos.map(m => {
      return usuarios.reduce((s,u) => s + (m.vals[u.user] || 0), 0);
    });

    requestAnimationFrame(() => {
      drawSimpleBar('personalMovChart', meses, totalPorMes, '#A78BFA', false, 'mov');
    });

    const sec = document.getElementById('personalUsersSec');
    if (!sec) return;
    sec.innerHTML = `
      <div class="indicador-mensual-title">👥 Detalle por usuario — ${perfil} (${usuarios.length})</div>
      <div class="clientes-grid">
        ${usuarios.map((u,i) => {
          const totalMov = personalData.movimientos.reduce((s,m) => s+(m.vals[u.user]||0), 0);
          const horas    = Math.round(totalMov * 0.18);
          const cargas   = Math.round(totalMov * 0.62);
          return `
            <div class="cliente-row personal-user-row">
              <span class="cliente-num">${String(i+1).padStart(2,'0')}</span>
              <span class="cliente-name">${u.user}</span>
              <span class="personal-stat" style="color:#A78BFA">${totalMov.toLocaleString('es-AR')} mov</span>
              <span class="personal-stat" style="color:#36B0C9">${horas}h</span>
              <span class="personal-stat" style="color:#00A887">${cargas} cargas</span>
            </div>`;
        }).join('')}
      </div>`;
  };

  renderPersonalData(perfilFiltro);

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.personal-perfil-btn');
    if (!btn) return;
    wrap.querySelectorAll('.personal-perfil-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    perfilFiltro = btn.dataset.p;
    renderPersonalData(perfilFiltro);
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: USO DE EQUIPOS
   ═══════════════════════════════════════════════════════════════ */
function renderIndicadorUsoEquipos() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Header
  const header = document.createElement('div');
  header.className = 'indicador-card indicador-card-static';
  header.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge">EQP</span>
        USO DE EQUIPOS
      </div>
      <span class="indicador-hint">Horas de uso acumuladas por tipo — últimos 12 meses</span>
    </div>
    <div class="inegr-totales">
      ${[
        {k:'boxes',color:'#36B0C9',label:'Boxes'},
        {k:'troneras',color:'#A78BFA',label:'Troneras'},
        {k:'autoelevadores',color:'#F97316',label:'Autoelevadores'},
        {k:'camion',color:'#FACC15',label:'Camión'},
        {k:'limpieza',color:'#00A887',label:'Limpieza'},
      ].map(e => `
        <div class="inegr-total-item">
          <span class="inegr-total-label">${e.label}</span>
          <span class="inegr-total-val" style="color:${e.color}">
            ${usoEquiposData.meses.reduce((s,m)=>s+m[e.k],0)}h
          </span>
        </div>`).join('<div class="inegr-total-sep"></div>')}
    </div>`;
  wrap.appendChild(header);

  // 5 gráficos resumen + botón de detalle
  const equipos = [
    {key:'boxes',         color:'#36B0C9', label:'📦 Boxes',          detalleKey:'boxDetalle'},
    {key:'troneras',      color:'#A78BFA', label:'🔩 Troneras',        detalleKey:'tronDetalle'},
    {key:'autoelevadores',color:'#F97316', label:'🏗 Autoelevadores',   detalleKey:'aeDetalle'},
    {key:'camion',        color:'#FACC15', label:'🚚 Camión',           detalleKey:'camionDetalle'},
    {key:'limpieza',      color:'#00A887', label:'🤖 Limpieza',         detalleKey:'limpiezaDetalle'},
  ];

  equipos.forEach(eq => {
    const sec = document.createElement('div');
    sec.className = 'indicador-mensual';
    const vals = usoEquiposData.meses.map(m => m[eq.key]);
    const meses = usoEquiposData.meses.map(m => m.mes);
    sec.innerHTML = `
      <div class="indicador-mensual-title" style="display:flex;align-items:center;justify-content:space-between">
        ${eq.label} — horas de uso por mes
        <button class="ajustes-mes-btn" style="font-size:.72rem;padding:5px 12px;min-width:0"
          data-eq="${eq.key}" data-dk="${eq.detalleKey}">Ver detalle →</button>
      </div>
      <div class="inegr-chart-wrap"><canvas id="eqChart_${eq.key}"></canvas></div>`;
    wrap.appendChild(sec);

    sec.querySelector('[data-eq]').addEventListener('click', () => {
      renderUsoDetalleEquipo(eq.key, eq.detalleKey, eq.label, eq.color);
    });
  });

  menuGrid.appendChild(wrap);
  syncBackBtn();

  requestAnimationFrame(() => {
    equipos.forEach(eq => {
      drawSimpleBar(`eqChart_${eq.key}`, usoEquiposData.meses.map(m=>m.mes),
        usoEquiposData.meses.map(m=>m[eq.key]), eq.color, false, 'h');
    });
  });
}

function renderUsoDetalleEquipo(equipoKey, detalleKey, label, color) {
  setHeader('USO DE EQUIPOS');
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  // Selector de mes
  const meses = usoEquiposData.meses.map(m => m.mes);
  let mesIdx = usoEquiposData.meses.length - 1;

  const selSec = document.createElement('div');
  selSec.className = 'indicador-mensual';
  selSec.innerHTML = `
    <div class="indicador-mensual-title" style="display:flex;align-items:center;justify-content:space-between">
      ${label} — detalle por unidad
      <button class="ajustes-mes-btn" style="font-size:.72rem;padding:5px 12px;min-width:0"
        id="backToEqMain">← Volver</button>
    </div>
    <div class="ajustes-mes-selector" id="eqMesSel">
      ${meses.map((m,i) => `<button class="ajustes-mes-btn${i===mesIdx?' active':''}" data-i="${i}">${m}</button>`).join('')}
    </div>
    <div class="inegr-chart-wrap" style="height:240px;margin-top:12px"><canvas id="eqDetalleChart"></canvas></div>`;
  wrap.appendChild(selSec);
  menuGrid.appendChild(wrap);
  syncBackBtn();

  const drawDetalle = (idx) => {
    const mesData = usoEquiposData.meses[idx];
    const items   = mesData[detalleKey];
    const labels  = items.map(x => x.id);
    const vals    = items.map(x => x.horas);
    drawHorizontalBar('eqDetalleChart', labels, vals, color);
  };

  requestAnimationFrame(() => drawDetalle(mesIdx));

  document.getElementById('backToEqMain').addEventListener('click', () => {
    historyStack.push({ title:'INDICADORES', children:[] });
    renderIndicadorUsoEquipos();
  });

  selSec.addEventListener('click', e => {
    const btn = e.target.closest('[data-i]');
    if (!btn || btn.id === 'backToEqMain') return;
    selSec.querySelectorAll('[data-i]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mesIdx = parseInt(btn.dataset.i);
    drawDetalle(mesIdx);
  });
}

/* ═══════════════════════════════════════════════════════════════
   HELPERS DE GRÁFICOS
   ═══════════════════════════════════════════════════════════════ */
function drawSimpleBar(id, meses, vals, color, isPct, unit) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth || 700;
  canvas.height = wrap.clientHeight || 200;
  const W = canvas.width, H = canvas.height;
  const PAD = { top:22, right:12, bottom:36, left: isPct ? 34 : 46 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;
  const ctx = canvas.getContext('2d');
  const n = meses.length;
  const maxVal = Math.max(...vals, 1) * 1.15;
  const barW = (chartW/n)*0.6;
  const gap  = (chartW/n)*0.4;

  ctx.clearRect(0, 0, W, H);

  for (let i=0; i<=4; i++) {
    const y = PAD.top + chartH - (i/4)*chartH;
    ctx.strokeStyle = 'rgba(255,255,255,.07)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left+chartW, y); ctx.stroke();
    const lv = (maxVal*i/4);
    const lbl = isPct ? lv.toFixed(1)+'%' : (unit ? Math.round(lv)+unit : Math.round(lv).toLocaleString('es-AR'));
    ctx.fillStyle = 'rgba(255,255,255,.42)';
    ctx.font = '9px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(lbl, PAD.left-4, y+3);
  }

  vals.forEach((v, i) => {
    const x   = PAD.left + i*(barW+gap) + gap/2;
    const bH  = (v/maxVal)*chartH;
    const y   = PAD.top + chartH - bH;
    const isLast = i === n-1;
    ctx.fillStyle = isLast ? color : color+'99';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, barW, bH, [3,3,0,0]);
    else ctx.rect(x, y, barW, bH);
    ctx.fill();
    ctx.fillStyle = isLast ? '#fff' : 'rgba(255,255,255,.65)';
    ctx.font = (isLast?'bold ':'')+'9px Segoe UI';
    ctx.textAlign = 'center';
    const vl = isPct ? v+'%' : (unit ? v+unit : v.toLocaleString('es-AR'));
    ctx.fillText(vl, x+barW/2, y-4);
    ctx.fillStyle = 'rgba(255,255,255,.45)';
    ctx.font = '8px Segoe UI';
    ctx.fillText(meses[i].split(' ')[0], x+barW/2, H-PAD.bottom+12);
  });

  const prom = vals.reduce((s,v)=>s+v,0)/vals.length;
  const promY = PAD.top + chartH - (prom/maxVal)*chartH;
  ctx.strokeStyle = 'rgba(255,255,255,.25)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4,4]);
  ctx.beginPath(); ctx.moveTo(PAD.left, promY); ctx.lineTo(PAD.left+chartW, promY); ctx.stroke();
  ctx.setLineDash([]);
}

function drawHorizontalBar(id, labels, vals, color) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const wrap = canvas.parentElement;
  const n    = labels.length;
  canvas.width  = wrap.clientWidth || 600;
  canvas.height = Math.max(wrap.clientHeight || 240, n * 24 + 20);
  const W = canvas.width, H = canvas.height;
  const PAD = { top:10, right:16, bottom:10, left:90 };
  const chartW = W - PAD.left - PAD.right;
  const rowH   = (H - PAD.top - PAD.bottom) / n;
  const barH   = rowH * 0.55;
  const maxVal = Math.max(...vals, 1) * 1.12;
  const ctx    = canvas.getContext('2d');

  ctx.clearRect(0, 0, W, H);

  vals.forEach((v, i) => {
    const y    = PAD.top + i * rowH + (rowH - barH) / 2;
    const bW   = (v / maxVal) * chartW;
    ctx.fillStyle = color + '88';
    if (ctx.roundRect) ctx.roundRect(PAD.left, y, bW, barH, [0,3,3,0]);
    else ctx.rect(PAD.left, y, bW, barH);
    ctx.fill();
    // label izq
    ctx.fillStyle = 'rgba(255,255,255,.7)';
    ctx.font = '10px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(labels[i], PAD.left-6, y + barH/2 + 4);
    // valor der
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px Segoe UI';
    ctx.textAlign = 'left';
    ctx.fillText(v+'h', PAD.left + bW + 6, y + barH/2 + 4);
  });
}


function renderMapaBoxes() {
  setHeader('MAPA DE BOXES');
  setExpandedMode(true);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const ST = { libre:'#22c55e', entrada:'#ef4444', salida:'#8b5cf6' };
  const BG = { libre:'#dcfce7', entrada:'#fee2e2', salida:'#ede9fe' };

  // Estado inicial — en producción vendría de la API
  const state = {
    planta: 'Nacional',
    boxes: {
      B1:{ e:'salida',  v:'AE 798 UY' }, B2:{ e:'entrada', v:'AH 912 EH' },
      B3:{ e:'salida',  v:'OMT 066'   }, B4:{ e:'entrada', v:'AA 615 SK' },
      B5:{ e:'libre',   v:'PFC 060'   }, B6:{ e:'entrada', v:'MNP 682'   },
      B7:{ e:'libre',   v:'GSX 848'   }, B8:{ e:'libre',   v:''          },
      B9:{ e:'entrada', v:'AA 147 KS' }, B10:{e:'entrada', v:'AF 462 LG' },
      B11:{e:'salida',  v:'AC 564 SS' }, B12:{e:'salida',  v:'JDX 640'   },
      B13:{e:'libre',   v:''          }, B14:{e:'libre',   v:''          },
      FB1:{e:'libre', v:''}, FB2:{e:'libre', v:''}, FB3:{e:'libre', v:''},
      FB4:{e:'libre', v:''}, FB5:{e:'entrada',v:''}, FB6:{e:'salida',v:''},
      FB8:{e:'libre',v:''}, FB9:{e:'libre',v:''}, FB10:{e:'libre',v:''}, FB11:{e:'libre',v:''},
    },
    troneras: {
      T1:{e:'libre',t:''}, T2:{e:'entrada',t:'5:24'}, T3:{e:'libre',t:''},
      T4:{e:'libre',t:'0:00'}, T5:{e:'libre',t:''}, T6:{e:'libre',t:''},
      T7:{e:'libre',t:'0:00'}, T8:{e:'libre',t:''},
    }
  };

  // Lista de espera — camiones en playa aguardando box
  const listaEspera = [
    { patente:'KMR 918', tipo:'Entrada', llegada: new Date(Date.now() - 14*60000)  },
    { patente:'PPX 621', tipo:'Salida',  llegada: new Date(Date.now() - 38*60000)  },
    { patente:'ZZP 311', tipo:'Entrada', llegada: new Date(Date.now() - 72*60000)  },
    { patente:'LPO 555', tipo:'Salida',  llegada: new Date(Date.now() - 95*60000)  },
    { patente:'FGA 100', tipo:'Entrada', llegada: new Date(Date.now() - 118*60000) },
    { patente:'AH 912',  tipo:'Salida',  llegada: new Date(Date.now() - 145*60000) },
  ];
  let listaExpanded = false;

  const wrap = document.createElement('div');
  wrap.className = 'mapa-wrap';

  const draw = () => {
    const esN = state.planta === 'Nacional';
    wrap.innerHTML = `
      <div class="mapa-toolbar">
        <div class="mapa-toolbar-left">
          <span class="mapa-title-label">Planta</span>
          <div class="mapa-planta-toggle">
            <button class="mapa-plant-btn ${esN?'active':''}" data-p="Nacional">Nacional</button>
            <button class="mapa-plant-btn ${!esN?'active':''}" data-p="Fiscal">Fiscal</button>
          </div>
        </div>
        <div class="mapa-legend">
          <span class="mapa-leg-item" style="background:#22c55e;color:#fff">Libre</span>
          <span class="mapa-leg-item" style="background:#ef4444;color:#fff">Ocupado Entrada</span>
          <span class="mapa-leg-item" style="background:#8b5cf6;color:#fff">Ocupado Salida</span>
        </div>
        <button class="mapa-refresh-btn" id="mRefresh">↻ Actualizar</button>
      </div>
      <div class="mapa-body-row">
        <div class="mapa-canvas-wrap">
          <svg class="mapa-svg" viewBox="0 0 1100 640" xmlns="http://www.w3.org/2000/svg" id="mSVG">
            ${esN ? _nacional(state, ST, BG) : _fiscal(state, ST, BG)}
          </svg>
        </div>
        <div class="mapa-espera-panel">
          <div class="mapa-espera-header" id="mEsperaToggle">
            <span class="mapa-espera-title">Lista de espera</span>
            <span class="mapa-espera-count">(${listaEspera.length})</span>
            ${listaEspera.length > 4 ? '<span class="mapa-espera-arrow" id="mArrow">' + (listaExpanded ? '▲' : '▼') + '</span>' : ''}
          </div>
          <div class="mapa-espera-list ${listaExpanded ? 'expanded' : ''}" id="mEsperaList">
            ${listaEspera.slice(0, listaExpanded ? 999 : 4).map((c, i) => {
              const mins  = Math.floor((Date.now() - c.llegada) / 60000);
              const hh    = Math.floor(mins/60), mm = mins%60;
              const tStr  = hh > 0 ? hh + 'h ' + String(mm).padStart(2,'0') + 'm' : mm + 'm';
              const dot   = mins < 30 ? '🟢' : mins < 60 ? '🟡' : '🔴';
              const tipoCls = c.tipo === 'Entrada' ? 'ent' : 'sal';
              return `<div class="mapa-espera-row">
                <span class="mapa-espera-idx">${i+1}</span>
                <span class="mapa-espera-tipo ${tipoCls}">${c.tipo === 'Entrada' ? '⬇' : '⬆'}</span>
                <span class="mapa-espera-patente">${c.patente}</span>
                <span class="mapa-espera-tiempo">${dot} ${tStr}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;

    wrap.querySelectorAll('.mapa-plant-btn').forEach(b => {
      b.onclick = () => { state.planta = b.dataset.p; draw(); };
    });
    wrap.querySelector('#mRefresh').onclick = () => { showToast('↻ Mapa actualizado'); draw(); };
    wrap.querySelector('#mSVG').addEventListener('click', e => {
      const g = e.target.closest('[data-box]');
      if (!g) return;
      const id = g.dataset.box;
      historyStack.push({ title:'MAPA DE BOXES', custom:'mapa_boxes' });
      if (id === 'B6') renderContenedor6Detail();
      else showToast('Box ' + id + ' — Click para ver detalle');
    });
    const toggleBtn = wrap.querySelector('#mEsperaToggle');
    if (toggleBtn) {
      toggleBtn.onclick = () => {
        if (listaEspera.length <= 4) return;
        listaExpanded = !listaExpanded;
        draw();
      };
    }
  };

  draw();
  menuGrid.appendChild(wrap);
  syncBackBtn();
}

/* ── Helper SVG generadores ────────────────────────────────── */
function _svgTruck(id, x, y, angle, st, ST, BG) {
  const c = ST[st.e]||'#94a3b8', b = BG[st.e]||'#f1f5f9';
  // "camión" = rectángulo chico gris + rectángulo de carga coloreado
  const cx = x + 50, cy = y + 12;
  return `<g data-box="${id}" class="mapa-box-g" transform="rotate(${angle},${cx},${cy})">
    <rect x="${x}" y="${y}" width="16" height="24" rx="3" fill="#94a3b8"/>
    <rect x="${x+18}" y="${y}" width="64" height="24" rx="3" fill="${b}" stroke="${c}" stroke-width="2"/>
    <text x="${x+50}" y="${y+15}" text-anchor="middle" font-size="8.5" fill="${c}" font-weight="800">${id} ${st.v||''}</text>
  </g>`;
}

function _svgBoxH(id, x, y, label, st, ST, BG) {
  const c = ST[st.e]||'#94a3b8', b = BG[st.e]||'#f1f5f9';
  return `<g data-box="${id}" class="mapa-box-g">
    <rect x="${x}" y="${y}" width="105" height="28" rx="5" fill="${b}" stroke="${c}" stroke-width="2"/>
    <text x="${x+52}" y="${y+18}" text-anchor="middle" font-size="10.5" fill="${c}" font-weight="900">${label}</text>
  </g>`;
}

function _svgBoxHW(id, x, y, w, label, st, ST, BG) {
  const c = ST[st.e]||'#22c55e', b = BG[st.e]||'#dcfce7';
  return `<g data-box="${id}" class="mapa-box-g">
    <rect x="${x}" y="${y}" width="${w}" height="28" rx="5" fill="${b}" stroke="${c}" stroke-width="2"/>
    <text x="${x+w/2}" y="${y+18}" text-anchor="middle" font-size="10.5" fill="${c}" font-weight="900">${label}</text>
  </g>`;
}

function _svgBoxV(id, x, y, h, label, st, ST, BG) {
  const c = ST[st.e]||'#22c55e', b = BG[st.e]||'#dcfce7';
  return `<g data-box="${id}" class="mapa-box-g">
    <rect x="${x}" y="${y}" width="30" height="${h}" rx="5" fill="${b}" stroke="${c}" stroke-width="2"/>
    <text x="${x+15}" y="${y+h/2+4}" text-anchor="middle" font-size="9" fill="${c}" font-weight="800" transform="rotate(-90,${x+15},${y+h/2})">${label}</text>
  </g>`;
}

function _svgTronera(id, x, y, st, ST, BG, tiempo) {
  const c = ST[st.e]||'#22c55e', b = BG[st.e]||'#dcfce7';
  const t = tiempo||st.t||'';
  return `<g>
    <rect x="${x}" y="${y}" width="28" height="28" rx="6" fill="${b}" stroke="${c}" stroke-width="2"/>
    <text x="${x+14}" y="${y+18}" text-anchor="middle" font-size="9" fill="${c}" font-weight="900">${id}</text>
    ${t ? `<text x="${x+14}" y="${y+36}" text-anchor="middle" font-size="7.5" fill="${c}" font-weight="700">${t}</text>` : ''}
  </g>`;
}

function _nacional(s, ST, BG) {
  const bx = id => s.boxes[id] || {e:'libre',v:''};
  const tr = id => s.troneras[id] || {e:'libre',t:''};

  // Camiones izquierda diagonal -45°, apilados
  const trucks = ['B1','B2','B3','B4','B5'].map((id,i) => {
    return _svgTruck(id, 30 + i*18, 620 - i*50, '', bx(id), ST, BG);
  }).join('');
  // Apply rotation after: render them in-line at -45
  const trucksGroup = `<g transform="rotate(-45,155,530)">${['B1','B2','B3','B4','B5'].map((id,i) =>
    `<g data-box="${id}" class="mapa-box-g">
      <rect x="30" y="${510 - i*32}" width="16" height="24" rx="3" fill="#94a3b8"/>
      <rect x="48" y="${510 - i*32}" width="70" height="24" rx="3" fill="${BG[bx(id).e]}" stroke="${ST[bx(id).e]}" stroke-width="2"/>
      <text x="83" y="${522 - i*32}" text-anchor="middle" font-size="8" fill="${ST[bx(id).e]}" font-weight="800">${id} ${bx(id).v}</text>
    </g>`
  ).join('')}</g>`;

  // B6 diagonal top-left, B7 top diagonal
  const b6 = `<g transform="rotate(-30,250,350)">
    <g data-box="B6" class="mapa-box-g">
      <rect x="200" y="336" width="16" height="24" rx="3" fill="#94a3b8"/>
      <rect x="218" y="336" width="70" height="24" rx="3" fill="${BG[bx('B6').e]}" stroke="${ST[bx('B6').e]}" stroke-width="2"/>
      <text x="253" y="351" text-anchor="middle" font-size="8.5" fill="${ST[bx('B6').e]}" font-weight="800">B6 ${bx('B6').v}</text>
    </g>
  </g>`;
  const b7 = `<g transform="rotate(30,370,200)">
    <g data-box="B7" class="mapa-box-g">
      <rect x="310" y="186" width="16" height="24" rx="3" fill="#94a3b8"/>
      <rect x="328" y="186" width="70" height="24" rx="3" fill="${BG[bx('B7').e]}" stroke="${ST[bx('B7').e]}" stroke-width="2"/>
      <text x="363" y="201" text-anchor="middle" font-size="8.5" fill="${ST[bx('B7').e]}" font-weight="800">B7 ${bx('B7').v}</text>
    </g>
  </g>`;

  return `
    <!-- Fondo playa maniobras -->
    <circle cx="380" cy="390" r="130" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    <text x="380" y="385" text-anchor="middle" font-size="13" fill="#94a3b8" font-weight="700">PLAYA DE</text>
    <text x="380" y="402" text-anchor="middle" font-size="13" fill="#94a3b8" font-weight="700">MANIOBRAS</text>

    <!-- Planta Nacional -->
    <rect x="720" y="50" width="310" height="520" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="875" y="318" text-anchor="middle" font-size="19" fill="#1d4ed8" font-weight="900" letter-spacing="1.5">PLANTA</text>
    <text x="875" y="342" text-anchor="middle" font-size="19" fill="#1d4ed8" font-weight="900" letter-spacing="1.5">NACIONAL</text>

    <!-- Depósito secos -->
    <rect x="1030" y="350" width="52" height="220" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="1056" y="462" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="800" transform="rotate(-90,1056,462)">DEPÓSITO SECOS</text>

    <!-- Camiones B1-B5 diagonal inferior izquierda -->
    ${trucksGroup}

    <!-- B6 diagonal -->
    ${b6}
    <!-- B7 diagonal -->
    ${b7}

    <!-- ROW: truck fila central con troneras (B8-B12) -->
    <!-- Header Box 8 -->
    ${_svgBoxHW('B8', 570, 95, 105, 'Box 8', {e:'libre'}, ST, BG)}

    <!-- Truck+tronera B4 grupo -->
    <rect x="555" y="127" width="16" height="26" rx="3" fill="#94a3b8"/>
    <g data-box="B9" class="mapa-box-g">
      <rect x="573" y="127" width="88" height="26" rx="3" fill="${BG[bx('B9').e]}" stroke="${ST[bx('B9').e]}" stroke-width="2"/>
      <text x="617" y="144" text-anchor="middle" font-size="9" fill="${ST[bx('B9').e]}" font-weight="800">B9 ${bx('B9').v}</text>
    </g>
    ${_svgTronera('T4', 668, 120, tr('T4'), ST, BG, '')}
    <text x="682" y="160" text-anchor="middle" font-size="7.5" fill="${ST[tr('T4').e]}" font-weight="700">${tr('T4').t||'0:00'}</text>

    <rect x="555" y="162" width="16" height="26" rx="3" fill="#94a3b8"/>
    <g data-box="B10" class="mapa-box-g">
      <rect x="573" y="162" width="88" height="26" rx="3" fill="${BG[bx('B10').e]}" stroke="${ST[bx('B10').e]}" stroke-width="2"/>
      <text x="617" y="179" text-anchor="middle" font-size="9" fill="${ST[bx('B10').e]}" font-weight="800">B10 ${bx('B10').v}</text>
    </g>
    ${_svgTronera('T3', 668, 165, tr('T3'), ST, BG, '')}

    <rect x="555" y="300" width="16" height="26" rx="3" fill="#94a3b8"/>
    <g data-box="B11" class="mapa-box-g">
      <rect x="573" y="300" width="88" height="26" rx="3" fill="${BG[bx('B11').e]}" stroke="${ST[bx('B11').e]}" stroke-width="2"/>
      <text x="617" y="317" text-anchor="middle" font-size="9" fill="${ST[bx('B11').e]}" font-weight="800">B11 ${bx('B11').v}</text>
    </g>
    ${_svgTronera('T2', 668, 290, tr('T2'), ST, BG, '5:24')}

    <rect x="555" y="335" width="16" height="26" rx="3" fill="#94a3b8"/>
    <g data-box="B12" class="mapa-box-g">
      <rect x="573" y="335" width="88" height="26" rx="3" fill="${BG[bx('B12').e]}" stroke="${ST[bx('B12').e]}" stroke-width="2"/>
      <text x="617" y="352" text-anchor="middle" font-size="9" fill="${ST[bx('B12').e]}" font-weight="800">B12 ${bx('B12').v}</text>
    </g>
    ${_svgTronera('T1', 668, 335, tr('T1'), ST, BG, '0:00')}

    <!-- Box 13, 14 -->
    ${_svgBoxHW('B13', 570, 400, 105, 'Box 13', bx('B13'), ST, BG)}
    ${_svgBoxHW('B14', 570, 438, 105, 'Box 14', bx('B14'), ST, BG)}

    <!-- Troneras T5 T6 T7 abajo derecha planta -->
    ${_svgTronera('T5', 898, 462, tr('T5'), ST, BG, '')}
    ${_svgTronera('T6', 932, 462, tr('T6'), ST, BG, '')}
    ${_svgTronera('T7', 966, 462, tr('T7'), ST, BG, '0:00')}

    <!-- T7 acoplado vertical (PFC 060) -->
    <rect x="985" y="330" width="18" height="105" rx="3" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="994" y="386" text-anchor="middle" font-size="7.5" fill="#5b21b6" font-weight="700" transform="rotate(-90,994,386)">PFC 060</text>

    <!-- T8 suelto -->
    ${_svgTronera('T8', 1066, 280, tr('T8'), ST, BG, '')}
  `;
}

function _fiscal(s, ST, BG) {
  const bx = id => s.boxes[id] || {e:'libre',v:''};
  const tr = id => s.troneras[id] || {e:'libre',t:''};
  const ang = -25;

  // Box angled helper
  const bDiag = (id, x, y, w, h, lbl, angle) => {
    const st = bx(id);
    const c = ST[st.e]||'#22c55e', b = BG[st.e]||'#dcfce7';
    return `<g data-box="${id}" class="mapa-box-g" transform="rotate(${angle},${x+w/2},${y+h/2})">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${b}" stroke="${c}" stroke-width="2"/>
      <text x="${x+w/2}" y="${y+h*0.68}" text-anchor="middle" font-size="9" fill="${c}" font-weight="800">${lbl}</text>
    </g>`;
  };

  return `
    <!-- Playa maniobras -->
    <circle cx="270" cy="450" r="110" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    <text x="270" y="445" text-anchor="middle" font-size="13" fill="#94a3b8" font-weight="700">PLAYA DE</text>
    <text x="270" y="462" text-anchor="middle" font-size="13" fill="#94a3b8" font-weight="700">MANIOBRAS</text>

    <!-- Planta fiscal rotada -->
    <g transform="rotate(-25,700,380)">
      <rect x="530" y="225" width="330" height="260" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
      <text x="695" y="355" text-anchor="middle" font-size="19" fill="#1d4ed8" font-weight="900" letter-spacing="1.5">PLANTA FISCAL</text>
    </g>

    <!-- Box 3, Box 4 — arriba -->
    ${_svgBoxHW('FB3', 205, 60, 105, 'Box 3', bx('FB3'), ST, BG)}
    ${_svgBoxHW('FB4', 405, 60, 105, 'Box 4', bx('FB4'), ST, BG)}

    <!-- Box 1, Box 2 — izquierda vertical -->
    ${_svgBoxV('FB1', 62, 115, 90, 'Box 1', bx('FB1'), ST, BG)}
    ${_svgBoxV('FB2', 62, 280, 90, 'Box 2', bx('FB2'), ST, BG)}

    <!-- Box 5, Box 6 — diagonales centrales -->
    ${bDiag('FB5', 400, 350, 120, 28, 'Box 5', -35)}
    ${bDiag('FB6', 445, 415, 120, 28, 'Box 6', -35)}

    <!-- Troneras fiscales -->
    ${_svgTronera('T3', 519, 345, tr('T3'), ST, BG, '')}
    ${_svgTronera('T2', 655, 428, tr('T2'), ST, BG, '')}
    ${_svgTronera('T1', 690, 460, tr('T1'), ST, BG, '')}

    <!-- Boxes angulados pequeños (B8-B11) en diagonal -->
    ${bDiag('FB8',  490, 355, 80, 26, 'Box 8',  -35)}
    ${bDiag('FB9',  520, 310, 80, 26, 'Box 9',  -35)}
    ${bDiag('FB10', 550, 265, 80, 26, 'Box 10', -35)}
    ${bDiag('FB11', 580, 220, 80, 26, 'Box 11', -35)}
  `;
}


function renderContenedor6Detail() {
  setHeader('ESTIBA 65984-3');
  setExpandedMode(true);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = `
    <div class="estiba-detail-wrap">
      <section class="estiba-header-card">
        <div>
          <h2 class="estiba-title">ESTIBA 65984-3</h2>
          <p class="estiba-subtitle">Contenedor 6 · Información operativa y de calidad</p>
        </div>
        <div class="estiba-module-actions">
          <button class="estiba-module-btn logistica" id="btnModuloLogistica">Logística</button>
          <button class="estiba-module-btn calidad"   id="btnModuloCalidad">Calidad</button>
          <button class="estiba-module-btn salir"     id="btnSalirMenuPrincipal">Salir al menú principal</button>
        </div>
      </section>

      <section class="estiba-info-card">
        <div class="estiba-info-grid">
          <div class="estiba-info-box">
            <div class="estiba-info-label">Ubicación</div>
            <div class="estiba-info-value">16-5-4-2</div>
          </div>
          <div class="estiba-info-box">
            <div class="estiba-info-label">Tipo</div>
            <div class="estiba-info-value">Pallet</div>
          </div>
          <div class="estiba-info-box" style="grid-column:1 / -1;">
            <div class="estiba-ocupacion">
              <div class="estiba-ocupacion-top">
                <div class="estiba-info-label">Ocupación</div>
                <div class="estiba-info-value" style="margin-top:0;">78%</div>
              </div>
              <div class="estiba-progress">
                <div class="estiba-progress-bar" style="width:78%;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="estiba-actions-card">
        <div class="estiba-actions-grid">
          <button class="estiba-action-btn intervenir"   id="btnAbrirIntervencion">Intervenir</button>
          <button class="estiba-action-btn liberar"      id="btnAbrirLiberacion">Liberar</button>
          <button class="estiba-action-btn imprimir"     id="btnImprimirEstiba">Imprimir estiba</button>
          <button class="estiba-action-btn fotos"        id="btnAbrirFotos">Cargar fotos</button>
          <button class="estiba-action-btn temperaturas" id="btnAbrirTemperaturas">Cargar temperaturas</button>
          <button class="estiba-action-btn certificado" id="btnAbrirCertificado">Control certificado</button>
        </div>
      </section>

      <section class="estiba-detail-card">
        <h3 class="estiba-detail-title">Detalle</h3>
        <div class="estiba-detail-table">
          ${detailProducts.map(item => `
            <div class="estiba-detail-row">
              <div class="estiba-detail-product">${item.producto}</div>
              <div class="estiba-detail-date">${item.fecha}</div>
            </div>`).join('')}
        </div>
      </section>
    </div>`;

  document.getElementById('btnAbrirIntervencion').addEventListener('click', () => {
    historyStack.push({ title: 'ESTIBA 65984-3', custom: 'detalle_estiba_6' });
    renderAccionEstibaForm('intervenir');
  });
  document.getElementById('btnAbrirLiberacion').addEventListener('click', () => {
    historyStack.push({ title: 'ESTIBA 65984-3', custom: 'detalle_estiba_6' });
    renderAccionEstibaForm('liberar');
  });
  document.getElementById('btnAbrirTemperaturas').addEventListener('click', () => {
    historyStack.push({ title: 'ESTIBA 65984-3', custom: 'detalle_estiba_6' });
    renderTemperaturasForm();
  });
  document.getElementById('btnImprimirEstiba').addEventListener('click', () => { window.print(); });
  document.getElementById('btnAbrirFotos').addEventListener('click', () => {
    historyStack.push({ title: 'ESTIBA 65984-3', custom: 'detalle_estiba_6' });
    renderFotosForm();
  });
  document.getElementById('btnAbrirCertificado').addEventListener('click', () => {
    historyStack.push({ title: 'ESTIBA 65984-3', custom: 'detalle_estiba_6' });
    renderControlCertificado();
  });
  document.getElementById('btnModuloLogistica').addEventListener('click', () => { alert('Abrir módulo Logística'); });
  document.getElementById('btnModuloCalidad').addEventListener('click',   () => { alert('Abrir módulo Calidad'); });
  document.getElementById('btnSalirMenuPrincipal').addEventListener('click', () => {
    historyStack.length = 0;
    renderNode(menuTree);
  });

  syncBackBtn();
}

function renderAccionEstibaForm(tipoAccion) {
  const esLiberacion = tipoAccion === 'liberar';
  const titulo       = esLiberacion ? 'LIBERACION DE ESTIBA' : 'INTERVENCION DE ESTIBA';
  const verbo        = esLiberacion ? 'Liberar' : 'Intervenir';
  const descripcion  = esLiberacion
    ? 'Complete la información para registrar la liberación.'
    : 'Complete la información para registrar la intervención.';

  setHeader(titulo);
  setExpandedMode(true);
  showMetaPanel(false);   // ← ocultar tira de datos en formularios
  menuGrid.className = '';
  menuGrid.innerHTML = `
    <div class="intervencion-wrap">
      <section class="intervencion-card">
        <h2 class="intervencion-title">${verbo} estiba 65984-3</h2>
        <p class="intervencion-subtitle">${descripcion}</p>
      </section>

      <section class="intervencion-card">
        <h3 class="intervencion-section-title">Tipo de ${esLiberacion ? 'liberación' : 'intervención'}</h3>
        <div class="intervencion-options">
          <label class="intervencion-option-row">
            <input type="radio" name="tipoAccionEstiba" value="estiba_completa" checked>
            <span class="intervencion-option-label">${verbo} estiba completa</span>
          </label>
          <label class="intervencion-option-row">
            <input type="radio" name="tipoAccionEstiba" value="estiba_parcial">
            <span class="intervencion-option-label">${verbo} estiba parcial</span>
            <input type="number" id="cantidadParcial" class="intervencion-partial-qty" min="1" placeholder="Cantidad" disabled>
          </label>
          <label class="intervencion-option-row">
            <input type="radio" name="tipoAccionEstiba" value="entrada_entera">
            <span class="intervencion-option-label">${verbo} entrada entera</span>
          </label>
        </div>
      </section>

      <section class="intervencion-card">
        <div class="intervencion-field">
          <label class="intervencion-label" for="motivoAccionEstiba">Motivo</label>
          <select id="motivoAccionEstiba" class="intervencion-select">
            <option value="">Seleccione una opción</option>
            <option>A pedido del cliente</option>
            <option>Calidad</option>
            <option>Documentación</option>
            <option>Envases rotos y/o con faltante</option>
            <option>Mercadería vencida o pronta a vencer</option>
            <option>Senasa</option>
          </select>
        </div>
      </section>

      <section class="intervencion-card">
        <div class="intervencion-field">
          <label class="intervencion-label" for="observacionesAccionEstiba">Observaciones</label>
          <textarea id="observacionesAccionEstiba" class="intervencion-textarea" placeholder="Escriba aquí las observaciones..."></textarea>
        </div>
      </section>

      <section class="intervencion-card">
        <div class="intervencion-actions">
          <button id="btnConfirmarAccionEstiba" class="intervencion-submit">${verbo}</button>
        </div>
      </section>
    </div>`;

  const radios          = document.querySelectorAll('input[name="tipoAccionEstiba"]');
  const cantidadParcial = document.getElementById('cantidadParcial');

  function updateCantidadParcial() {
    const isParcial = document.querySelector('input[name="tipoAccionEstiba"]:checked')?.value === 'estiba_parcial';
    cantidadParcial.disabled = !isParcial;
    if (isParcial) cantidadParcial.focus();
    else cantidadParcial.value = '';
  }
  radios.forEach(r => r.addEventListener('change', updateCantidadParcial));
  updateCantidadParcial();

  document.getElementById('btnConfirmarAccionEstiba').addEventListener('click', () => {
    const tipo   = document.querySelector('input[name="tipoAccionEstiba"]:checked')?.value || '';
    const motivo = document.getElementById('motivoAccionEstiba')?.value || '';
    if (!motivo) { alert(`Seleccione un motivo para ${esLiberacion ? 'la liberación' : 'la intervención'}.`); return; }
    if (tipo === 'estiba_parcial') {
      const cantidad = Number(cantidadParcial.value);
      if (!cantidad || cantidad <= 0) { alert(`Ingrese la cantidad para ${esLiberacion ? 'la liberación' : 'la intervención'} parcial.`); return; }
    }
    showMetaPanel(true);
    historyStack.length = 0;
    renderNode(menuTree);
  });

  syncBackBtn();
}

function renderTemperaturasForm() {
  setHeader('CARGA DE TEMPERATURAS');
  setExpandedMode(true);
  showMetaPanel(false);
  menuGrid.className = '';
  menuGrid.innerHTML = `
    <div class="temperaturas-wrap">
      <section class="temperaturas-card">
        <h2 class="temperaturas-title">Cargar temperaturas de estiba 65984-3</h2>
        <p class="temperaturas-subtitle">Seleccione hasta 10 productos y cargue 2 temperaturas por cada uno.</p>
      </section>
      <section class="temperaturas-card">
        <h3 class="temperaturas-section-title">Temperaturas</h3>
        <div class="temperaturas-list">
          ${Array.from({length: 10}, (_, i) => `
            <div class="temperaturas-row">
              <div class="temperaturas-row-title">Registro ${i + 1}</div>
              <div class="temperaturas-field">
                <label class="temperaturas-label" for="producto_${i}">Producto</label>
                <select id="producto_${i}" class="temperaturas-select">
                  <option value="">Seleccione un producto</option>
                  ${detailProducts.map(p => `<option value="${p.producto}">${p.producto}</option>`).join('')}
                </select>
              </div>
              <div class="temperaturas-field">
                <label class="temperaturas-label" for="temp1_${i}">Temperatura 1</label>
                <input id="temp1_${i}" class="temperaturas-input" type="number" step="0.1" placeholder="Ej: -18.5">
              </div>
              <div class="temperaturas-field">
                <label class="temperaturas-label" for="temp2_${i}">Temperatura 2</label>
                <input id="temp2_${i}" class="temperaturas-input" type="number" step="0.1" placeholder="Ej: -17.9">
              </div>
            </div>`).join('')}
        </div>
      </section>
      <section class="temperaturas-card">
        <div class="temperaturas-actions">
          <button id="btnCargarTemperaturas" class="temperaturas-submit">Cargar datos</button>
        </div>
      </section>
    </div>`;

  document.getElementById('btnCargarTemperaturas').addEventListener('click', () => {
    let validos = 0;
    for (let i = 0; i < 10; i++) {
      const prod = document.getElementById(`producto_${i}`)?.value || '';
      const t1   = document.getElementById(`temp1_${i}`)?.value   || '';
      const t2   = document.getElementById(`temp2_${i}`)?.value   || '';
      if (prod || t1 || t2) {
        if (!prod) { alert(`Seleccione el producto en el registro ${i + 1}.`); return; }
        if (t1 === '' || t2 === '') { alert(`Complete las 2 temperaturas del registro ${i + 1}.`); return; }
        validos++;
      }
    }
    if (validos === 0) { alert('Cargue al menos un registro de temperatura.'); return; }
    showMetaPanel(true);
    historyStack.length = 0;
    renderNode(menuTree);
  });

  syncBackBtn();
}

function renderFotosForm() {
  setHeader('CARGA DE FOTOS');
  setExpandedMode(true);
  showMetaPanel(false);
  menuGrid.className = '';
  menuGrid.innerHTML = `
    <div class="intervencion-wrap">
      <section class="intervencion-card">
        <h2 class="intervencion-title">Cargar fotos de estiba 65984-3</h2>
        <p class="intervencion-subtitle">Adjuntá imágenes desde archivo o tomá una foto directamente con la cámara.</p>
      </section>

      <section class="intervencion-card">
        <div class="foto-upload-row">
          <!-- Desde archivo -->
          <label class="foto-source-btn foto-btn-archivo" for="fotoFileInput">
            <span class="foto-btn-icon">🖼</span>
            <span class="foto-btn-label">Seleccionar<br>desde archivo</span>
            <input type="file" id="fotoFileInput" multiple accept="image/*" style="display:none" />
          </label>
          <!-- Desde cámara -->
          <label class="foto-source-btn foto-btn-camara" for="fotoCameraInput">
            <span class="foto-btn-icon">📷</span>
            <span class="foto-btn-label">Tomar foto<br>con cámara</span>
            <input type="file" id="fotoCameraInput" accept="image/*" capture="environment" style="display:none" />
          </label>
        </div>
      </section>

      <!-- Preview de fotos cargadas -->
      <section class="intervencion-card" id="fotoPreviewSection" style="display:none">
        <div class="intervencion-field">
          <label class="intervencion-label">Fotos seleccionadas (<span id="fotoCount">0</span>)</label>
          <div class="foto-preview-grid" id="fotoPreviewGrid"></div>
        </div>
      </section>

      <section class="intervencion-card">
        <div class="intervencion-field">
          <label class="intervencion-label">Observaciones</label>
          <textarea class="intervencion-textarea" id="fotoObs" placeholder="Escriba aquí un detalle de las fotos cargadas..."></textarea>
        </div>
      </section>
      <section class="intervencion-card">
        <div class="intervencion-actions">
          <button id="btnGuardarFotos" class="intervencion-submit" disabled>Guardar fotos</button>
        </div>
      </section>
    </div>`;

  // Acumular fotos de ambas fuentes
  const fotosAcumuladas = [];

  const renderPreviews = () => {
    const grid    = document.getElementById('fotoPreviewGrid');
    const section = document.getElementById('fotoPreviewSection');
    const countEl = document.getElementById('fotoCount');
    const saveBtn = document.getElementById('btnGuardarFotos');
    if (!grid) return;
    grid.innerHTML = '';
    fotosAcumuladas.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const div = document.createElement('div');
      div.className = 'foto-preview-item';
      div.innerHTML =
        '<img src="' + url + '" class="foto-preview-img" />'
        + '<button class="foto-remove-btn" data-i="' + i + '" title="Eliminar">✕</button>'
        + '<span class="foto-preview-name">' + file.name + '</span>';
      grid.appendChild(div);
    });
    if (countEl) countEl.textContent = fotosAcumuladas.length;
    if (section) section.style.display = fotosAcumuladas.length ? '' : 'none';
    if (saveBtn) saveBtn.disabled = fotosAcumuladas.length === 0;
  };

  const addFiles = (files) => {
    Array.from(files).forEach(f => fotosAcumuladas.push(f));
    renderPreviews();
  };

  const fileInput   = document.getElementById('fotoFileInput');
  const cameraInput = document.getElementById('fotoCameraInput');
  if (fileInput)   fileInput.addEventListener('change',   e => addFiles(e.target.files));
  if (cameraInput) cameraInput.addEventListener('change', e => addFiles(e.target.files));

  document.getElementById('fotoPreviewGrid')?.addEventListener('click', e => {
    const btn = e.target.closest('.foto-remove-btn');
    if (!btn) return;
    fotosAcumuladas.splice(parseInt(btn.dataset.i), 1);
    renderPreviews();
  });

  document.getElementById('btnGuardarFotos').addEventListener('click', () => {
    showToast('✅ ' + fotosAcumuladas.length + ' foto' + (fotosAcumuladas.length > 1 ? 's' : '') + ' guardada' + (fotosAcumuladas.length > 1 ? 's' : ''));
    showMetaPanel(true);
    setExpandedMode(false);
    historyStack.length = 0;
    renderNode(menuTree);
  });

  syncBackBtn();
}

/* ── RENDER PRINCIPAL ───────────────────────────────────────── */
function renderNode(node) {
  setExpandedMode(false);
  showMetaPanel(true);

  if (node.custom === 'mapa_boxes')      { renderMapaBoxes();          return; }
  if (node.custom === 'detalle_estiba_6'){ renderContenedor6Detail();  return; }

  const items = node.children || [];
  const level = historyStack.length;

  setHeader(level ? node.title : 'BIENVENIDOS AL SISTEMA DE GRUPO CINA');
  const cnt = items.length || 1;
  menuGrid.className = `menu-grid ${getGridLayout(cnt)}`;
  menuGrid.dataset.count = cnt;
  menuGrid.innerHTML = '';

  if (!items.length) {
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.type = 'button';
    tile.style.background = 'linear-gradient(135deg,#163A7A,#0C2554)';
    tile.innerHTML = `
      <div class="tile-icon">${getIconMarkup(node.title)}</div>
      <div class="tile-title ${titleClass(node.title)}">${formatTitle(node.title)}</div>`;
    if (node.url) tile.addEventListener('click', () => openModule(node.url));
    menuGrid.appendChild(tile);
  } else {
    items.forEach(item => {
      const colors = getTileColors(item, level);
      const tile   = document.createElement('button');
      tile.className = 'tile';
      tile.type = 'button';
      tile.style.background = `linear-gradient(135deg,${colors.start},${colors.end})`;
      tile.innerHTML = getCustomTileHTML(item) || `
        <div class="tile-icon">${getIconMarkup(item.title)}</div>
        <div class="tile-title ${titleClass(item.title)}">${formatTitle(item.title)}</div>`;

      tile.addEventListener('click', () => {
        if (item.title === 'MAPA DE BOXES')                  { historyStack.push(node); renderMapaBoxes();                    return; }
        if (item.title === 'DASHBOARD LOGISTICA NACIONAL')   { historyStack.push(node); renderDashboardLogisticaNacional();   return; }
        if (item.title === 'DASHBOARD EQUIPAMIENTO')         { historyStack.push(node); renderDashboardEquipamiento();        return; }
        if (item.title === 'CARGAS I-2')                     { historyStack.push(node); renderIndicadorCargasI2();            return; }
        if (item.title === 'ALMACENAMIENTO DE POSICIONES')   { historyStack.push(node); renderIndicadorPosiciones();          return; }
        if (item.title === 'POSICIONES INGRESADAS EGRESADAS') { historyStack.push(node); renderIndicadorIngEgr();             return; }
        if (item.title === 'MOVIMIENTOS' && node.title === 'INDICADORES') { historyStack.push(node); renderIndicadorMovimientos();      return; }
        if (item.title === 'CLIENTES QUE OPERARON')           { historyStack.push(node); renderIndicadorClientes();            return; }
        if (item.title === 'AJUSTES DE STOCK')               { historyStack.push(node); renderIndicadorAjustes();             return; }
        if (item.title === 'ESTADISTICAS DE PERSONAL')       { historyStack.push(node); renderIndicadorPersonal();             return; }
        if (item.title === 'USO DE EQUIPOS')                 { historyStack.push(node); renderIndicadorUsoEquipos();           return; }
        if (item.title === 'ESTIBAS CONGELADAS')             { historyStack.push(node); renderIndicadorEstibasCongeladas();   return; }
        if (item.title === 'CARGAS' && node.title === 'LOGISTICA NACIONAL') { historyStack.push(node); renderCargas(false); return; }
        if (item.title === 'CARGAS' && node.title === 'LOGISTICA FISCAL')   { historyStack.push(node); renderCargas(true);  return; }
                if (item.title === 'PRE ENTRADAS') { historyStack.push(node); renderLogMod('preEntradas', item.fiscal||false); return; }
        if (item.title === 'ENTRADAS')      { historyStack.push(node); renderLogMod('entradas',    item.fiscal||false); return; }
        if (item.title === 'PRE SALIDAS')   { historyStack.push(node); renderLogMod('preSalidas',  item.fiscal||false); return; }
        if (item.title === 'SALIDAS')       { historyStack.push(node); renderLogMod('salidas',     item.fiscal||false); return; }
                if (item.title === 'FACTURACION' && node.title === 'ADMINISTRACION') { historyStack.push(node); renderFacturacion(); return; }
        if (item.title === 'REMITOS'     && node.title === 'ADMINISTRACION') { historyStack.push(node); renderRemitos();      return; }
        if (item.title === 'COMPRAS'     && node.title === 'ADMINISTRACION') { historyStack.push(node); renderCompras();      return; }
        if (item.title === 'PR 6 CONTRASTE DE TERMOMETROS')                 { historyStack.push(node); renderPR6Contraste(); return; }
        if (item.children)                                   { historyStack.push(node); renderNode(item);                    return; }
        if (item.url)                                        { openModule(item.url);                                         return; }
        historyStack.push(node);
        renderNode({ title: item.title, url: item.url, children: [] });
      });

      menuGrid.appendChild(tile);
    });
  }

  syncBackBtn();
}

/* ── LAYOUT ADAPTATIVO ──────────────────────────────────────── */
function updateAdaptiveLayout() {
  const isPortrait  = window.innerHeight > window.innerWidth;
  const isSmall     = window.innerWidth < 1400 || window.innerHeight < 860;
  document.body.classList.toggle('orient-portrait',  isPortrait);
  document.body.classList.toggle('orient-landscape', !isPortrait && isSmall);
  document.body.classList.toggle('compact-mode',     isSmall);
}

/* ── EVENTOS GLOBALES ───────────────────────────────────────── */
backBtn.addEventListener('click', () => {
  if (!historyStack.length) return;
  showMetaPanel(true);
  const previous = historyStack.pop();
  renderNode(previous);
});

homeBtn.addEventListener('click', () => {
  historyStack.length = 0;
  showMetaPanel(true);
  renderNode(menuTree);
});

fullscreenBtn.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else                             await document.exitFullscreen();
  } catch (e) {
    console.warn('Fullscreen no disponible:', e);
  } finally {
    updateAdaptiveLayout();
  }
});

userBtn.addEventListener('click', () => renderPerfilUsuario());
qrBox.addEventListener('click', () => { historyStack.push(menuTree); renderContenedor6Detail(); });
sinUbicacionBox.addEventListener('click', () => openModule('https://sistema.cinafrio.com/intranet/index.php/estiba/sinPosicion'));
vencidasBox.addEventListener('click',     () => openModule('https://sistema.cinafrio.com/intranet/index.php/infostock/vencimientos'));

document.addEventListener('fullscreenchange', updateAdaptiveLayout);
window.addEventListener('resize', updateAdaptiveLayout);

/* ── INICIO ─────────────────────────────────────────────────── */
updateAdaptiveLayout();
renderNode(menuTree);

/* ═══════════════════════════════════════════════════════════════
   DATOS + RENDER: ESTIBAS CONGELADAS
   ═══════════════════════════════════════════════════════════════ */
const estibasCongeladasData = {
  meses: [
    { mes:'Abr 24', valor:1456 },
    { mes:'May 24', valor:941  },
    { mes:'Jun 24', valor:1188 },
    { mes:'Jul 24', valor:1050 },
    { mes:'Ago 24', valor:1320 },
    { mes:'Sep 24', valor:1503 },
    { mes:'Oct 24', valor:1180 },
    { mes:'Nov 24', valor:1264 },
    { mes:'Dic 24', valor:1390 },
    { mes:'Ene 25', valor:1046 },
    { mes:'Feb 25', valor:1120 },
    { mes:'Mar 25', valor:874  },
  ],
};

function renderIndicadorEstibasCongeladas() {
  setHeader('INDICADORES');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'indicador-wrap';

  const data   = estibasCongeladasData.meses;
  const actual = data[data.length - 1];
  const prom   = Math.round(data.reduce((s,m)=>s+m.valor,0) / data.length);
  const max    = data.reduce((a,m) => m.valor>a.valor?m:a, data[0]);
  const min    = data.reduce((a,m) => m.valor<a.valor?m:a, data[0]);

  // Card resumen
  const card = document.createElement('div');
  card.className = 'indicador-card indicador-card-static';
  card.innerHTML = `
    <div class="indicador-card-header">
      <div class="indicador-card-title">
        <span class="indicador-badge" style="background:rgba(96,200,224,.15);color:#60c8e0;border-color:rgba(96,200,224,.3)">❄</span>
        ESTIBAS CONGELADAS — TUNELES
      </div>
      <span class="indicador-hint">Estibas que pasaron por túneles de congelamiento</span>
    </div>
    <div class="inegr-totales">
      <div class="inegr-total-item">
        <span class="inegr-total-label">Mes actual (${actual.mes})</span>
        <span class="inegr-total-val" style="color:#60c8e0">${actual.valor.toLocaleString('es-AR')}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Promedio 12m</span>
        <span class="inegr-total-val" style="color:#A78BFA">${prom.toLocaleString('es-AR')}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Máx (${max.mes})</span>
        <span class="inegr-total-val" style="color:#00A887">${max.valor.toLocaleString('es-AR')}</span>
      </div>
      <div class="inegr-total-sep"></div>
      <div class="inegr-total-item">
        <span class="inegr-total-label">Mín (${min.mes})</span>
        <span class="inegr-total-val" style="color:#F97316">${min.valor.toLocaleString('es-AR')}</span>
      </div>
    </div>`;
  wrap.appendChild(card);

  // Gráfico de línea mensual
  const chartSec = document.createElement('div');
  chartSec.className = 'indicador-mensual';
  chartSec.innerHTML = `
    <div class="indicador-mensual-title">📈 Estibas congeladas por mes — últimos 12 meses</div>
    <div class="inegr-chart-wrap" style="height:240px"><canvas id="estibasLineChart"></canvas></div>`;
  wrap.appendChild(chartSec);

  // Cards mensuales
  const mesGrid = document.createElement('div');
  mesGrid.className = 'indicador-mensual';
  mesGrid.innerHTML = `
    <div class="indicador-mensual-title">📅 Detalle mensual</div>
    <div class="indicador-mensual-grid">
      ${data.map((m,i) => {
        const isActual = i === data.length-1;
        const diffPct  = i===0 ? 0 : Math.round(((m.valor - data[i-1].valor)/data[i-1].valor)*100);
        const diffColor = diffPct>=0?'#00A887':'#DC2626';
        const diffStr  = i===0 ? '' : (diffPct>=0?'+':'')+diffPct+'%';
        return `
          <div class="ind-mes-card${isActual?' ind-mes-actual':''}">
            <div class="ind-mes-label">${m.mes}</div>
            <div class="ind-mes-pct" style="color:#60c8e0;font-size:1rem">${m.valor.toLocaleString('es-AR')}</div>
            <div class="ind-mes-bar-wrap">
              <div class="ind-mes-bar-fill" style="width:${Math.round((m.valor/max.valor)*100)}%;background:#60c8e0"></div>
            </div>
            <div class="ind-mes-detail" style="color:${diffColor}">${diffStr || '—'}</div>
          </div>`;
      }).join('')}
    </div>`;
  wrap.appendChild(mesGrid);

  menuGrid.appendChild(wrap);
  syncBackBtn();

  requestAnimationFrame(() => drawEstibasLine('estibasLineChart'));
}

function drawEstibasLine(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth  || 700;
  canvas.height = wrap.clientHeight || 240;
  const W = canvas.width, H = canvas.height;
  const PAD = { top:28, right:16, bottom:38, left:52 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top  - PAD.bottom;
  const ctx  = canvas.getContext('2d');
  const data = estibasCongeladasData.meses;
  const vals = data.map(m => m.valor);
  const n    = vals.length;
  const minV = Math.min(...vals) * 0.88;
  const maxV = Math.max(...vals) * 1.08;
  const range = maxV - minV;

  ctx.clearRect(0, 0, W, H);

  const xOf = i => PAD.left + (i / (n-1)) * chartW;
  const yOf = v => PAD.top  + chartH - ((v - minV) / range) * chartH;

  // Grid horizontal
  for (let i=0; i<=4; i++) {
    const v = minV + (range * i/4);
    const y = yOf(v);
    ctx.strokeStyle = 'rgba(255,255,255,.07)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left+chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.4)';
    ctx.font = '9px Segoe UI';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(v).toLocaleString('es-AR'), PAD.left-5, y+3);
  }

  // Area fill
  ctx.beginPath();
  ctx.moveTo(xOf(0), yOf(vals[0]));
  vals.forEach((v,i) => ctx.lineTo(xOf(i), yOf(v)));
  ctx.lineTo(xOf(n-1), PAD.top+chartH);
  ctx.lineTo(xOf(0),   PAD.top+chartH);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top+chartH);
  grad.addColorStop(0,   'rgba(96,200,224,.35)');
  grad.addColorStop(1,   'rgba(96,200,224,.02)');
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(xOf(0), yOf(vals[0]));
  vals.forEach((v,i) => ctx.lineTo(xOf(i), yOf(v)));
  ctx.strokeStyle = '#60c8e0';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Promedio dashed
  const prom = vals.reduce((s,v)=>s+v,0)/n;
  const promY = yOf(prom);
  ctx.strokeStyle = 'rgba(167,139,250,.45)';
  ctx.lineWidth = 1;
  ctx.setLineDash([5,5]);
  ctx.beginPath(); ctx.moveTo(PAD.left, promY); ctx.lineTo(PAD.left+chartW, promY); ctx.stroke();
  ctx.setLineDash([]);

  // Dots + valores
  vals.forEach((v,i) => {
    const x = xOf(i), y = yOf(v);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2*Math.PI);
    ctx.fillStyle = '#60c8e0';
    ctx.fill();
    ctx.strokeStyle = '#0f1e35';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // valor encima
    ctx.fillStyle = '#fff';
    ctx.font = (i===n-1?'bold ':'')+'9px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText(v.toLocaleString('es-AR'), x, y-10);
    // mes abajo
    ctx.fillStyle = 'rgba(255,255,255,.45)';
    ctx.font = '8px Segoe UI';
    ctx.fillText(data[i].mes.split(' ')[0], x, H-PAD.bottom+12);
  });
}

/* ═══════════════════════════════════════════════════════════════
   MÓDULO: FACTURACIÓN
   ═══════════════════════════════════════════════════════════════ */
function renderFacturacion() {
  setHeader('ADMINISTRACION');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  // Estado
  let seleccionados = new Set();
  let busqueda = '';

  // ── Fecha default: 1ro del mes actual hasta hoy ──────────────
  const hoy     = new Date();
  const primeroDeMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  const fmtDate = d => d.toISOString().split('T')[0];

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';

  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(249,115,22,.2);color:#F97316;border-color:rgba(249,115,22,.35)">FAC</span>
        FACTURACIÓN — RESÚMENES POR CLIENTE
      </div>
      <span class="indicador-hint">Seleccioná clientes, período y descargá los resúmenes</span>
    </div>

    <!-- ── BLOQUE 1: SELECCIÓN DE CLIENTES ── -->
    <div class="fact-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">👥</span>
        Clientes que operaron en el mes
        <span class="fact-sel-count" id="factSelCount">0 seleccionados</span>
        <button class="fact-sel-all-btn" id="factSelAll">Seleccionar todos</button>
        <button class="fact-sel-none-btn" id="factSelNone">Limpiar</button>
      </div>

      <div class="fact-search-wrap">
        <input class="fact-search" id="factSearch" type="text" placeholder="🔍  Buscar cliente..." autocomplete="off" />
      </div>

      <div class="fact-clients-grid" id="factClientsGrid">
        ${clientesOperaron.map((c, i) => `
          <button class="fact-client-chip" data-idx="${i}" data-name="${c.toLowerCase()}" title="${c}">
            <span class="fact-chip-check">✓</span>
            <span class="fact-chip-name">${c}</span>
          </button>`).join('')}
      </div>
    </div>

    <!-- ── BLOQUE 2: PERÍODO ── -->
    <div class="fact-section fact-period-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">📅</span>
        Período de facturación
      </div>
      <div class="fact-period-row">
        <div class="fact-date-group">
          <label class="fact-date-label">Desde</label>
          <input class="fact-date-input" id="factDesde" type="date" value="${fmtDate(primeroDeMes)}" />
        </div>
        <div class="fact-period-sep">→</div>
        <div class="fact-date-group">
          <label class="fact-date-label">Hasta</label>
          <input class="fact-date-input" id="factHasta" type="date" value="${fmtDate(hoy)}" />
        </div>
        <div class="fact-period-shortcuts">
          <button class="fact-shortcut-btn" data-range="mes">Mes actual</button>
          <button class="fact-shortcut-btn" data-range="mesant">Mes anterior</button>
          <button class="fact-shortcut-btn" data-range="trim">Trimestre</button>
          <button class="fact-shortcut-btn" data-range="anio">Año</button>
        </div>
      </div>
    </div>

    <!-- ── BLOQUE 3: DESCARGA ── -->
    <div class="fact-section fact-download-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">📄</span>
        Resúmenes a generar
        <span class="fact-hint-small" id="factResumenHint">Seleccioná al menos un cliente</span>
      </div>
      <div class="fact-download-row">
        <div class="fact-summary-preview" id="factSummaryPreview">
          <span class="fact-preview-empty">— sin clientes seleccionados —</span>
        </div>
        <button class="fact-download-btn" id="factDownloadBtn" disabled>
          ⬇ Descargar resúmenes
        </button>
      </div>
    </div>
  `;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  // ── Referencias ──────────────────────────────────────────────
  const grid      = wrap.querySelector('#factClientsGrid');
  const searchEl  = wrap.querySelector('#factSearch');
  const countEl   = wrap.querySelector('#factSelCount');
  const previewEl = wrap.querySelector('#factSummaryPreview');
  const dlBtn     = wrap.querySelector('#factDownloadBtn');
  const hintEl    = wrap.querySelector('#factResumenHint');
  const selAllBtn = wrap.querySelector('#factSelAll');
  const selNoneBtn= wrap.querySelector('#factSelNone');

  // ── Actualizar contador y preview ───────────────────────────
  const updateUI = () => {
    const n = seleccionados.size;
    countEl.textContent = n === 0 ? '0 seleccionados'
                        : n === 1 ? '1 seleccionado'
                        : `${n} seleccionados`;
    countEl.style.color = n > 0 ? '#36B0C9' : 'rgba(255,255,255,.4)';

    dlBtn.disabled = n === 0;
    hintEl.textContent = n === 0
      ? 'Seleccioná al menos un cliente'
      : `${n} resumen${n>1?'es':''} · período ${wrap.querySelector('#factDesde').value} → ${wrap.querySelector('#factHasta').value}`;
    hintEl.style.color = n > 0 ? '#00A887' : 'rgba(255,255,255,.35)';

    if (n === 0) {
      previewEl.innerHTML = '<span class="fact-preview-empty">— sin clientes seleccionados —</span>';
    } else {
      const names = [...seleccionados].map(i => clientesOperaron[i]);
      previewEl.innerHTML = names.map(name => `
        <div class="fact-preview-chip">
          <span class="fact-preview-name">${name}</span>
          <span class="fact-preview-period">${wrap.querySelector('#factDesde').value} → ${wrap.querySelector('#factHasta').value}</span>
        </div>`).join('');
    }
  };

  // ── Toggle chip ──────────────────────────────────────────────
  const toggleChip = (chip, idx) => {
    if (seleccionados.has(idx)) {
      seleccionados.delete(idx);
      chip.classList.remove('selected');
    } else {
      seleccionados.add(idx);
      chip.classList.add('selected');
    }
    updateUI();
  };

  grid.addEventListener('click', e => {
    const chip = e.target.closest('.fact-client-chip');
    if (!chip) return;
    toggleChip(chip, parseInt(chip.dataset.idx));
  });

  // ── Buscar ───────────────────────────────────────────────────
  searchEl.addEventListener('input', () => {
    busqueda = searchEl.value.toLowerCase().trim();
    grid.querySelectorAll('.fact-client-chip').forEach(chip => {
      chip.style.display = (!busqueda || chip.dataset.name.includes(busqueda)) ? '' : 'none';
    });
  });

  // ── Seleccionar / limpiar todos ──────────────────────────────
  selAllBtn.addEventListener('click', () => {
    grid.querySelectorAll('.fact-client-chip:not([style*="none"])').forEach(chip => {
      const idx = parseInt(chip.dataset.idx);
      seleccionados.add(idx);
      chip.classList.add('selected');
    });
    updateUI();
  });
  selNoneBtn.addEventListener('click', () => {
    seleccionados.clear();
    grid.querySelectorAll('.fact-client-chip').forEach(c => c.classList.remove('selected'));
    updateUI();
  });

  // ── Atajos de fecha ──────────────────────────────────────────
  wrap.querySelectorAll('.fact-shortcut-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.fact-shortcut-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const now   = new Date();
      const desde = wrap.querySelector('#factDesde');
      const hasta = wrap.querySelector('#factHasta');
      switch (btn.dataset.range) {
        case 'mes':
          desde.value = fmtDate(new Date(now.getFullYear(), now.getMonth(), 1));
          hasta.value = fmtDate(now);
          break;
        case 'mesant': {
          const pm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          desde.value = fmtDate(pm);
          hasta.value = fmtDate(new Date(now.getFullYear(), now.getMonth(), 0));
          break;
        }
        case 'trim':
          desde.value = fmtDate(new Date(now.getFullYear(), now.getMonth() - 2, 1));
          hasta.value = fmtDate(now);
          break;
        case 'anio':
          desde.value = fmtDate(new Date(now.getFullYear(), 0, 1));
          hasta.value = fmtDate(now);
          break;
      }
      updateUI();
    });
  });

  // Actualizar hint cuando cambian fechas
  wrap.querySelector('#factDesde').addEventListener('change', updateUI);
  wrap.querySelector('#factHasta').addEventListener('change', updateUI);

  // ── Botón descargar ──────────────────────────────────────────
  dlBtn.addEventListener('click', () => {
    const desde  = wrap.querySelector('#factDesde').value;
    const hasta  = wrap.querySelector('#factHasta').value;
    const names  = [...seleccionados].map(i => clientesOperaron[i]);

    // Simula descarga: muestra toast + abre URL del sistema por cliente
    const plural = names.length > 1 ? 'es' : '';
    showToast('Generando ' + names.length + ' resumen' + plural + '...');

    // En producción esto llamaría a la API real por cada cliente.
    // Por ahora abre el módulo de facturación del sistema.
    setTimeout(() => {
      openModule(`https://sistema.cinafrio.com/intranet/index.php/facturacion?desde=${desde}&hasta=${hasta}`);
    }, 800);
  });

  updateUI();
}

/* ═══════════════════════════════════════════════════════════════
   MÓDULO: REMITOS (igual a facturación, descarga remitos)
   ═══════════════════════════════════════════════════════════════ */
function renderRemitos() {
  setHeader('ADMINISTRACION');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  let seleccionados = new Set();
  const hoy          = new Date();
  const primeroDeMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  const fmtDate      = d => d.toISOString().split('T')[0];

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';
  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(167,139,250,.2);color:#A78BFA;border-color:rgba(167,139,250,.35)">REM</span>
        REMITOS — RESÚMENES POR CLIENTE
      </div>
      <span class="indicador-hint">Seleccioná clientes, período y descargá los remitos</span>
    </div>
    <div class="fact-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">👥</span>
        Clientes que operaron en el mes
        <span class="fact-sel-count" id="remSelCount">0 seleccionados</span>
        <button class="fact-sel-all-btn" id="remSelAll">Seleccionar todos</button>
        <button class="fact-sel-none-btn" id="remSelNone">Limpiar</button>
      </div>
      <div class="fact-search-wrap">
        <input class="fact-search" id="remSearch" type="text" placeholder="🔍  Buscar cliente..." autocomplete="off" />
      </div>
      <div class="fact-clients-grid" id="remClientsGrid">
        ${clientesOperaron.map((c, i) => `
          <button class="fact-client-chip" data-idx="${i}" data-name="${c.toLowerCase()}" title="${c}">
            <span class="fact-chip-check">✓</span>
            <span class="fact-chip-name">${c}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="fact-section fact-period-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">📅</span>
        Período
      </div>
      <div class="fact-period-row">
        <div class="fact-date-group">
          <label class="fact-date-label">Desde</label>
          <input class="fact-date-input" id="remDesde" type="date" value="${fmtDate(primeroDeMes)}" />
        </div>
        <div class="fact-period-sep">→</div>
        <div class="fact-date-group">
          <label class="fact-date-label">Hasta</label>
          <input class="fact-date-input" id="remHasta" type="date" value="${fmtDate(hoy)}" />
        </div>
        <div class="fact-period-shortcuts">
          <button class="fact-shortcut-btn" data-range="mes">Mes actual</button>
          <button class="fact-shortcut-btn" data-range="mesant">Mes anterior</button>
          <button class="fact-shortcut-btn" data-range="trim">Trimestre</button>
          <button class="fact-shortcut-btn" data-range="anio">Año</button>
        </div>
      </div>
    </div>
    <div class="fact-section fact-download-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">📄</span>
        Remitos a generar
        <span class="fact-hint-small" id="remHint">Seleccioná al menos un cliente</span>
      </div>
      <div class="fact-download-row">
        <div class="fact-summary-preview" id="remPreview">
          <span class="fact-preview-empty">— sin clientes seleccionados —</span>
        </div>
        <button class="fact-download-btn" id="remDownBtn" style="background:linear-gradient(135deg,#7C3AED,#5B21B6);box-shadow:0 6px 20px rgba(124,58,237,.3)" disabled>
          ⬇ Descargar remitos
        </button>
      </div>
    </div>`;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  const grid      = wrap.querySelector('#remClientsGrid');
  const searchEl  = wrap.querySelector('#remSearch');
  const countEl   = wrap.querySelector('#remSelCount');
  const previewEl = wrap.querySelector('#remPreview');
  const dlBtn     = wrap.querySelector('#remDownBtn');
  const hintEl    = wrap.querySelector('#remHint');

  const updateUI = () => {
    const n = seleccionados.size;
    countEl.textContent = n === 0 ? '0 seleccionados' : n === 1 ? '1 seleccionado' : n + ' seleccionados';
    countEl.style.color = n > 0 ? '#A78BFA' : 'rgba(255,255,255,.4)';
    dlBtn.disabled = n === 0;
    hintEl.textContent = n === 0 ? 'Seleccioná al menos un cliente'
      : n + ' remito' + (n>1?'s':'') + ' · ' + wrap.querySelector('#remDesde').value + ' → ' + wrap.querySelector('#remHasta').value;
    hintEl.style.color = n > 0 ? '#A78BFA' : 'rgba(255,255,255,.35)';
    if (n === 0) {
      previewEl.innerHTML = '<span class="fact-preview-empty">— sin clientes seleccionados —</span>';
    } else {
      previewEl.innerHTML = [...seleccionados].map(i =>
        '<div class="fact-preview-chip" style="background:rgba(124,58,237,.15);border-color:rgba(124,58,237,.3)">'
        + '<span class="fact-preview-name">' + clientesOperaron[i] + '</span>'
        + '<span class="fact-preview-period">' + wrap.querySelector('#remDesde').value + ' → ' + wrap.querySelector('#remHasta').value + '</span>'
        + '</div>'
      ).join('');
    }
  };

  grid.addEventListener('click', e => {
    const chip = e.target.closest('.fact-client-chip');
    if (!chip) return;
    const idx = parseInt(chip.dataset.idx);
    if (seleccionados.has(idx)) { seleccionados.delete(idx); chip.classList.remove('selected'); }
    else { seleccionados.add(idx); chip.classList.add('selected'); }
    updateUI();
  });

  searchEl.addEventListener('input', () => {
    const q = searchEl.value.toLowerCase().trim();
    grid.querySelectorAll('.fact-client-chip').forEach(c => {
      c.style.display = (!q || c.dataset.name.includes(q)) ? '' : 'none';
    });
  });

  wrap.querySelector('#remSelAll').addEventListener('click', () => {
    grid.querySelectorAll('.fact-client-chip:not([style*="none"])').forEach(c => {
      seleccionados.add(parseInt(c.dataset.idx)); c.classList.add('selected');
    });
    updateUI();
  });
  wrap.querySelector('#remSelNone').addEventListener('click', () => {
    seleccionados.clear();
    grid.querySelectorAll('.fact-client-chip').forEach(c => c.classList.remove('selected'));
    updateUI();
  });

  wrap.querySelectorAll('.fact-shortcut-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.fact-shortcut-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const now = new Date();
      const desde = wrap.querySelector('#remDesde');
      const hasta = wrap.querySelector('#remHasta');
      if (btn.dataset.range === 'mes') {
        desde.value = fmtDate(new Date(now.getFullYear(), now.getMonth(), 1)); hasta.value = fmtDate(now);
      } else if (btn.dataset.range === 'mesant') {
        desde.value = fmtDate(new Date(now.getFullYear(), now.getMonth()-1, 1));
        hasta.value = fmtDate(new Date(now.getFullYear(), now.getMonth(), 0));
      } else if (btn.dataset.range === 'trim') {
        desde.value = fmtDate(new Date(now.getFullYear(), now.getMonth()-2, 1)); hasta.value = fmtDate(now);
      } else {
        desde.value = fmtDate(new Date(now.getFullYear(), 0, 1)); hasta.value = fmtDate(now);
      }
      updateUI();
    });
  });

  wrap.querySelector('#remDesde').addEventListener('change', updateUI);
  wrap.querySelector('#remHasta').addEventListener('change', updateUI);

  dlBtn.addEventListener('click', () => {
    const plural = seleccionados.size > 1 ? 's' : '';
    showToast('Generando ' + seleccionados.size + ' remito' + plural + '...');
    setTimeout(() => openModule('https://sistema.cinafrio.com/intranet/index.php/facturacion/remitos'), 800);
  });

  updateUI();
}


/* ═══════════════════════════════════════════════════════════════
   MÓDULO: COMPRAS
   Datos persistidos en memoria durante la sesión
   ═══════════════════════════════════════════════════════════════ */

const comprasDB = {
  ordenes: [],
  nextNum: 1001,

  empresas: [
    'ARCOR S.A.', 'CINA S.R.L.', 'QUICKFOOD S.A.', 'MCCAIN ARGENTINA SA',
    'MINERVA FOODS', 'TERRAGENE S.A.', 'SAVAZ SRL', 'LA SIBILA SA',
    'HELACOR S.A.', 'RAFAELA ALIMENTOS S.A.', 'SUDAMERICANA DE LÁCTEOS S.A.',
    'LOGÍSTICA RR CONGELADOS SA', 'ULTRACONGELADOS ROSARIO', 'OTRA EMPRESA'
  ],
  destinos: [
    'Depósito Nacional', 'Depósito Fiscal', 'Sala de Máquinas',
    'Administración', 'RRHH', 'Mantenimiento', 'Portería', 'Logística'
  ],
  sectores: [
    'Logística', 'Administración', 'RRHH', 'Calidad', 'Mantenimiento',
    'Sala de Máquinas', 'Portería', 'Gerencia', 'Compras', 'IT'
  ],
  proveedores: [
    'Proveedor A - CUIT 20-12345678-9', 'Proveedor B - CUIT 30-87654321-0',
    'Distribuidora Norte SRL', 'Suministros del Sur S.A.',
    'Tech Solutions SA', 'Servicios Integrales SRL',
    'Materiales & Más SA', 'Importadora del Centro',
    'Logística Express SRL', 'Otro proveedor'
  ],

  ESTADOS: {
    BORRADOR:    { label: 'Borrador',          color: '#6B7280', icon: '📝' },
    PENDIENTE:   { label: 'Pendiente autorización', color: '#F97316', icon: '⏳' },
    EN_REVISION: { label: 'En revisión',        color: '#FACC15', icon: '🔄' },
    RECHAZADA:   { label: 'Rechazada',          color: '#DC2626', icon: '❌' },
    AUTORIZADA:  { label: 'Autorizada',         color: '#36B0C9', icon: '✅' },
    SIN_PROV:    { label: 'Esperando proveedor',color: '#A78BFA', icon: '🏭' },
    CONFIRMADA:  { label: 'Recepción confirmada', color: '#00A887', icon: '📦' },
    FACTURADA:   { label: 'Factura recibida',   color: '#4ade80', icon: '🧾' },
    ABONADA:     { label: 'Abonada',            color: '#86efac', icon: '💰' },
  }
};

function renderCompras() {
  setHeader('ADMINISTRACION');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';
  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(250,204,21,.15);color:#FACC15;border-color:rgba(250,204,21,.3)">OC</span>
        COMPRAS — ÓRDENES DE COMPRA
      </div>
      <span class="indicador-hint">Gestión completa del flujo de compras</span>
    </div>
    <div class="compras-actions-row">
      <button class="compras-main-btn compras-btn-nueva" id="btnNuevaOC">
        <span>＋</span> Emitir nueva orden de compra
      </button>
      <button class="compras-main-btn compras-btn-gestionar" id="btnGestionar">
        <span>📋</span> Gestionar órdenes
      </button>
    </div>`;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  wrap.querySelector('#btnNuevaOC').addEventListener('click',  () => renderNuevaOC());
  wrap.querySelector('#btnGestionar').addEventListener('click', () => renderGestionOC());
}

/* ── NUEVA ORDEN DE COMPRA ────────────────────────────────────── */
function renderNuevaOC(editData) {
  setHeader('COMPRAS');
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const esEdicion   = !!editData;
  const numOrden    = esEdicion ? editData.numero : comprasDB.nextNum;
  let   renglones   = esEdicion ? JSON.parse(JSON.stringify(editData.items)) : [{ desc:'', cant:1, precio:0 }];
  let   tieneProveedor = esEdicion ? editData.tieneProveedor : false;

  const opt = arr => arr.map(v => '<option value="' + v + '">' + v + '</option>').join('');

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';
  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(250,204,21,.15);color:#FACC15;border-color:rgba(250,204,21,.3)">OC</span>
        ${esEdicion ? 'EDITAR' : 'NUEVA'} ORDEN DE COMPRA
      </div>
      <button class="fact-sel-none-btn" id="ocBackBtn">← Volver</button>
    </div>

    <!-- Número + bloqueado -->
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">🔢</span> Datos de la orden</div>
      <div class="oc-fields-grid">
        <div class="oc-field-group">
          <label class="fact-date-label">N° de orden</label>
          <input class="fact-date-input oc-input-locked" value="OC-${numOrden}" readonly />
        </div>
        <div class="oc-field-group">
          <label class="fact-date-label">Empresa</label>
          <select class="oc-select" id="ocEmpresa">
            <option value="">— Seleccionar —</option>${opt(comprasDB.empresas)}
          </select>
        </div>
        <div class="oc-field-group">
          <label class="fact-date-label">Destino</label>
          <select class="oc-select" id="ocDestino">
            <option value="">— Seleccionar —</option>${opt(comprasDB.destinos)}
          </select>
        </div>
        <div class="oc-field-group">
          <label class="fact-date-label">Centro de costo / Sector</label>
          <select class="oc-select" id="ocSector">
            <option value="">— Seleccionar —</option>${opt(comprasDB.sectores)}
          </select>
        </div>
      </div>
    </div>

    <!-- Proveedor -->
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">🏭</span> Proveedor</div>
      <div class="oc-prov-row">
        <span class="fact-date-label" style="font-size:.8rem">¿Tengo proveedor definido?</span>
        <div class="oc-toggle-group">
          <button class="oc-toggle-btn${tieneProveedor ? '' : ' active'}" data-val="no" id="ocProvNo">NO</button>
          <button class="oc-toggle-btn${tieneProveedor ? ' active' : ''}" data-val="si" id="ocProvSi">SÍ</button>
        </div>
        <select class="oc-select oc-prov-select${tieneProveedor ? '' : ' hidden'}" id="ocProvSelect">
          <option value="">— Seleccionar proveedor —</option>${opt(comprasDB.proveedores)}
        </select>
      </div>
    </div>

    <!-- Detalle de compra -->
    <div class="fact-section">
      <div class="fact-section-title">
        <span class="fact-section-icon">📦</span> Detalle de la compra
        <button class="fact-sel-all-btn" id="ocAddRenglon" style="margin-left:auto">+ Agregar ítem</button>
      </div>
      <div class="oc-table-wrap">
        <table class="oc-table">
          <thead>
            <tr>
              <th class="oc-th-desc">Descripción</th>
              <th class="oc-th-num">Cantidad</th>
              <th class="oc-th-num">Precio unit. (sin IVA)</th>
              <th class="oc-th-num">Total</th>
              <th class="oc-th-del"></th>
            </tr>
          </thead>
          <tbody id="ocRenglones"></tbody>
          <tfoot>
            <tr class="oc-total-row">
              <td colspan="3" class="oc-total-label">TOTAL (sin IVA)</td>
              <td class="oc-total-val" id="ocTotal">$ 0,00</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Comentarios -->
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">💬</span> Comentarios</div>
      <textarea class="oc-textarea" id="ocComentarios" placeholder="Observaciones, referencias, condiciones especiales..." rows="3">${esEdicion ? (editData.comentarios||'') : ''}</textarea>
    </div>

    <!-- Botón solicitar -->
    <div class="fact-section" style="background:transparent;border:none;padding:4px 0">
      <button class="fact-download-btn oc-submit-btn" id="ocSubmitBtn">
        📨 Solicitar autorización
      </button>
    </div>`;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  // Restaurar valores si es edición
  if (esEdicion) {
    wrap.querySelector('#ocEmpresa').value = editData.empresa || '';
    wrap.querySelector('#ocDestino').value = editData.destino || '';
    wrap.querySelector('#ocSector').value  = editData.sector  || '';
    if (editData.proveedor) wrap.querySelector('#ocProvSelect').value = editData.proveedor;
  }

  // ── Renglones ─────────────────────────────────────────────────
  const tbody   = wrap.querySelector('#ocRenglones');
  const totalEl = wrap.querySelector('#ocTotal');

  const fmtPeso = n => '$ ' + parseFloat(n||0).toLocaleString('es-AR', {minimumFractionDigits:2, maximumFractionDigits:2});

  const recalcTotal = () => {
    let sum = 0;
    tbody.querySelectorAll('tr').forEach(tr => {
      const c = parseFloat(tr.querySelector('.oc-cant')?.value) || 0;
      const p = parseFloat(tr.querySelector('.oc-precio')?.value) || 0;
      sum += c * p;
      const tEl = tr.querySelector('.oc-row-total');
      if (tEl) tEl.textContent = fmtPeso(c * p);
    });
    totalEl.textContent = fmtPeso(sum);
  };

  const addRenglon = (item) => {
    const tr = document.createElement('tr');
    tr.className = 'oc-row';
    tr.innerHTML = `
      <td><input class="oc-input oc-desc" type="text" placeholder="Descripción del ítem" value="${item ? item.desc : ''}" /></td>
      <td><input class="oc-input oc-cant" type="number" min="1" value="${item ? item.cant : 1}" /></td>
      <td><input class="oc-input oc-precio" type="number" min="0" step="0.01" placeholder="0,00" value="${item ? item.precio : ''}" /></td>
      <td class="oc-row-total">${fmtPeso(item ? item.cant * item.precio : 0)}</td>
      <td><button class="oc-del-btn" title="Eliminar">✕</button></td>`;
    tr.querySelector('.oc-cant').addEventListener('input', recalcTotal);
    tr.querySelector('.oc-precio').addEventListener('input', recalcTotal);
    tr.querySelector('.oc-del-btn').addEventListener('click', () => {
      if (tbody.children.length > 1) { tr.remove(); recalcTotal(); }
    });
    tbody.appendChild(tr);
    recalcTotal();
  };

  renglones.forEach(r => addRenglon(r));
  wrap.querySelector('#ocAddRenglon').addEventListener('click', () => addRenglon(null));

  // ── Toggle proveedor ──────────────────────────────────────────
  const provSelect = wrap.querySelector('#ocProvSelect');
  wrap.querySelector('#ocProvNo').addEventListener('click', () => {
    tieneProveedor = false;
    wrap.querySelector('#ocProvNo').classList.add('active');
    wrap.querySelector('#ocProvSi').classList.remove('active');
    provSelect.classList.add('hidden');
  });
  wrap.querySelector('#ocProvSi').addEventListener('click', () => {
    tieneProveedor = true;
    wrap.querySelector('#ocProvSi').classList.add('active');
    wrap.querySelector('#ocProvNo').classList.remove('active');
    provSelect.classList.remove('hidden');
  });

  // ── Volver ────────────────────────────────────────────────────
  wrap.querySelector('#ocBackBtn').addEventListener('click', () => renderCompras());

  // ── Submit ────────────────────────────────────────────────────
  wrap.querySelector('#ocSubmitBtn').addEventListener('click', () => {
    const empresa = wrap.querySelector('#ocEmpresa').value;
    const destino = wrap.querySelector('#ocDestino').value;
    const sector  = wrap.querySelector('#ocSector').value;
    if (!empresa || !destino || !sector) {
      showToast('⚠ Completá empresa, destino y sector'); return;
    }
    // Recolectar ítems
    const items = [];
    let totalVal = 0;
    tbody.querySelectorAll('tr').forEach(tr => {
      const desc  = tr.querySelector('.oc-desc')?.value.trim();
      const cant  = parseFloat(tr.querySelector('.oc-cant')?.value) || 0;
      const precio= parseFloat(tr.querySelector('.oc-precio')?.value) || 0;
      if (desc) { items.push({ desc, cant, precio }); totalVal += cant * precio; }
    });
    if (!items.length) { showToast('⚠ Agregá al menos un ítem'); return; }

    const proveedor = tieneProveedor ? wrap.querySelector('#ocProvSelect').value : '';
    const comentarios = wrap.querySelector('#ocComentarios').value.trim();
    const now = new Date().toLocaleDateString('es-AR');

    if (esEdicion) {
      // Update existing
      const ord = comprasDB.ordenes.find(o => o.numero === numOrden);
      if (ord) {
        Object.assign(ord, { empresa, destino, sector, tieneProveedor, proveedor, items, totalVal, comentarios,
          estado: 'PENDIENTE', historial: [...(ord.historial||[]), { accion:'Reenviado a autorización', fecha: now, user:'agustin.barovero' }]
        });
      }
    } else {
      comprasDB.ordenes.push({
        numero: numOrden, empresa, destino, sector, tieneProveedor, proveedor,
        items, totalVal, comentarios, estado: 'PENDIENTE',
        fechaCreacion: now,
        historial: [{ accion:'Orden creada y enviada a autorización', fecha: now, user:'agustin.barovero' }]
      });
      comprasDB.nextNum++;
    }

    showToast('✅ OC-' + numOrden + ' enviada a autorización');
    setTimeout(() => renderGestionOC(), 600);
  });
}

/* ── GESTIÓN DE ÓRDENES ──────────────────────────────────────── */
function renderGestionOC() {
  setHeader('COMPRAS');
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const estados = comprasDB.ESTADOS;

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';

  const buildList = () => {
    const filas = comprasDB.ordenes.length === 0
      ? '<tr><td colspan="10" class="oc-empty">No hay órdenes de compra registradas</td></tr>'
      : comprasDB.ordenes.slice().reverse().map(o => {
          const est = estados[o.estado] || estados.BORRADOR;
          const tot = '$ ' + (o.totalVal||0).toLocaleString('es-AR', {minimumFractionDigits:2});
          return `<tr class="oc-list-row" data-num="${o.numero}">
            <td class="oc-td-num">OC-${o.numero}</td>
            <td class="oc-td-empresa">${o.empresa||'—'}</td>
            <td class="oc-td-dest">${o.destino||'—'}</td>
            <td class="oc-td-total">${tot}</td>
            <td class="oc-td-fecha">${o.fechaCreacion||'—'}</td>
            <td class="oc-td-nfact">${o.numFactura ? '<span class="oc-fact-num">' + o.numFactura + '</span>' : '<span class="oc-fact-empty">—</span>'}</td>
            <td class="oc-td-fecha">${o.fechaFactura ? o.fechaFactura.split('-').reverse().join('/') : '—'}</td>
            <td class="oc-td-venc${o.vencimientoPago && o.estado !== 'ABONADA' ? ' oc-td-venc-activo' : ''}">${o.vencimientoPago||'—'}</td>
            <td class="oc-td-estado">
              <span class="oc-estado-badge" style="color:${est.color};border-color:${est.color}40;background:${est.color}18">
                ${est.icon} ${est.label}
              </span>
            </td>
            <td class="oc-td-actions">
              <button class="oc-action-btn" data-action="ver" data-num="${o.numero}">Ver →</button>
            </td>
          </tr>`;
        }).join('');

    return `<table class="oc-table oc-list-table">
      <thead>
        <tr>
          <th>N° Orden</th><th>Empresa</th><th>Destino</th>
          <th>Total</th><th>Creación</th>
          <th>N° Factura</th><th>Fec. Factura</th><th>Vencimiento</th>
          <th>Estado</th><th></th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>`;
  };

  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(250,204,21,.15);color:#FACC15;border-color:rgba(250,204,21,.3)">OC</span>
        GESTIÓN DE ÓRDENES
      </div>
      <button class="compras-main-btn compras-btn-nueva" id="gcNewBtn" style="padding:8px 16px;font-size:.8rem">
        ＋ Nueva OC
      </button>
    </div>
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">📋</span>
        Todas las órdenes
        <span style="margin-left:auto;color:rgba(255,255,255,.4);font-weight:700">${comprasDB.ordenes.length} órdenes</span>
      </div>
      <div class="oc-table-wrap" id="gcListWrap">${buildList()}</div>
    </div>`;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  wrap.querySelector('#gcNewBtn').addEventListener('click', () => renderNuevaOC());

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const num = parseInt(btn.dataset.num);
    const ord = comprasDB.ordenes.find(o => o.numero === num);
    if (ord) renderDetalleOC(ord);
  });
}

/* ── DETALLE / FLUJO DE UNA ORDEN ────────────────────────────── */
function renderDetalleOC(ord) {
  setHeader('COMPRAS');
  menuGrid.className = '';
  menuGrid.innerHTML = '';

  const est    = comprasDB.ESTADOS[ord.estado] || comprasDB.ESTADOS.BORRADOR;
  const fmtP   = n => '$ ' + parseFloat(n||0).toLocaleString('es-AR', {minimumFractionDigits:2});
  const now    = () => new Date().toLocaleDateString('es-AR');

  const puedeAutorizar  = ['PENDIENTE','EN_REVISION'].includes(ord.estado);
  const puedeCargarProv = ord.estado === 'AUTORIZADA' && !ord.proveedor;
  const puedeFactura    = ord.estado === 'AUTORIZADA' && ord.proveedor;
  const puedeAbonar     = ord.estado === 'FACTURADA';

  const wrap = document.createElement('div');
  wrap.className = 'fact-wrap';

  wrap.innerHTML = `
    <div class="fact-header">
      <div class="fact-header-title">
        <span class="indicador-badge" style="background:rgba(250,204,21,.15);color:#FACC15;border-color:rgba(250,204,21,.3)">OC</span>
        OC-${ord.numero} — ${ord.empresa||'Sin empresa'}
        <span class="oc-estado-badge" style="color:${est.color};border-color:${est.color}40;background:${est.color}18;margin-left:8px">
          ${est.icon} ${est.label}
        </span>
      </div>
      <button class="fact-sel-none-btn" id="detBackBtn">← Volver</button>
    </div>

    <!-- Resumen -->
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">📄</span> Resumen de la orden</div>
      <div class="oc-fields-grid">
        <div class="oc-field-group"><label class="fact-date-label">Empresa</label><div class="oc-val">${ord.empresa||'—'}</div></div>
        <div class="oc-field-group"><label class="fact-date-label">Destino</label><div class="oc-val">${ord.destino||'—'}</div></div>
        <div class="oc-field-group"><label class="fact-date-label">Sector / CC</label><div class="oc-val">${ord.sector||'—'}</div></div>
        <div class="oc-field-group"><label class="fact-date-label">Proveedor</label><div class="oc-val">${ord.proveedor||'<span style="color:rgba(255,255,255,.35)">Sin proveedor</span>'}</div></div>
      </div>
      <table class="oc-table" style="margin-top:10px">
        <thead><tr><th class="oc-th-desc">Ítem</th><th class="oc-th-num">Cant.</th><th class="oc-th-num">P. Unit.</th><th class="oc-th-num">Total</th></tr></thead>
        <tbody>
          ${(ord.items||[]).map(i => `<tr class="oc-row">
            <td>${i.desc}</td><td>${i.cant}</td><td>${fmtP(i.precio)}</td><td>${fmtP(i.cant*i.precio)}</td>
          </tr>`).join('')}
        </tbody>
        <tfoot>
          <tr class="oc-total-row"><td colspan="3" class="oc-total-label">TOTAL (sin IVA)</td>
          <td class="oc-total-val">${fmtP(ord.totalVal)}</td></tr>
        </tfoot>
      </table>
      ${ord.comentarios ? '<div class="oc-comentario-box">💬 ' + ord.comentarios + '</div>' : ''}
    </div>

    <!-- Acciones según estado -->
    <div class="fact-section" id="detAcciones">
      <div class="fact-section-title"><span class="fact-section-icon">⚙</span> Acciones</div>

      ${puedeAutorizar ? `
        <div class="oc-accion-bloque">
          <textarea class="oc-textarea" id="detObs" placeholder="Observaciones del autorizador..." rows="2"></textarea>
          <div class="oc-accion-btns">
            <button class="fact-download-btn oc-btn-aprobar" data-act="aprobar">✅ Aprobar</button>
            <button class="fact-download-btn oc-btn-revision" data-act="revision">🔄 Pedir revisión</button>
            <button class="fact-download-btn oc-btn-rechazar" data-act="rechazar">❌ Rechazar</button>
          </div>
        </div>` : ''}

      ${puedeCargarProv ? `
        <div class="oc-accion-bloque">
          <div class="oc-comentario-box" style="margin-bottom:8px">
            🏭 Orden autorizada sin proveedor. Asigná uno para poder registrar la factura.
          </div>
          <label class="fact-date-label">Proveedor</label>
          <select class="oc-select" id="detProvSelect" style="margin-top:6px">
            <option value="">— Seleccionar proveedor —</option>
            ${comprasDB.proveedores.map(p => '<option value="' + p + '"' + (ord.proveedor===p?' selected':'') + '>' + p + '</option>').join('')}
          </select>
          <div class="oc-accion-btns" style="margin-top:10px">
            <button class="fact-download-btn oc-btn-aprobar" data-act="guardarProv">💾 Guardar proveedor</button>
          </div>
        </div>` : ''}


      ${puedeFactura ? `
        <div class="oc-accion-bloque">
          <div class="oc-comentario-box" style="margin-bottom:10px">
            ✅ Orden autorizada &nbsp;·&nbsp; Proveedor: ${ord.proveedor}
          </div>
          <div class="oc-fields-grid oc-fields-3col">
            <div class="oc-field-group">
              <label class="fact-date-label">N° de factura</label>
              <input class="oc-input" id="detNumFact" type="text" placeholder="ej. 0001-00012345" style="padding:9px 12px;font-size:.88rem;font-weight:800" />
            </div>
            <div class="oc-field-group">
              <label class="fact-date-label">Fecha de la factura</label>
              <input class="fact-date-input" id="detFechaFact" type="date" value="${new Date().toISOString().split('T')[0]}" />
            </div>
            <div class="oc-field-group">
              <label class="fact-date-label">Plazo de pago</label>
              <select class="oc-select" id="detPlazo">
                <option value="0">Contado</option>
                <option value="15">15 días</option>
                <option value="30">30 días</option>
                <option value="45">45 días</option>
                <option value="60">60 días</option>
                <option value="90">90 días</option>
              </select>
            </div>
          </div>
          <div class="oc-accion-btns" style="margin-top:10px">
            <button class="fact-download-btn" style="background:linear-gradient(135deg,#1A4E8A,#0E3060)" data-act="imprimir">🖨 Imprimir OC</button>
            <button class="fact-download-btn oc-btn-aprobar" data-act="recibirFactura">🧾 Registrar factura recibida</button>
          </div>
        </div>` : ''}

      ${puedeAbonar ? `
        <div class="oc-accion-bloque">
          <div class="oc-comentario-box">
            📅 Vencimiento: ${ord.vencimientoPago||'—'} &nbsp;|&nbsp; Plazo: ${ord.plazo||'—'}
          </div>
          <div class="oc-accion-btns" style="margin-top:10px">
            <button class="fact-download-btn oc-btn-aprobar" data-act="abonar">💰 Marcar como abonada</button>
          </div>
        </div>` : ''}

      ${['RECHAZADA','ABONADA'].includes(ord.estado) ? `
        <div class="oc-comentario-box" style="color:rgba(255,255,255,.55)">
          ${ord.estado === 'ABONADA' ? '💰 Orden abonada el ' + (ord.fechaAbono||'—') : '❌ Orden rechazada'}
        </div>` : ''}

      ${['PENDIENTE','EN_REVISION'].includes(ord.estado) ? `
        <div style="margin-top:8px">
          <button class="fact-sel-all-btn" data-act="editar">✏ Editar orden</button>
        </div>` : ''}
    </div>

    <!-- Historial -->
    <div class="fact-section">
      <div class="fact-section-title"><span class="fact-section-icon">📜</span> Historial</div>
      <div class="oc-historial" id="detHistorial">
        ${(ord.historial||[]).slice().reverse().map(h => `
          <div class="oc-hist-row">
            <span class="oc-hist-fecha">${h.fecha}</span>
            <span class="oc-hist-accion">${h.accion}</span>
            <span class="oc-hist-user">${h.user||''}</span>
            ${h.obs ? '<span class="oc-hist-obs">' + h.obs + '</span>' : ''}
          </div>`).join('')}
      </div>
    </div>`;

  menuGrid.appendChild(wrap);
  syncBackBtn();

  wrap.querySelector('#detBackBtn').addEventListener('click', () => renderGestionOC());

  wrap.addEventListener('click', e => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    const obs = wrap.querySelector('#detObs')?.value.trim();
    const n   = now();

    if (act === 'aprobar') {
      ord.estado = 'AUTORIZADA';
      ord.historial.push({ accion:'Aprobada — en espera de factura', fecha:n, user:'autorizador', obs });
      showToast('✅ Orden autorizada');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'revision') {
      ord.estado = 'EN_REVISION';
      ord.historial.push({ accion:'Enviada a revisión', fecha:n, user:'autorizador', obs });
      showToast('🔄 Enviada a revisión');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'rechazar') {
      ord.estado = 'RECHAZADA';
      ord.historial.push({ accion:'Rechazada', fecha:n, user:'autorizador', obs });
      showToast('❌ Orden rechazada');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'editar') {
      renderNuevaOC(ord);
    } else if (act === 'guardarProv') {
      const sel = wrap.querySelector('#detProvSelect')?.value;
      if (!sel) { showToast('⚠ Seleccioná un proveedor'); return; }
      ord.proveedor = sel; ord.tieneProveedor = true;
      ord.historial.push({ accion:'Proveedor asignado: ' + sel, fecha:n, user:'agustin.barovero' });
      showToast('🏭 Proveedor guardado — ya podés registrar la factura');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'imprimir') {
      showToast('🖨 Abriendo impresión...');
      setTimeout(() => window.print(), 600);
    } else if (act === 'confirmarRecep') {
      ord.estado = 'CONFIRMADA';
      ord.historial.push({ accion:'Recepción confirmada', fecha:n, user:'agustin.barovero' });
      showToast('📦 Recepción confirmada');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'recibirFactura') {
      const nf   = wrap.querySelector('#detNumFact')?.value.trim();
      const ff   = wrap.querySelector('#detFechaFact')?.value;
      const pl   = wrap.querySelector('#detPlazo')?.value;
      if (!nf) { showToast('⚠ Ingresá el N° de factura'); return; }
      if (!ff) { showToast('⚠ Indicá la fecha de la factura'); return; }
      ord.estado = 'FACTURADA';
      ord.numFactura = nf; ord.fechaFactura = ff; ord.plazo = pl;
      const dias = parseInt(pl)||0;
      const venc = new Date(ff);
      venc.setDate(venc.getDate() + dias);
      ord.vencimientoPago = dias === 0 ? 'Contado' : venc.toLocaleDateString('es-AR');
      ord.historial.push({ accion:'Factura N° ' + nf + ' registrada — vence ' + ord.vencimientoPago, fecha:n, user:'agustin.barovero' });
      showToast('🧾 Factura ' + nf + ' registrada');
      setTimeout(() => renderDetalleOC(ord), 400);
    } else if (act === 'abonar') {
      ord.estado = 'ABONADA';
      ord.fechaAbono = n;
      ord.historial.push({ accion:'Marcada como abonada', fecha:n, user:'agustin.barovero' });
      showToast('💰 Orden abonada');
      setTimeout(() => renderDetalleOC(ord), 400);
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   MÓDULO: CONTROL DE CALIDAD — CERTIFICADO DE TEMPERATURA
   Basado en formulario físico SENASA / CINA
   ═══════════════════════════════════════════════════════════════ */
function renderControlCertificado() {
  setHeader('CONTROL CERTIFICADO');
  setExpandedMode(true);
  showMetaPanel(false);
  menuGrid.className = '';

  const checkItems = [
    { id: 'condTransporte',   label: 'Cond. de Transporte',               opA: 'Aceptable',         opB: 'Inaceptable'      },
    { id: 'examOrgano',       label: 'Exámen Organoléptico',              opA: 'Aceptable',         opB: 'Inaceptable'      },
    { id: 'estadoEnvases',    label: 'Estado de los Envases',             opA: 'Aceptable',         opB: 'Inaceptable'      },
    { id: 'estadoTarimas',    label: 'Estado de las Tarimas',             opA: 'Aceptable',         opB: 'Inaceptable'      },
    { id: 'estadoSanitario',  label: 'Estado Sanitario del Transporte',   opA: 'Aceptable',         opB: 'Inaceptable'      },
    { id: 'estadoParedes',    label: 'Estado de las Paredes, Piso y Techo', opA: 'Aceptable',       opB: 'Inaceptable'      },
    { id: 'equipoFrio',       label: 'Funcionamiento del Equipo de Frío', opA: 'En funcionamiento', opB: 'Fuera de servicio' },
    { id: 'setPoint',         label: 'Set Point Equipo de Frío vs. Carga',opA: 'Correcto',          opB: 'Incorrecto'       },
  ];

  menuGrid.innerHTML = `
    <div class="cert-wrap">
      <div class="cert-header">
        <div class="cert-header-title">
          <span class="indicador-badge" style="background:rgba(0,168,135,.2);color:#00A887;border-color:rgba(0,168,135,.4)">QR</span>
          CONTROL DE CERTIFICADO — ESTIBA 65984-3
        </div>
        <span class="indicador-hint">Completá los datos del certificado de temperatura al momento de la recepción</span>
      </div>

      <!-- Temperatura certificado + Termómetro -->
      <div class="cert-section">
        <div class="cert-section-title">
          <span class="cert-section-icon">🌡</span> Temperatura y termómetro
        </div>
        <div class="cert-top-grid">
          <div class="cert-field-group">
            <label class="cert-label">Temperatura indicada en el certificado (°C)</label>
            <div class="cert-temp-input-wrap">
              <input class="cert-temp-input" id="certTemp" type="number" step="0.1" placeholder="ej. −18.5" />
              <span class="cert-temp-unit">°C</span>
            </div>
          </div>
          <div class="cert-field-group">
            <label class="cert-label">Termómetro N°</label>
            <input class="cert-text-input" id="certTermometro" type="text" placeholder="N° de termómetro" />
          </div>
        </div>
      </div>

      <!-- Checklist -->
      <div class="cert-section">
        <div class="cert-section-title">
          <span class="cert-section-icon">✅</span> Checklist de recepción
          <span class="cert-check-count" id="certCheckCount">0 / ${checkItems.length} completados</span>
        </div>
        <div class="cert-checklist" id="certChecklist">
          ${checkItems.map((item, idx) => `
            <div class="cert-check-row" id="row_${item.id}">
              <div class="cert-check-label">${idx + 1}. ${item.label}</div>
              <div class="cert-check-options">
                <button class="cert-opt-btn cert-opt-a" data-id="${item.id}" data-val="A">
                  <span class="cert-opt-icon">○</span> ${item.opA}
                </button>
                <button class="cert-opt-btn cert-opt-b" data-id="${item.id}" data-val="B">
                  <span class="cert-opt-icon">○</span> ${item.opB}
                </button>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Observaciones -->
      <div class="cert-section">
        <div class="cert-section-title"><span class="cert-section-icon">💬</span> Observaciones</div>
        <textarea class="oc-textarea" id="certObs" placeholder="Observaciones sobre el estado de la mercadería..." rows="3"></textarea>
      </div>

      <!-- Guardar -->
      <div class="cert-section" style="background:transparent;border:none;padding:4px 0">
        <button class="fact-download-btn cert-save-btn" id="certSaveBtn" disabled>
          💾 Guardar control de certificado
        </button>
      </div>
    </div>`;

  syncBackBtn();

  const selections = {};
  const total      = checkItems.length;
  const countEl    = document.getElementById('certCheckCount');
  const saveBtn    = document.getElementById('certSaveBtn');

  const updateCount = () => {
    const done = Object.keys(selections).length;
    countEl.textContent = done + ' / ' + total + ' completados';
    countEl.style.color = done === total ? '#00A887' : 'rgba(255,255,255,.4)';
    saveBtn.disabled = done < total;
  };

  document.getElementById('certChecklist').addEventListener('click', e => {
    const btn = e.target.closest('.cert-opt-btn');
    if (!btn) return;
    const id  = btn.dataset.id;
    const val = btn.dataset.val;
    selections[id] = val;

    // Toggle visual en la fila
    const row = document.getElementById('row_' + id);
    row.querySelectorAll('.cert-opt-btn').forEach(b => {
      b.classList.remove('selected-a', 'selected-b');
      b.querySelector('.cert-opt-icon').textContent = '○';
    });
    btn.classList.add(val === 'A' ? 'selected-a' : 'selected-b');
    btn.querySelector('.cert-opt-icon').textContent = '●';
    row.classList.add('row-done');

    updateCount();
  });

  saveBtn.addEventListener('click', () => {
    const temp    = document.getElementById('certTemp').value;
    const termom  = document.getElementById('certTermometro').value;
    if (!temp) { showToast('⚠ Ingresá la temperatura del certificado'); return; }

    // Verificar si hay inaceptables
    const inaceptables = checkItems.filter(item => selections[item.id] === 'B').map(i => i.label);
    if (inaceptables.length > 0) {
      showToast('⚠ Hay ' + inaceptables.length + ' ítem(s) inaceptable(s)');
    } else {
      showToast('✅ Control guardado — todos los ítems aceptables');
    }

    setTimeout(() => {
      historyStack.length = 0;
      renderContenedor6Detail();
    }, 800);
  });

  updateCount();
}

const PERFIL_PHOTO_B64 = 'data:image/jpeg;base64,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';

/* ═══════════════════════════════════════════════════════════════
   MÓDULO: PERFIL DE USUARIO — Agustín Barovero
   ═══════════════════════════════════════════════════════════════ */

const perfilData = {
  nombre:       'Agustín Barovero',
  usuario:      'agustin.barovero',
  documento:    'DNI 35.732.863',
  cuil:         '20-35732863-3',
  nacimiento:   '10/12/1990',
  nacionalidad: 'Argentina',
  sexo:         'Masculino',
  estadoCivil:  'Soltero',
  hijos:        0,
  direccion:    'Moreno 1494 7° A',
  localidad:    'Rosario',
  provincia:    'Santa Fe',
  codPostal:    '2000',
  pais:         'Argentina',
  telefonoFijo: '—',
  celular:      '03472-1555640',
  email:        'agustin.barovero@grupocina.com.ar',
  vencART:      '—',
  activo:       true,
  creado:       '06/12/2021',
  actualizado:  '18/03/2023',
  // Laboral
  sector:       'Logística',
  puesto:       'Supervisor de Depósito',
  categoria:    'Categoría 4',
  legajo:       'LG-306',
  ingreso:      '06/12/2021',
};

function renderPerfilUsuario(tab) {
  tab = tab || 'personal';
  setHeader('MI PERFIL');
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';
  syncBackBtn();

  const wrap = document.createElement('div');
  wrap.className = 'perfil-wrap';

  wrap.innerHTML = `
    <!-- HEADER PERFIL -->
    <div class="perfil-hero">
      <div class="perfil-photo-wrap">
        <img class="perfil-photo" src="${PERFIL_PHOTO_B64}" alt="Foto de perfil" />
        <span class="perfil-activo-dot" title="Activo"></span>
      </div>
      <div class="perfil-hero-info">
        <div class="perfil-nombre">${perfilData.nombre}</div>
        <div class="perfil-sub">
          <span class="perfil-badge-usuario">@${perfilData.usuario}</span>
          <span class="perfil-badge-puesto">${perfilData.puesto}</span>
          <span class="perfil-badge-legajo">Legajo ${perfilData.legajo}</span>
        </div>
        <div class="perfil-sector-line">
          <span class="perfil-sector-item">🏢 ${perfilData.sector}</span>
          <span class="perfil-sector-sep">·</span>
          <span class="perfil-sector-item">📋 ${perfilData.categoria}</span>
          <span class="perfil-sector-sep">·</span>
          <span class="perfil-sector-item">📅 Ingreso: ${perfilData.ingreso}</span>
        </div>
      </div>
      <span class="perfil-estado-badge ${perfilData.activo ? 'activo' : 'inactivo'}">
        ${perfilData.activo ? '● Activo' : '● Inactivo'}
      </span>
    </div>

    <!-- TABS -->
    <div class="perfil-tabs">
      <button class="perfil-tab ${tab==='personal'?'active':''}" data-tab="personal">Datos Personales</button>
      <button class="perfil-tab ${tab==='laboral'?'active':''}" data-tab="laboral">Datos Laborales</button>
      <button class="perfil-tab ${tab==='docs'?'active':''}" data-tab="docs">Documentos y Salud</button>
    </div>

    <!-- TAB: PERSONAL -->
    <div class="perfil-tab-content ${tab==='personal'?'':'hidden'}" data-content="personal">
      <div class="perfil-cards-grid">
        <div class="perfil-card">
          <div class="perfil-card-title">👤 Datos Personales</div>
          ${pRow('Documento',        perfilData.documento)}
          ${pRow('CUIL',             perfilData.cuil)}
          ${pRow('Fecha Nacimiento', perfilData.nacimiento)}
          ${pRow('Nacionalidad',     perfilData.nacionalidad)}
          ${pRow('Sexo',             perfilData.sexo)}
          ${pRow('Estado Civil',     perfilData.estadoCivil)}
          ${pRow('Cantidad Hijos',   perfilData.hijos)}
          ${pRow('Actualizado',      perfilData.actualizado)}
        </div>
        <div class="perfil-card">
          <div class="perfil-card-title">📍 Contacto y Domicilio</div>
          ${pRow('Dirección',        perfilData.direccion)}
          ${pRow('Localidad',        perfilData.localidad)}
          ${pRow('Provincia',        perfilData.provincia)}
          ${pRow('Cód. Postal',      perfilData.codPostal)}
          ${pRow('País',             perfilData.pais)}
          ${pRow('Teléfono Fijo',    perfilData.telefonoFijo)}
          ${pRow('Celular',          perfilData.celular)}
          ${pRow('Email',            perfilData.email)}
          ${pRow('Venc. ART',        perfilData.vencART)}
        </div>
      </div>
    </div>

    <!-- TAB: LABORAL -->
    <div class="perfil-tab-content ${tab==='laboral'?'':'hidden'}" data-content="laboral">
      <div class="perfil-cards-grid">
        <div class="perfil-card">
          <div class="perfil-card-title">🏢 Información Laboral</div>
          ${pRow('Legajo',       perfilData.legajo)}
          ${pRow('Sector',       perfilData.sector)}
          ${pRow('Puesto',       perfilData.puesto)}
          ${pRow('Categoría',    perfilData.categoria)}
          ${pRow('Fecha Ingreso',perfilData.ingreso)}
          ${pRow('Creado en sistema', perfilData.creado)}
        </div>
        <div class="perfil-card">
          <div class="perfil-card-title">📊 Indicadores</div>
          <div class="perfil-ind-grid">
            <div class="perfil-ind-item">
              <div class="perfil-ind-val" style="color:#00A887">3</div>
              <div class="perfil-ind-label">Años en empresa</div>
            </div>
            <div class="perfil-ind-item">
              <div class="perfil-ind-val" style="color:#36B0C9">4</div>
              <div class="perfil-ind-label">Categoría</div>
            </div>
            <div class="perfil-ind-item">
              <div class="perfil-ind-val" style="color:#A78BFA">0</div>
              <div class="perfil-ind-label">Ausencias mes</div>
            </div>
            <div class="perfil-ind-item">
              <div class="perfil-ind-val" style="color:#FACC15">Al día</div>
              <div class="perfil-ind-label">Estado ART</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB: DOCS -->
    <div class="perfil-tab-content ${tab==='docs'?'':'hidden'}" data-content="docs">
      <div class="perfil-cards-grid">
        <div class="perfil-card">
          <div class="perfil-card-title">📎 Documentos Personales</div>
          ${docRow('Scan Plano Casa', '—')}
          ${docRow('Scan CUIL', 'Cargado')}
          ${docRow('Scan DNI', 'Cargado')}
        </div>
        <div class="perfil-card">
          <div class="perfil-card-title">🏥 Salud y Habilitaciones</div>
          ${docRow('Carnet de Manipulación', 'Vencimiento: —')}
          ${docRow('Libreta Sanitaria', '—')}
          ${docRow('Último Examen Médico', '—')}
          ${docRow('Vacunación al día', '—')}
        </div>
      </div>
    </div>

    <!-- ACCIONES RÁPIDAS -->
    <div class="perfil-acciones">
      <div class="perfil-acciones-title">⚡ Acciones rápidas</div>
      <div class="perfil-acciones-grid">
        <button class="perfil-accion-btn" data-modal="domicilio">
          <span class="perfil-accion-icon">🏠</span>
          <span class="perfil-accion-label">Declarar cambio<br>de domicilio</span>
        </button>
        <button class="perfil-accion-btn" data-modal="telefono">
          <span class="perfil-accion-icon">📱</span>
          <span class="perfil-accion-label">Cambio de<br>teléfono celular</span>
        </button>
        <button class="perfil-accion-btn" data-modal="vacuna">
          <span class="perfil-accion-icon">💉</span>
          <span class="perfil-accion-label">Informar<br>vacunación</span>
        </button>
        <button class="perfil-accion-btn" data-modal="carnet">
          <span class="perfil-accion-icon">🪪</span>
          <span class="perfil-accion-label">Cargar carnet de<br>manipulación</span>
        </button>
        <button class="perfil-accion-btn" data-modal="estudios">
          <span class="perfil-accion-icon">🩺</span>
          <span class="perfil-accion-label">Cargar estudios<br>médicos</span>
        </button>
      </div>
    </div>

    <!-- MODAL OVERLAY -->
    <div class="perfil-modal-overlay hidden" id="perfilModalOverlay">
      <div class="perfil-modal" id="perfilModal"></div>
    </div>`;

  menuGrid.appendChild(wrap);

  // ── Tab switching ──────────────────────────────────────────────
  wrap.querySelectorAll('.perfil-tab').forEach(btn => {
    btn.addEventListener('click', () => renderPerfilUsuario(btn.dataset.tab));
  });

  // ── Modales acciones ──────────────────────────────────────────
  const overlay = wrap.querySelector('#perfilModalOverlay');
  const modal   = wrap.querySelector('#perfilModal');

  const modales = {
    domicilio: {
      title: '🏠 Declarar cambio de domicilio',
      body: `
        <div class="perfil-modal-fields">
          <div class="perfil-mf-group"><label>Nueva dirección</label><input class="perfil-mf-input" type="text" placeholder="Calle, número, piso..." /></div>
          <div class="perfil-mf-group"><label>Localidad</label><input class="perfil-mf-input" type="text" placeholder="Localidad" /></div>
          <div class="perfil-mf-group"><label>Provincia</label><input class="perfil-mf-input" type="text" placeholder="Provincia" /></div>
          <div class="perfil-mf-group"><label>Código Postal</label><input class="perfil-mf-input" type="text" placeholder="CP" /></div>
          <div class="perfil-mf-group"><label>Observaciones</label><textarea class="perfil-mf-textarea" placeholder="Motivo u observaciones..."></textarea></div>
        </div>`,
    },
    telefono: {
      title: '📱 Cambio de teléfono celular',
      body: `
        <div class="perfil-modal-fields">
          <div class="perfil-mf-group"><label>Teléfono actual</label><input class="perfil-mf-input" type="text" value="${perfilData.celular}" readonly style="opacity:.5" /></div>
          <div class="perfil-mf-group"><label>Nuevo número celular</label><input class="perfil-mf-input" type="tel" placeholder="ej. 0341-4123456" /></div>
          <div class="perfil-mf-group"><label>Confirmar nuevo número</label><input class="perfil-mf-input" type="tel" placeholder="Repetir número" /></div>
        </div>`,
    },
    vacuna: {
      title: '💉 Informar vacunación',
      body: `
        <div class="perfil-modal-fields">
          <div class="perfil-mf-group"><label>Tipo de vacuna</label>
            <select class="perfil-mf-select">
              <option>— Seleccionar —</option>
              <option>Hepatitis A</option><option>Hepatitis B</option><option>Fiebre Amarilla</option>
              <option>Tétanos</option><option>COVID-19</option><option>Gripe</option><option>Otra</option>
            </select>
          </div>
          <div class="perfil-mf-group"><label>Fecha de aplicación</label><input class="perfil-mf-input" type="date" /></div>
          <div class="perfil-mf-group"><label>N° de dosis</label>
            <select class="perfil-mf-select"><option>1° dosis</option><option>2° dosis</option><option>3° dosis / Refuerzo</option></select>
          </div>
          <div class="perfil-mf-group"><label>Adjuntar comprobante (opcional)</label>
            <label class="perfil-mf-file"><input type="file" accept="image/*,.pdf" style="display:none" /><span>📎 Seleccionar archivo</span></label>
          </div>
          <div class="perfil-mf-group"><label>Observaciones</label><textarea class="perfil-mf-textarea" placeholder="Observaciones..."></textarea></div>
        </div>`,
    },
    carnet: {
      title: '🪪 Cargar carnet de manipulación',
      body: `
        <div class="perfil-modal-fields">
          <div class="perfil-mf-group"><label>N° de carnet</label><input class="perfil-mf-input" type="text" placeholder="Número de carnet" /></div>
          <div class="perfil-mf-group"><label>Fecha de emisión</label><input class="perfil-mf-input" type="date" /></div>
          <div class="perfil-mf-group"><label>Fecha de vencimiento</label><input class="perfil-mf-input" type="date" /></div>
          <div class="perfil-mf-group"><label>Adjuntar imagen del carnet</label>
            <div class="perfil-mf-upload-row">
              <label class="perfil-mf-file"><input type="file" id="carnetFile" accept="image/*,.pdf" style="display:none" /><span>🖼 Desde archivo</span></label>
              <label class="perfil-mf-file perfil-mf-cam"><input type="file" id="carnetCam" accept="image/*" capture="environment" style="display:none" /><span>📷 Cámara</span></label>
            </div>
          </div>
          <div class="perfil-mf-group"><label>Observaciones</label><textarea class="perfil-mf-textarea" placeholder="Observaciones..."></textarea></div>
        </div>`,
    },
    estudios: {
      title: '🩺 Cargar estudios médicos',
      body: `
        <div class="perfil-modal-fields">
          <div class="perfil-mf-group"><label>Tipo de estudio</label>
            <select class="perfil-mf-select">
              <option>— Seleccionar —</option>
              <option>Examen de Ingreso</option><option>Examen ART</option><option>Examen Periódico</option>
              <option>Radiografía</option><option>Electrocardiograma</option><option>Análisis de sangre</option><option>Otro</option>
            </select>
          </div>
          <div class="perfil-mf-group"><label>Fecha del estudio</label><input class="perfil-mf-input" type="date" /></div>
          <div class="perfil-mf-group"><label>Institución / Médico</label><input class="perfil-mf-input" type="text" placeholder="Nombre del centro o profesional" /></div>
          <div class="perfil-mf-group"><label>Resultado / Diagnóstico</label>
            <select class="perfil-mf-select"><option>Apto</option><option>Apto con restricciones</option><option>No apto</option><option>Pendiente</option></select>
          </div>
          <div class="perfil-mf-group"><label>Adjuntar documento</label>
            <div class="perfil-mf-upload-row">
              <label class="perfil-mf-file"><input type="file" accept="image/*,.pdf" style="display:none" /><span>🖼 Desde archivo</span></label>
              <label class="perfil-mf-file perfil-mf-cam"><input type="file" accept="image/*" capture="environment" style="display:none" /><span>📷 Cámara</span></label>
            </div>
          </div>
          <div class="perfil-mf-group"><label>Observaciones</label><textarea class="perfil-mf-textarea" placeholder="Observaciones adicionales..."></textarea></div>
        </div>`,
    },
  };

  const openModal = (key) => {
    const m = modales[key];
    if (!m) return;
    modal.innerHTML = `
      <div class="perfil-modal-header">
        <div class="perfil-modal-title">${m.title}</div>
        <button class="perfil-modal-close" id="perfilModalClose">✕</button>
      </div>
      <div class="perfil-modal-body">${m.body}</div>
      <div class="perfil-modal-footer">
        <button class="perfil-modal-cancel" id="perfilModalCancel">Cancelar</button>
        <button class="fact-download-btn perfil-modal-save" style="padding:10px 24px;font-size:.85rem">💾 Guardar</button>
      </div>`;
    overlay.classList.remove('hidden');
    modal.querySelector('#perfilModalClose').onclick   = closeModal;
    modal.querySelector('#perfilModalCancel').onclick  = closeModal;
    modal.querySelector('.perfil-modal-save').onclick  = () => {
      showToast('✅ Información guardada correctamente');
      closeModal();
    };
    overlay.onclick = e => { if (e.target === overlay) closeModal(); };
  };

  const closeModal = () => overlay.classList.add('hidden');

  wrap.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });
}

function pRow(label, value) {
  return `<div class="perfil-row"><span class="perfil-row-label">${label}</span><span class="perfil-row-val">${value}</span></div>`;
}
function docRow(label, estado) {
  const ok = estado && estado !== '—' && !estado.includes('—');
  return `<div class="perfil-row">
    <span class="perfil-row-label"><span class="perfil-doc-icon">${ok ? '📄' : '📋'}</span> ${label}</span>
    <span class="perfil-row-val ${ok ? 'perfil-doc-ok' : 'perfil-doc-none'}">${estado}</span>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════
   MÓDULO: CARGAS — tabla diaria de movimientos
   ═══════════════════════════════════════════════════════════════ */

// Mapa de siglas y colores por cliente
const clienteSiglas = {
  'MINERVA FOODS':              { sigla: 'MF',  color: '#36B0C9' },
  'MINERVA ARGENTINA':          { sigla: 'MA',  color: '#5BA3C9' },
  'MINERVA BEEF':               { sigla: 'MB',  color: '#4A9CC0' },
  'QUICKFOOD':                  { sigla: 'QF',  color: '#F97316' },
  'ARCOR':                      { sigla: 'ARC', color: '#A78BFA' },
  'MCCAIN':                     { sigla: 'MC',  color: '#FACC15' },
  'HELACOR':                    { sigla: 'HEL', color: '#34D399' },
  'RAFAELA ALIMENTOS':          { sigla: 'RA',  color: '#60A5FA' },
  'SAVAZ':                      { sigla: 'SAV', color: '#FB923C' },
  'TERRAGENE':                  { sigla: 'TG',  color: '#C084FC' },
  'IPANCO':                     { sigla: 'IPA', color: '#2DD4BF' },
  'SUDAMERICANA':               { sigla: 'SL',  color: '#F472B6' },
  'LOGISTICA RR':               { sigla: 'LRR', color: '#94A3B8' },
  'ULTRACONGELADOS':            { sigla: 'UCR', color: '#38BDF8' },
  'ETHICAL':                    { sigla: 'EN',  color: '#86EFAC' },
  'GLUFREEZ':                   { sigla: 'GLU', color: '#FDE68A' },
  'HELADOS ESTHER':             { sigla: 'HE',  color: '#6EE7B7' },
  'KECLON':                     { sigla: 'KEC', color: '#FCA5A5' },
  'CINA':                       { sigla: 'CNA', color: '#00A887' },
  'CONGELADOS DEL SUR':         { sigla: 'CS',  color: '#818CF8' },
  'DROGUERIA':                  { sigla: 'DK',  color: '#E879F9' },
  'SEJAS':                      { sigla: 'SBF', color: '#D4A27F' },
  'LA SIBILA':                  { sigla: 'SIB', color: '#A3E635' },
  'FROILAN':                    { sigla: 'FRO', color: '#FBB6CE' },
};

function getClienteSigla(nombre) {
  if (!nombre) return null;
  const upper = nombre.toUpperCase();
  for (const [key, val] of Object.entries(clienteSiglas)) {
    if (upper.includes(key.toUpperCase())) return val;
  }
  // Fallback: primeras letras
  const words = nombre.trim().split(/\s+/).filter(w => w.length > 2);
  const sigla = words.slice(0, 3).map(w => w[0]).join('').toUpperCase();
  const hue   = [...nombre].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return { sigla: sigla || '?', color: 'hsl(' + hue + ',60%,65%)' };
}

// Datos de ejemplo (hoy: 13/03/2026) — en producción vendrían de la API
const cargasData = [
  { id:169772, tipo:'Entrada', box:'Box 13', tronera:null,           cargas:['69996','69997','69998'], estado:'En Planta',
    clientes:['MINERVA FOODS (CTRO. DE DIST.) AMBIENTE','MINERVA FOODS (CTRO. DE DIST.) ENFRIADO','MINERVA FOODS (CTRO. DE DIST.) CONGELADO'],
    responsable:'Santa Cruz', vehiculo:'MRI 414', acoplado:'PPX 621', planLlegada:'2026-03-13', llegada:'2026-03-13 01:37', movimiento:'', salida:'', ticketSalida:'', contenedor:'' },
  { id:169682, tipo:'Salida',  box:'Box 7 lib.', tronera:'Sur 2 lib.', cargas:['119016'], estado:'En Planta',
    clientes:['QUICKFOOD S.A. VEGETALES'],
    responsable:'Santa Cruz', vehiculo:'AC 646 PO', acoplado:'PFC 060', planLlegada:'2026-03-13', llegada:'2026-03-13 08:50', movimiento:'00:00 00:00', salida:'', ticketSalida:'', contenedor:'' },
  { id:169785, tipo:'Salida',  box:'Box 5',    tronera:null,           cargas:[], estado:'En Planta',
    clientes:[],
    responsable:'Santa Cruz', vehiculo:'AC 646 PO', acoplado:'PFC 060', planLlegada:'2026-03-13', llegada:'2026-03-13 08:38', movimiento:'', salida:'', ticketSalida:'', contenedor:'' },
  { id:169783, tipo:'Entrada', box:'Box 3',    tronera:null,           cargas:['70003'], estado:'En Planta',
    clientes:['MINERVA FOODS ( 1113 PLANTA VILLA MERCEDES )'],
    responsable:'Santa Cruz', vehiculo:'HVH 151', acoplado:'OMT 066', planLlegada:'2026-03-13', llegada:'2026-03-13 08:27', movimiento:'', salida:'', ticketSalida:'', contenedor:'' },
  { id:169750, tipo:'Entrada', box:'Box 2',    tronera:'Norte 1',      cargas:['68901'], estado:'Salida',
    clientes:['QUICKFOOD S.A. (MATERIA PRIMA)'],
    responsable:'Pérez', vehiculo:'KLM 872', acoplado:'ZZP 311', planLlegada:'2026-03-13', llegada:'2026-03-13 06:15', movimiento:'03:20 00:00', salida:'2026-03-13 09:35', ticketSalida:'T-4821', contenedor:'' },
  { id:169710, tipo:'Salida',  box:'Box 9',    tronera:'Sur 1',        cargas:['55200'], estado:'Salida',
    clientes:['ARCOR S.A.'],
    responsable:'Gómez', vehiculo:'FGA 100', acoplado:'LPO 555', planLlegada:'2026-03-13', llegada:'2026-03-13 04:00', movimiento:'04:10 00:00', salida:'2026-03-13 08:10', ticketSalida:'T-4810', contenedor:'' },
];

function renderCargas(fiscal) {
  const titulo = fiscal ? 'LOGÍSTICA FISCAL' : 'LOGÍSTICA NACIONAL';
  setHeader(titulo);
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';
  syncBackBtn();

  let fechaActual = new Date();
  let busqueda    = '';
  let filtroTipo  = 'Todos';

  const fmt        = d => d.toISOString().split('T')[0];
  const fmtDisplay = d => d.toLocaleDateString('es-AR', { day:'2-digit', month:'2-digit', year:'numeric' });

  const wrap = document.createElement('div');
  wrap.className = 'cargas-wrap';
  menuGrid.appendChild(wrap);

  const GRUPOS = [
    { key:'en-planta',   label:'En Planta',   estados:['En Planta'] },
    { key:'planificado', label:'Planificado',  estados:['Planificado','Pendiente'] },
    { key:'liberado',    label:'Liberado',     estados:['Salida'] },
  ];

  const estadoClass = e => e === 'En Planta' ? 'en-planta' : e === 'Salida' ? 'liberado' : 'planificado';

  const render = () => {
    const fechaStr = fmt(fechaActual);
    const todos = cargasData.filter(c => {
      const mF = c.planLlegada === fechaStr || (c.llegada && c.llegada.startsWith(fechaStr));
      const mB = !busqueda ||
        String(c.id).includes(busqueda) ||
        (c.vehiculo||'').toLowerCase().includes(busqueda) ||
        (c.acoplado||'').toLowerCase().includes(busqueda) ||
        (c.cargas||[]).some(x => x.includes(busqueda));
      const mT = filtroTipo === 'Todos' || c.tipo === filtroTipo;
      return mF && mB && mT;
    });

    // Agrupar
    const grupos = GRUPOS.map(g => ({
      ...g,
      items: todos.filter(c => g.estados.includes(c.estado))
    })).filter(g => g.items.length > 0);

    const thead = `<thead><tr>
      <th class="ct-tipo">Tipo</th>
      <th class="ct-num">N° Transp.</th>
      <th class="ct-box">Box</th>
      <th class="ct-tron">Tronera</th>
      <th class="ct-cargas">Cargas</th>
      <th class="ct-cli">Cliente</th>
      <th class="ct-resp">Resp.</th>
      <th class="ct-vehi">Vehículo</th>
      <th class="ct-acop">Acoplado</th>
      <th class="ct-fecha">Plan Llegada</th>
      <th class="ct-fecha">Llegada</th>
      <th class="ct-mov">T. Operación</th>
      <th class="ct-fecha">Salida</th>
      <th class="ct-ticket">Tck. Báscula</th>
      <th class="ct-acc">Acciones</th>
    </tr></thead>`;

    const tbody = grupos.map(g => {
      const sepRow = `<tr class="cargas-sep-row cargas-sep-${g.key}">
        <td colspan="15">
          <span class="cargas-sep-label cargas-estado-chip ${g.key}">${g.label}</span>
          <span class="cargas-sep-count">${g.items.length} registro${g.items.length!==1?'s':''}</span>
        </td>
      </tr>`;
      return sepRow + g.items.map(c => buildCargaRow(c, estadoClass(c.estado))).join('');
    }).join('');

    wrap.innerHTML = `
      <div class="cargas-toolbar">
        <div class="cargas-nav-group">
          <button class="cargas-nav-btn" id="cNavPrev">‹</button>
          <div class="cargas-fecha-display">${fmtDisplay(fechaActual)}</div>
          <button class="cargas-nav-btn" id="cNavNext">›</button>
          <button class="cargas-nav-btn cargas-nav-today" id="cNavLast">Hoy</button>
        </div>
        <div class="cargas-filter-group">
          <button class="cargas-filter-btn ${filtroTipo==='Todos'?'active':''}" data-tipo="Todos">Todos</button>
          <button class="cargas-filter-btn ${filtroTipo==='Entrada'?'active':''}" data-tipo="Entrada">Entrada</button>
          <button class="cargas-filter-btn ${filtroTipo==='Salida'?'active':''}" data-tipo="Salida">Salida</button>
        </div>
        <button class="cargas-nueva-btn" id="cNueva">＋ Nueva</button>
        <div class="cargas-search-wrap">
          <input class="cargas-search" id="cSearch" placeholder="🔍  N° Carga / Vehículo / Acoplado..." value="${busqueda}" />
        </div>
      </div>

      <div class="cargas-table-wrap">
        <table class="cargas-table">
          ${thead}
          <tbody>${todos.length === 0
            ? '<tr><td colspan="15" class="cargas-empty">No hay registros para esta fecha</td></tr>'
            : tbody}
          </tbody>
        </table>
      </div>

      <div class="cargas-footer">
        <span>${todos.length} registro${todos.length!==1?'s':''} · ${fmtDisplay(fechaActual)}</span>
        <span class="cargas-legend">
          <span class="cargas-estado-chip en-planta">En Planta</span>
          <span class="cargas-estado-chip planificado">Planificado</span>
          <span class="cargas-estado-chip liberado">Liberado</span>
        </span>
      </div>`;

    wrap.querySelector('#cNavPrev').onclick  = () => { fechaActual.setDate(fechaActual.getDate()-1); render(); };
    wrap.querySelector('#cNavNext').onclick  = () => { fechaActual.setDate(fechaActual.getDate()+1); render(); };
    wrap.querySelector('#cNavLast').onclick  = () => { fechaActual = new Date(); render(); };
    wrap.querySelectorAll('.cargas-filter-btn').forEach(btn => {
      btn.onclick = () => { filtroTipo = btn.dataset.tipo; render(); };
    });
    wrap.querySelector('#cSearch').oninput   = e => { busqueda = e.target.value.toLowerCase().trim(); render(); };
    wrap.querySelector('#cSearch').onkeydown = e => e.stopPropagation();
    wrap.querySelector('#cNueva').onclick    = () => showToast('Abriendo nueva carga...');
    wrap.querySelectorAll('[data-accion]').forEach(btn => {
      btn.onclick = () => {
        const accion = btn.dataset.accion, id = btn.dataset.id;
        if (accion === 'ver')    showToast('Abriendo carga #' + id);
        if (accion === 'editar') showToast('Editando carga #' + id);
        if (accion === 'horas')  showToast('Horas carga #' + id);
      };
    });
  };

  render();
}

function buildCargaRow(c, estClass) {
  // Tipo con icono
  const tipoBadge = c.tipo === 'Entrada'
    ? '<span class="ct-tipo-chip entrada">⬇ ENT</span>'
    : '<span class="ct-tipo-chip salida-t">⬆ SAL</span>';

  // Clientes como chips
  const clientesHTML = c.clientes.length === 0
    ? '<span class="ct-empty">—</span>'
    : c.clientes.map(cl => {
        const s = getClienteSigla(cl);
        return `<span class="ct-cli-chip" style="background:${s.color}1a;border-color:${s.color}60;color:${s.color}" title="${cl}">${s.sigla}</span>`;
      }).join('');

  // Cargas apiladas como chips
  const cargasHTML = c.cargas.length === 0
    ? '<span class="ct-empty">—</span>'
    : c.cargas.map(n => `<span class="ct-carga-chip">${n}</span>`).join('');

  // Box chip
  const boxHTML = c.box
    ? `<span class="ct-box-chip">${c.box}</span>`
    : '<span class="ct-empty">—</span>';

  // Tronera chip
  const tronHTML = c.tronera
    ? `<span class="ct-tron-chip">${c.tronera}</span>`
    : '<button class="ct-asignar-btn">⇄ Asignar</button>';

  // Fecha 2 niveles
  const fmtDT = s => {
    if (!s) return '<span class="ct-empty">—</span>';
    const d = s.slice(8,10) + '/' + s.slice(5,7);
    const t = s.length > 10 ? s.slice(11,16) : '';
    return `<span class="ct-dv-date">${d}</span>${t ? '<span class="ct-dv-time">' + t + '</span>' : ''}`;
  };
  const fmtDate = s => s
    ? `<span class="ct-dv-date">${s.slice(8,10)+'/'+s.slice(5,7)}</span>`
    : '<span class="ct-empty">—</span>';

  // Tiempo operación con semáforo
  let topHtml = '<span class="ct-empty">—</span>';
  let totalMin = 0;
  if (c.llegada && c.salida) {
    const ms = new Date(c.salida.replace(' ','T')) - new Date(c.llegada.replace(' ','T'));
    const hh = Math.floor(ms/3600000);
    const mm = Math.floor((ms%3600000)/60000);
    totalMin = hh*60 + mm;
    const txt = hh + 'h ' + String(mm).padStart(2,'0') + 'm';
    const dot = totalMin < 120 ? '🟢' : totalMin < 240 ? '🟡' : '🔴';
    topHtml = `<span class="ct-top-val">${dot} ${txt}</span>`;
  } else if (c.movimiento && c.movimiento !== '—') {
    topHtml = `<span class="ct-top-val">⚪ ${c.movimiento}</span>`;
  }

  return `<tr class="cr cr-${estClass}">
    <td class="ct-tipo">${tipoBadge}</td>
    <td class="ct-num"><span class="ct-transp">${c.id}</span></td>
    <td class="ct-box">${boxHTML}</td>
    <td class="ct-tron">${tronHTML}</td>
    <td class="ct-cargas"><div class="ct-stack">${cargasHTML}</div></td>
    <td class="ct-cli"><div class="ct-stack ct-stack-h">${clientesHTML}</div></td>
    <td class="ct-resp ct-txt">${c.responsable||'—'}</td>
    <td class="ct-vehi ct-bold">${c.vehiculo||'—'}</td>
    <td class="ct-acop ct-txt">${c.acoplado||'—'}</td>
    <td class="ct-f2">${fmtDate(c.planLlegada)}</td>
    <td class="ct-f2">${fmtDT(c.llegada)}</td>
    <td class="ct-top">${topHtml}</td>
    <td class="ct-f2">${fmtDT(c.salida)}</td>
    <td class="ct-ticket ct-txt">${c.ticketSalida||'—'}</td>
    <td class="ct-acc">
      <div class="ct-acc-row">
        <button class="ct-acc-btn ct-acc-ver"    data-accion="ver"    data-id="${c.id}">👁 Ver</button>
        <button class="ct-acc-btn ct-acc-oper"   data-accion="editar" data-id="${c.id}">✏ Editar</button>
        <button class="ct-acc-btn ct-acc-tiempo" data-accion="horas"  data-id="${c.id}">⏱</button>
      </div>
    </td>
  </tr>`;
}



/* ═══════════════════════════════════════════════════════════════
   MÓDULO: PRE-ENTRADAS / ENTRADAS / PRE-SALIDAS / SALIDAS
   ═══════════════════════════════════════════════════════════════ */

const logModData = {
  preEntradas: [
    { carga:169784, numero:70007, remito:'0213-00097339', referencia:'136658',
      clienteGrupo:'MINERVA FOOD ( 0013 PLANTA SWIFT )', contrato:'',
      certificados:['0013-A-050830','0013-A-050831','0013-A-050832','0013-A-050833','0013-A-050829'],
      destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 10:54:19' },
    { carga:169789, numero:70006, remito:'0008-00000983', referencia:'',
      clienteGrupo:'MINERVA FOODS (CTRO. DE DIST.) CONGELADO', contrato:'',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 08:42:17' },
    { carga:169788, numero:70005, remito:'0000-00000000', referencia:'',
      clienteGrupo:'LOGISTICA RR CONGELADOS SA', contrato:'',
      certificados:['5235-A-035689'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 08:42:08' },
    { carga:169787, numero:70004, remito:'0001-00022866', referencia:'',
      clienteGrupo:'IPANCO SRL DN', contrato:'',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'12/03/2026 09:11:00' },
    { carga:169783, numero:70003, remito:'0292-00004643', referencia:'4002',
      clienteGrupo:'MINERVA FOODS ( 1113 PLANTA VILLA MERCEDES )', contrato:'',
      certificados:['1113-A-022202','1113-A-022205','1113-A-022206'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'12/03/2026 07:30:00' },
  ],
  entradas: [
    { carga:169760, numero:69992, remito:'9998-00029264', referencia:'4902425241 / 4902425240 / 4902425129',
      clienteGrupo:'QUICKFOOD S.A. (SAN JORGE)', contrato:'',
      certificados:['1014-A-017507','1014-A-017508'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 11:50:45' },
    { carga:169762, numero:69990, remito:'0902-00013924', referencia:'',
      clienteGrupo:'RAFAELA ALIMENTOS S.A. (CASILDA)', contrato:'',
      certificados:['1399-A-017640'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'12/03/2026 09:00:00' },
    { carga:169751, numero:69989, remito:'3301-00010258', referencia:'4902420019/18/17',
      clienteGrupo:'QUICKFOOD S.A. (SAN JORGE)', contrato:'',
      certificados:['1014-A-017505','1014-A-017506'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'12/03/2026 08:00:00' },
    { carga:169747, numero:69988, remito:'0001-00022861', referencia:'',
      clienteGrupo:'IPANCO SRL DN', contrato:'',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'12/03/2026 07:45:00' },
    { carga:169736, numero:69985, remito:'0000-00000000', referencia:'',
      clienteGrupo:'LOGISTICA RR CONGELADOS SA', contrato:'',
      certificados:['5235-A-035659'], destino:'ARGENTINA', calidad:'Completo', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'12/03/2026 06:30:00' },
  ],
  preSalidas: [
    { carga:169791, numero:119163, remito:'0001-00094547', referencia:'',
      clienteGrupo:'QUICKFOOD S. A. VEGETALES', contrato:'',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 11:50:45' },
    { carga:169790, numero:119162, remito:'0000-00000000', referencia:'',
      clienteGrupo:'ETHICAL NUTRITION S. A.', contrato:'RETIRO LUNES 16/06 NOCHE',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 10:54:19' },
    { carga:169781, numero:119161, remito:'0001-00094544', referencia:'',
      clienteGrupo:'GLUFREEZ (PAULA SILNIK)', contrato:'AGRUPADOS',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 08:42:17' },
    { carga:169781, numero:119160, remito:'0001-00094544', referencia:'',
      clienteGrupo:'GLUFREEZ (PAULA SILNIK)', contrato:'ALIMENTOS SALUDABLES-ALBERDI 778 BIS',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Romero, Micaela Sabrina', modificadoFecha:'13/03/2026 08:42:08' },
    { carga:169778, numero:119158, remito:'0001-00094540', referencia:'',
      clienteGrupo:'ARCOR S.A.', contrato:'GRUPO ARCOR',
      certificados:['ARC-2026-001'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 07:30:00' },
  ],
  salidas: [
    { carga:169765, numero:119141, remito:'0001-00094534', referencia:'22743',
      clienteGrupo:'MINERVA FOODS BEEF CONGELADO', contrato:'TODO HELADO SRL - 5383',
      certificados:['3540-A-069819'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 08:04:58' },
    { carga:169765, numero:119138, remito:'0001-00094534', referencia:'22743',
      clienteGrupo:'SWIFT ARGENTINA S.A.', contrato:'PROMO BURGUER SRL - PARANA',
      certificados:[], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 08:00:56' },
    { carga:169765, numero:119137, remito:'0001-00094534', referencia:'22743',
      clienteGrupo:'SWIFT ARGENTINA S.A.', contrato:'LUSSA CRISTIAN ARIEL',
      certificados:['3540-A-000000'], destino:'ARGENTINA', calidad:'Pendiente', modificadoPor:'Pereyra, Arturo Pablo', modificadoFecha:'13/03/2026 08:00:00' },
    { carga:169750, numero:119130, remito:'0000-00000000', referencia:'',
      clienteGrupo:'QUICKFOOD S.A. (MATERIA PRIMA)', contrato:'',
      certificados:['1014-A-017501'], destino:'BRASIL', calidad:'Completo', modificadoPor:'Gómez, Laura', modificadoFecha:'12/03/2026 14:22:00' },
  ],
};

function renderLogMod(tipo, fiscal) {
  // tipo: 'preEntradas' | 'entradas' | 'preSalidas' | 'salidas'
  const titulos = { preEntradas:'PRE-ENTRADAS', entradas:'ENTRADAS', preSalidas:'PRE-SALIDAS', salidas:'SALIDAS' };
  const esSalida = tipo === 'preSalidas' || tipo === 'salidas';
  const esPre    = tipo === 'preEntradas' || tipo === 'preSalidas';

  setHeader(titulos[tipo] + (fiscal ? ' — FISCAL' : ''));
  setExpandedMode(false);
  showMetaPanel(true);
  menuGrid.className = '';
  menuGrid.innerHTML = '';
  syncBackBtn();

  const allData   = logModData[tipo] || [];
  const clientes  = [...new Set(allData.map(r => r.clienteGrupo))].sort();
  let filtros = { establecimiento:'', grupo:'', nroSalida:'', busqueda:'', modoGrupo: false };

  const wrap = document.createElement('div');
  wrap.className = 'logmod-wrap';
  menuGrid.appendChild(wrap);

  const nroLabel = esSalida ? 'N° Salida' : 'N° Entrada';
  const colLabel = esSalida ? 'Salida'    : 'Entrada';

  const render = () => {
    const datos = allData.filter(r => {
      const q = filtros.busqueda.toLowerCase();
      if (filtros.establecimiento && !r.clienteGrupo.toUpperCase().includes(filtros.establecimiento.toUpperCase())) return false;
      if (filtros.nroSalida && !String(r.numero).includes(filtros.nroSalida)) return false;
      if (q && ![r.remito, r.referencia, r.contrato, ...r.certificados].join(' ').toLowerCase().includes(q)) return false;
      return true;
    });

    const rows = datos.map((r, i) => `
      <tr class="logmod-row">
        <td class="logmod-text-sm">${r.carga}</td>
        <td><span class="logmod-num-bold">${r.numero}</span></td>
        <td class="logmod-text-sm">${r.remito}</td>
        <td class="logmod-text-sm">${r.referencia||''}</td>
        <td class="logmod-text-sm" style="font-weight:700">${r.clienteGrupo}</td>
        ${esSalida ? `<td class="logmod-text-sm">${r.contrato||''}</td>` : ''}
        <td>${r.certificados.length ? r.certificados.map(c => `<span class="logmod-cert-line">${c}</span>`).join('') : '<span class="logmod-text-muted">—</span>'}</td>
        ${esSalida ? `<td class="logmod-text-sm">${r.destino||''}</td>` : ''}
        <td style="text-align:center">
          <span class="logmod-cal-chip ${r.calidad==='Completo'?'completo':'pendiente'}">
            ${r.calidad==='Completo'?'✅':'❌'} ${r.calidad}
          </span>
        </td>
        ${!esSalida ? `<td class="logmod-text-muted">${r.modificadoFecha ? r.modificadoFecha.split(' ')[0] : ''}</td>` : ''}
        ${esSalida ? `<td>
          <span class="logmod-mod-name">${r.modificadoPor||''}</span>
          <span class="logmod-mod-date">${r.modificadoFecha||''}</span>
        </td>` : ''}
        <td>
          <div class="logmod-acc-row">
            <button class="logmod-acc-icon" data-idx="${i}" title="Ver">👁</button>
            ${esPre ? `<button class="logmod-acc-del" data-idx="${i}" title="Eliminar">🗑</button>` : ''}
          </div>
        </td>
      </tr>`).join('');

    wrap.innerHTML = `
      <!-- TOOLBAR OSCURO -->
      <div class="logmod-toolbar">
        <div class="logmod-filter-group">
          <span class="logmod-filter-label">Establecimiento</span>
          <div class="logmod-filter-row-inline">
            <input type="radio" class="logmod-radio" name="lmMode" ${!filtros.modoGrupo?'checked':''} id="rEstab">
            <select class="logmod-select" id="fEstab" ${filtros.modoGrupo?'disabled':''}>
              <option value="">Todos los Clientes</option>
              ${clientes.map(c => `<option value="${c}" ${filtros.establecimiento===c?'selected':''}>${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="logmod-filter-group">
          <span class="logmod-filter-label">Grupo</span>
          <div class="logmod-filter-row-inline">
            <input type="radio" class="logmod-radio" name="lmMode" ${filtros.modoGrupo?'checked':''} id="rGrupo">
            <select class="logmod-select" id="fGrupo" ${!filtros.modoGrupo?'disabled':''}>
              <option value="">Todos los Clientes</option>
              ${clientes.map(c => `<option value="${c}" ${filtros.grupo===c?'selected':''}>${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="logmod-filter-group">
          <span class="logmod-filter-label">${nroLabel}</span>
          <input type="text" class="logmod-input-sm" id="fNro" value="${filtros.nroSalida}" placeholder="">
        </div>
        <div class="logmod-filter-group logmod-search-group">
          <span class="logmod-filter-label">Buscar por:</span>
          <div class="logmod-search-row">
            <input type="text" class="logmod-input-search" id="fBusq" value="${filtros.busqueda}" placeholder="Remito / Referencia / Contrato / Certificado">
            <button class="logmod-search-btn" id="fBuscarBtn">🔍</button>
          </div>
        </div>
      </div>

      <!-- TABLA -->
      <div class="logmod-table-wrap">
        <table class="logmod-table">
          <thead><tr>
            <th style="width:68px">Carga</th>
            <th style="width:70px">${colLabel}</th>
            <th style="width:115px">Remito</th>
            <th style="width:160px">Número Referencia</th>
            <th>Cliente / Grupo</th>
            ${esSalida ? '<th style="width:180px">Contrato</th>' : ''}
            <th style="width:140px">Certificado</th>
            ${esSalida ? '<th style="width:90px">Destino</th>' : ''}
            <th style="width:118px;text-align:center">Control Calidad</th>
            ${!esSalida ? '<th style="width:96px">Movimiento</th>' : ''}
            <th style="width:160px">Modificado</th>
            <th style="width:70px;text-align:center">Acciones</th>
          </tr></thead>
          <tbody>
            ${datos.length === 0
              ? `<tr><td colspan="12" class="logmod-empty">No hay registros con los filtros aplicados</td></tr>`
              : rows}
          </tbody>
        </table>
      </div>
      <div class="logmod-footer">${datos.length} registro${datos.length!==1?'s':''}</div>`;

    // Eventos
    wrap.querySelector('#rEstab').onchange = () => { filtros.modoGrupo = false; render(); };
    wrap.querySelector('#rGrupo').onchange = () => { filtros.modoGrupo = true;  render(); };
    wrap.querySelector('#fEstab').onchange = e => { filtros.establecimiento = e.target.value; filtros.grupo=''; render(); };
    wrap.querySelector('#fGrupo').onchange = e => { filtros.grupo = e.target.value; filtros.establecimiento=''; render(); };
    const nroI = wrap.querySelector('#fNro');
    nroI.oninput = e => { filtros.nroSalida = e.target.value; render(); };
    nroI.onkeydown = e => e.stopPropagation();
    const busqI = wrap.querySelector('#fBusq');
    busqI.onkeydown = e => { e.stopPropagation(); if(e.key==='Enter'){ filtros.busqueda=busqI.value; render(); } };
    wrap.querySelector('#fBuscarBtn').onclick = () => { filtros.busqueda = busqI.value; render(); };
    wrap.querySelectorAll('[data-idx]').forEach(btn => {
      btn.onclick = () => {
        const r = datos[+btn.dataset.idx];
        if (btn.classList.contains('logmod-acc-del')) showToast('Eliminar registro #' + r.numero);
        else showToast('Abriendo #' + r.numero + ' — ' + r.clienteGrupo);
      };
    });
  };

  render();
}

/* ═══════════════════════════════════════════════════════════════
   CHECKLIST: EQUIPO EN MARCHA
   ═══════════════════════════════════════════════════════════════ */



/* ═══════════════════════════════════════════════════════════════
   MODAL: CAMBIO DE ESTADO DE EQUIPO (En marcha ↔ Falla / Cargando)
   ═══════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   CHECKLIST: EQUIPO EN MARCHA (estado Cargando → En marcha)
   2 pasos: ítems 1-9 → continuar → ítems 10-18 + horas iniciales
   ═══════════════════════════════════════════════════════════════ */
const CHECKLIST_ITEMS = [
  'Extinguidores 1 Kg.',
  'Espejos retrovisores',
  'Cinturón de seguridad',
  'Luz delantera',
  'Bocina',
  'Luz trasera – baliza',
  'Alarma acústica de retroceso',
  'Luz electroboscópica de retroceso',
  'Frenos en condiciones',
  'Dirección',
  'Mástil movimiento vertical',
  'Mástil movimiento en ángulo',
  'Apertura de uñas',
  'Desplazamiento lateral de horquilla',
  'Cadena del mástil',
  'Mangueras hidráulicas',
  'Asiento en condiciones',
  'Jaula y mallas de protección',
];

function openChecklistEnMarcha(index) {
  document.getElementById('checklistModal')?.remove();
  const item = dashboardEquipamientoData[index];
  const now  = new Date();
  const horaStr = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  const checks  = {};
  CHECKLIST_ITEMS.forEach((_, i) => { checks[i] = null; });
  let paso = 1;          // paso 1: ítems 0-8 | paso 2: ítems 9-17 + horas
  let horasIniVal = String(item.horasActual || item.horasBase || ''); // pre-cargado con horómetro actual

  const modal = document.createElement('div');
  modal.id = 'checklistModal';
  modal.className = 'chk-overlay';
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('chk-visible'));

  const render = () => {
    const start    = paso === 1 ? 0 : 9;
    const end      = paso === 1 ? 9 : 18;
    const items    = CHECKLIST_ITEMS.slice(start, end);
    const respondidos = Object.values(checks).filter(v => v !== null).length;
    const stepDone = items.every((_, i) => checks[start + i] !== null);
    const hayFalla = Object.values(checks).some(v => v === 'no');
    const horasOk  = paso === 2 ? horasIniVal.trim() !== '' : true;
    const puedeRetirar = paso === 2 && stepDone && horasOk;

    const rows = items.map((elem, i) => {
      const idx = start + i;
      return `<tr class="chk-row ${checks[idx]!==null?'chk-row-done':''} ${checks[idx]==='no'?'chk-row-falla':''}">
        <td class="chk-td-elem">${elem}</td>
        <td class="chk-td-opt"><button class="chk-opt-btn ${checks[idx]==='si'?'chk-sel-si':''}" data-idx="${idx}" data-val="si">✓</button></td>
        <td class="chk-td-opt"><button class="chk-opt-btn ${checks[idx]==='no'?'chk-sel-no':''}" data-idx="${idx}" data-val="no">✗</button></td>
      </tr>`;
    }).join('');

    modal.innerHTML = `
      <div class="chk-modal">
        <div class="chk-header">
          <div class="chk-header-info">
            <span class="chk-equip-badge">${item.tipo}</span>
            <span class="chk-equip-denom">${item.denominacion}</span>
            <span class="chk-paso-label">Paso ${paso} de 2</span>
          </div>
          <button class="chk-close" id="chkClose">✕</button>
        </div>

        <div class="chk-datos-grid">
          <div class="chk-dato"><span class="chk-dato-label">Equipo</span><span class="chk-dato-val">${item.denominacion}</span></div>
          <div class="chk-dato"><span class="chk-dato-label">Usuario</span><span class="chk-dato-val">${item.usuario}</span></div>
          <div class="chk-dato"><span class="chk-dato-label">Hora inicio</span><span class="chk-dato-val">${horaStr}</span></div>
          ${paso === 2 ? `
          <div class="chk-dato">
            <span class="chk-dato-label">Horómetro inicio <span style="color:#f87171">*</span></span>
            <input class="chk-input" type="number" id="chkHorasIni" value="${horasIniVal}" placeholder="${item.horasActual||item.horasBase}">
          </div>` : `<div class="chk-dato"></div>`}
          <div class="chk-dato chk-progress-inline">
            <span class="chk-dato-label">${respondidos}/18 completados</span>
            <div class="chk-progress-bar-bg">
              <div class="chk-progress-bar-fill" style="width:${Math.round(respondidos/18*100)}%"></div>
            </div>
          </div>
        </div>

        <div class="chk-list-wrap">
          <table class="chk-table">
            <thead><tr>
              <th class="chk-th-elem">Elemento (${paso === 1 ? '1–9' : '10–18'})</th>
              <th class="chk-th-si">SI</th>
              <th class="chk-th-no">NO</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>

        ${hayFalla ? '<div class="chk-alerta-falla">⚠️ Hay elementos con falla detectada</div>' : ''}

        <div class="chk-footer">
          <button class="chk-btn chk-btn-rechazar" id="chkRechazar">🚫 Rechazar uso</button>
          <button class="chk-btn chk-btn-falla"    id="chkFalla">⚠️ Informar falla</button>
          ${paso === 1
            ? `<button class="chk-btn chk-btn-retirar ${!stepDone?'chk-disabled':''}" id="chkContinuar" ${!stepDone?'disabled':''}>Continuar →</button>`
            : `<button class="chk-btn chk-btn-retirar ${!puedeRetirar?'chk-disabled':''}" id="chkRetirar" ${!puedeRetirar?'disabled':''}>✅ Retirar equipo</button>`
          }
        </div>
      </div>`;

    // Eventos botones de checklist
    modal.querySelectorAll('.chk-opt-btn').forEach(btn => {
      btn.onclick = e => {
        e.stopPropagation();
        const i = +btn.dataset.idx, v = btn.dataset.val;
        checks[i] = checks[i] === v ? null : v;
        if (paso === 2) horasIniVal = modal.querySelector('#chkHorasIni')?.value || horasIniVal;
        render();
      };
    });

    modal.querySelector('#chkClose').onclick    = close;
    modal.querySelector('#chkRechazar').onclick = () => { close(); showToast('🚫 Uso rechazado — ' + item.denominacion); };
    modal.querySelector('#chkFalla').onclick    = () => {
      dashboardEquipamientoData[index].estado = 'Falla';
      close(); renderDashboardEquipamiento();
      showToast('⚠️ Falla informada — ' + item.denominacion);
    };

    if (paso === 1) {
      modal.querySelector('#chkContinuar').onclick = () => { if (!stepDone) return; paso = 2; render(); };
    } else {
      const ini = modal.querySelector('#chkHorasIni');
      ini.oninput   = e => { horasIniVal = e.target.value; };
      ini.onkeydown = e => e.stopPropagation();
      modal.querySelector('#chkRetirar').onclick = () => {
        if (!puedeRetirar) { ini.classList.add('chk-required-err'); ini.focus(); return; }
        dashboardEquipamientoData[index].estado = 'En marcha';
        dashboardEquipamientoData[index].horasActual = parseInt(horasIniVal) || dashboardEquipamientoData[index].horasActual;
        close(); renderDashboardEquipamiento();
        showToast('✅ Equipo en marcha — ' + item.denominacion);
      };
    }
  };

  render();
  function close() { modal.classList.remove('chk-visible'); setTimeout(() => modal.remove(), 220); }
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
}

/* ═══════════════════════════════════════════════════════════════
   MODAL: CAMBIO DE ESTADO (En marcha / Falla → otro estado)
   Pide horas finales obligatorias
   ═══════════════════════════════════════════════════════════════ */
function openCambioEstadoEquipo(index) {
  document.getElementById('estadoEquipModal')?.remove();
  const item    = dashboardEquipamientoData[index];
  const esFalla = item.estado === 'Falla';
  const esMarcha= item.estado === 'En marcha';

  const modal = document.createElement('div');
  modal.id    = 'estadoEquipModal';
  modal.className = 'chk-overlay';
  document.body.appendChild(modal);

  let horasFinVal = '';
  let errMsg = '';

  const opciones = esFalla
    ? [{ val:'Cargando', label:'🔋 Pasar a Cargando', cls:'estado-btn-cargando' }]
    : esMarcha
    ? [
        { val:'Falla',    label:'⚠️ Informar falla',   cls:'estado-btn-falla'    },
        { val:'Cargando', label:'🔋 Pasar a Cargando', cls:'estado-btn-cargando' },
      ]
    : [];

  const badgeCls = item.estado === 'En marcha' ? 'state-running' : item.estado === 'Falla' ? 'state-falla' : 'state-cargando';

  const render = () => {
    modal.innerHTML = `
      <div class="chk-modal" style="height:auto;max-height:min(460px,90dvh)">
        <div class="chk-header">
          <div class="chk-header-info">
            <span class="chk-equip-badge">${item.tipo}</span>
            <span class="chk-equip-denom">${item.denominacion}</span>
          </div>
          <button class="chk-close" id="estClose">✕</button>
        </div>
        <div style="padding:14px 20px;display:flex;flex-direction:column;gap:12px;overflow-y:auto">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:.65rem;font-weight:800;color:rgba(255,255,255,.4);text-transform:uppercase">Estado actual</span>
            <span class="estado-equip-badge ${badgeCls}">${item.estado}</span>
            <span style="font-size:.72rem;color:rgba(255,255,255,.45);margin-left:4px">· ${item.usuario}</span>
          </div>
          <div class="chk-dato">
            <span class="chk-dato-label">Horómetro final <span style="color:#f87171">*</span></span>
            <input class="chk-input ${errMsg?'chk-required-err':''}" type="number" id="estHorasFin" value="${horasFinVal}" placeholder="${item.horasActual||item.horasBase}" />
            ${errMsg ? `<span style="font-size:.6rem;color:#f87171;font-weight:800;margin-top:2px">${errMsg}</span>` : ''}
          </div>
          <p style="font-size:.72rem;color:rgba(255,255,255,.42);margin:0;line-height:1.45">
            ${esFalla ? 'El equipo está en falla. Registrá las horas finales antes de cambiar el estado.' : 'Registrá las horas finales antes de cambiar el estado del equipo.'}
          </p>
          <div style="display:flex;flex-direction:column;gap:7px">
            ${opciones.map(o => `<button class="chk-btn ${o.cls}" data-val="${o.val}">${o.label}</button>`).join('')}
            <button class="chk-btn" style="background:rgba(107,114,128,.15);border-color:rgba(107,114,128,.28);color:rgba(255,255,255,.55)" id="estCancelar">Cancelar</button>
          </div>
        </div>
      </div>`;

    const inp = modal.querySelector('#estHorasFin');
    inp.oninput   = e => { horasFinVal = e.target.value; };
    inp.onkeydown = e => e.stopPropagation();
    setTimeout(() => inp.focus(), 80);

    modal.querySelector('#estClose').onclick    = close;
    modal.querySelector('#estCancelar').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    modal.querySelectorAll('[data-val]').forEach(btn => {
      btn.onclick = () => {
        horasFinVal = modal.querySelector('#estHorasFin').value.trim();
        if (!horasFinVal) { errMsg = 'Campo obligatorio'; render(); return; }
        const numFin = parseInt(horasFinVal);
        dashboardEquipamientoData[index].estado = btn.dataset.val;
        if (!isNaN(numFin)) dashboardEquipamientoData[index].horasActual = numFin;
        close(); renderDashboardEquipamiento();
        showToast(`✓ ${item.denominacion} → ${btn.dataset.val}`);
      };
    });
  };

  render();
  requestAnimationFrame(() => modal.classList.add('chk-visible'));
  function close() { modal.classList.remove('chk-visible'); setTimeout(() => modal.remove(), 220); }
}

/* ═══════════════════════════════════════════════════════════════
   URL ROUTING — hash-based: #equipo/SIL-1520
   ═══════════════════════════════════════════════════════════════ */

function navigateToEquipoByUrl(denominacion) {
  const idx = dashboardEquipamientoData.findIndex(e => e.denominacion === denominacion);
  if (idx === -1) { showToast('Equipo no encontrado: ' + denominacion); return; }
  const item = dashboardEquipamientoData[idx];
  // Navegar al dashboard primero (para que el back funcione bien)
  historyStack.push({ title: 'INICIO', children: [] });
  renderDashboardEquipamiento();
  // Abrir el modal correspondiente según estado
  setTimeout(() => {
    if (item.estado === 'Cargando')    openChecklistEnMarcha(idx);
    else if (item.estado === 'Falla' || item.estado === 'En marcha') openCambioEstadoEquipo(idx);
  }, 80);
}

function setEquipoHash(denominacion) {
  history.replaceState(null, '', '#equipo/' + encodeURIComponent(denominacion));
}

function clearEquipoHash() {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function handleHashRouting() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#equipo/')) {
    const denominacion = decodeURIComponent(hash.slice(8));
    navigateToEquipoByUrl(denominacion);
  }
}

// Hook into existing card click to set hash
(function patchCardClicks() {
  // Called after renderDashboardEquipamiento — we override via event delegation on menuGrid
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.equipment-card');
    if (!card) return;
    const editBtn = e.target.closest('.equipment-edit-btn');
    if (editBtn) return; // handled separately
    const idx = Array.from(card.parentElement.children).indexOf(card);
    if (idx >= 0 && dashboardEquipamientoData[idx]) {
      setEquipoHash(dashboardEquipamientoData[idx].denominacion);
    }
  });
  // Clear hash when modal closes (overlay click or close btn)
  document.addEventListener('click', function(e) {
    if (e.target.id === 'checklistModal' || e.target.id === 'estadoEquipModal') {
      clearEquipoHash();
    }
    if (e.target.id === 'chkClose' || e.target.id === 'estClose') {
      clearEquipoHash();
    }
  });
})();

// On load: check hash
window.addEventListener('DOMContentLoaded', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);

/* ═══════════════════════════════════════════════════════════
   PR-6 CONTRASTE DE TERMÓMETROS
   ═══════════════════════════════════════════════════════════ */

const PR6_CAMARAS = [
  'CÁMARA 1','CÁMARA 2','CÁMARA 3','CÁMARA 4',
  'CÁMARA 5','CÁMARA 6','CÁMARA 7','CÁMARA 8',
  'ANTECÁMARA','SALA DE MÁQUINAS','EXTERIOR'
];

const PR6_MAQUINISTAS = [
  'Aguirre, Carlos','Aguirre, Guillermo','Barovero, Agustín',
  'Benitez, Laura','Casalicchio, Iván','Centurion, Jesús',
  'Corvalan, Diego','Cristaldo, Gabriel','Díaz, Javier',
  'Duarte, Brandon','Escobar, Jonatan Gabriel','García, Mario',
  'Moyano, Jeremías','Ojeda, Daniela','Peña, Brandon',
  'Perichon, Alfredo','Pérez, Alan','Rodriguez, Ignacio',
  'Sanabria, Héctor','Stoffel, Diego','Suárez, Pedro','Torres, Ana'
];

/* Array mutable de registros guardados */
let pr6Registros = [];

function renderPR6Contraste() {
  const now = new Date();
  const fechaStr = now.toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'numeric'});
  const horaStr  = now.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const isoFecha = now.toISOString().split('T')[0];

  menuGrid.className = 'menu-grid';
  menuGrid.innerHTML = `
    <div class="pr6-wrap">

      <div class="pr6-topbar">
        <button class="mod-back-btn" id="pr6BackBtn">← Volver</button>
        <div class="pr6-topbar-center">
          <span class="pr6-badge-sm">PR-6</span>
          <span class="pr6-topbar-title">Contraste de Termómetros</span>
        </div>
        <button class="pr6-hist-trigger" id="pr6HistorialBtn">📋 Historial</button>
      </div>

      <div class="pr6-meta-row">
        <div class="pr6-meta-item">
          <div class="pr6-meta-label">📅 Fecha</div>
          <div class="pr6-meta-val" id="pr6FechaDisp">${fechaStr}</div>
          <input type="hidden" id="pr6Fecha" value="${isoFecha}">
        </div>
        <div class="pr6-meta-item">
          <div class="pr6-meta-label">🕐 Hora</div>
          <div class="pr6-meta-val" id="pr6HoraDisp">${horaStr}</div>
          <input type="hidden" id="pr6Hora" value="${horaStr}">
        </div>
        <div class="pr6-meta-item pr6-meta-grow">
          <div class="pr6-meta-label">👤 Maquinista <span style="color:#ef4444">*</span></div>
          <select class="pr6-sel-maq" id="pr6Maquinista">
            <option value="">— Seleccionar —</option>
            ${PR6_MAQUINISTAS.map(m => "<option value=\""+m+"\">"+m+"</option>").join('')}
          </select>
        </div>
        <div class="pr6-meta-item">
          <div class="pr6-meta-label">🔄 Turno <span style="color:#ef4444">*</span></div>
          <div class="pr6-turno-btns" id="pr6TurnoBtns">
            <button class="pr6-turno-btn" data-turno="MAÑANA">☀️ Mañana</button>
            <button class="pr6-turno-btn" data-turno="TARDE">🌤 Tarde</button>
            <button class="pr6-turno-btn" data-turno="NOCHE">🌙 Noche</button>
          </div>
          <input type="hidden" id="pr6Turno" value="">
        </div>
      </div>

      <div class="pr6-section">
        <div class="pr6-section-title"><span>❄️</span> Seleccioná las cámaras a contrastar</div>
        <div class="pr6-camara-chips" id="pr6CamaraChips">
          ${PR6_CAMARAS.map(c => "<button class=\"pr6-chip\" data-camara=\""+c+"\">"+c+"</button>").join('')}
        </div>
      </div>

      <div class="pr6-section">
        <div class="pr6-section-title"><span>🌡️</span> Datos de contraste</div>
        <div class="pr6-tabla-wrap">
          <div class="pr6-tabla-head">
            <div class="pr6-th pr6-th-cam">Cámara</div>
            <div class="pr6-th pr6-th-num">Ptr N°1</div>
            <div class="pr6-th pr6-th-num">Ptr N°2</div>
            <div class="pr6-th pr6-th-num">Temp PLC</div>
            <div class="pr6-th pr6-th-num">T. Puesta</div>
            <div class="pr6-th pr6-th-num">T. Alcanz.</div>
            <div class="pr6-th pr6-th-obs">Observaciones</div>
            <div class="pr6-th pr6-th-del"></div>
          </div>
          <div id="pr6Filas" class="pr6-filas-body"></div>
        </div>
        <div class="pr6-tabla-footer">
          <button class="pr6-add-row-btn" id="pr6AgregarBtn">＋ Agregar fila manual</button>
        </div>
      </div>

      <div class="pr6-actions">
        <button class="pr6-guardar-btn" id="pr6GuardarBtn">💾 Guardar Registro</button>
      </div>

    </div>
  `;

  document.getElementById('pr6TurnoBtns').addEventListener('click', e => {
    const btn = e.target.closest('[data-turno]');
    if (!btn) return;
    document.querySelectorAll('.pr6-turno-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('pr6Turno').value = btn.dataset.turno;
  });

  document.getElementById('pr6CamaraChips').addEventListener('click', e => {
    const chip = e.target.closest('[data-camara]');
    if (!chip) return;
    const camara = chip.dataset.camara;
    chip.classList.toggle('active');
    if (chip.classList.contains('active')) {
      pr6AgregarFila(camara);
    } else {
      pr6EliminarFilaPorCamara(camara);
    }
  });

  document.getElementById('pr6AgregarBtn').addEventListener('click', () => pr6AgregarFila(''));
  document.getElementById('pr6GuardarBtn').addEventListener('click', pr6GuardarRegistro);
  document.getElementById('pr6BackBtn').addEventListener('click', () => { historyStack.pop(); renderNode(historyStack.pop() || menuTree); });
  document.getElementById('pr6HistorialBtn').addEventListener('click', pr6MostrarHistorial);
}

function pr6AgregarFila(camaraVal) {
  const contenedor = document.getElementById('pr6Filas');
  const id = 'pr6f_' + Date.now() + '_' + Math.random().toString(36).slice(2,5);
  const div = document.createElement('div');
  div.className = 'pr6-row';
  div.id = id;
  div.dataset.camara = camaraVal || '';
  const camaraCell = camaraVal
    ? `<div class="pr6-td pr6-td-cam"><span class="pr6-cam-tag">${camaraVal}</span></div>`
    : `<div class="pr6-td pr6-td-cam"><select class="pr6-sel-inline pr6-sel-camara">${['<option value="">— Cámara —</option>',...PR6_CAMARAS.map(c=>`<option value="${c}">${c}</option>`)].join('')}</select></div>`;
  div.innerHTML = `
    ${camaraCell}
    <div class="pr6-td pr6-td-num"><input type="number" class="pr6-num-inp" placeholder="—" step="0.1"></div>
    <div class="pr6-td pr6-td-num"><input type="number" class="pr6-num-inp" placeholder="—" step="0.1"></div>
    <div class="pr6-td pr6-td-num"><input type="number" class="pr6-num-inp" placeholder="—" step="0.1"></div>
    <div class="pr6-td pr6-td-num"><input type="number" class="pr6-num-inp" placeholder="—" step="0.1"></div>
    <div class="pr6-td pr6-td-num"><input type="number" class="pr6-num-inp" placeholder="—" step="0.1"></div>
    <div class="pr6-td pr6-td-obs"><textarea class="pr6-obs-inp" placeholder="—" rows="1"></textarea></div>
    <div class="pr6-td pr6-td-del">
      <button class="pr6-del-btn" onclick="pr6EliminarFila('${id}','${(camaraVal||'').replace(/'/g,"\\'")}')">✕</button>
    </div>
  `;
  contenedor.appendChild(div);
  const ta = div.querySelector('textarea');
  ta.addEventListener('input', () => { ta.style.height='auto'; ta.style.height=ta.scrollHeight+'px'; });
}

function pr6EliminarFila(id, camaraVal) {
  const el = document.getElementById(id);
  if (el) {
    el.style.cssText += 'opacity:0;transform:translateX(10px);transition:all .18s;';
    setTimeout(() => el.remove(), 200);
  }
  if (camaraVal) {
    const chip = document.querySelector('.pr6-chip[data-camara="'+camaraVal+'"]');
    if (chip) chip.classList.remove('active');
  }
}

function pr6EliminarFilaPorCamara(camara) {
  const fila = document.querySelector('#pr6Filas .pr6-row[data-camara="'+camara+'"]');
  if (fila) {
    fila.style.cssText += 'opacity:0;transform:translateX(10px);transition:all .18s;';
    setTimeout(() => fila.remove(), 200);
  }
}

function pr6GuardarRegistro() {
  const maquinista = document.getElementById('pr6Maquinista').value;
  const turno      = document.getElementById('pr6Turno').value;
  const fecha      = document.getElementById('pr6Fecha').value;
  const hora       = document.getElementById('pr6Hora').value;
  if (!maquinista) { pr6MostrarToast('Seleccioná un maquinista', 'error'); return; }
  if (!turno)      { pr6MostrarToast('Seleccioná el turno', 'error'); return; }
  const filas = [...document.querySelectorAll('#pr6Filas .pr6-row')];
  if (!filas.length) { pr6MostrarToast('Agregá al menos una cámara', 'error'); return; }
  const detalles = filas.map(f => {
    const cam = f.dataset.camara || f.querySelector('.pr6-sel-camara')?.value || '';
    const nums = [...f.querySelectorAll('.pr6-num-inp')].map(i => i.value);
    const obs  = f.querySelector('textarea')?.value || '';
    return { camara:cam, ptr1:nums[0], ptr2:nums[1], plc:nums[2], puesta:nums[3], alcanzada:nums[4], obs };
  });
  if (detalles.some(d => !d.camara)) { pr6MostrarToast('Hay filas sin cámara seleccionada', 'error'); return; }
  pr6Registros.push({ maquinista, turno, fecha, hora, detalles, ts: new Date().toLocaleString('es-AR') });
  pr6MostrarToast('✓ Registro guardado correctamente', 'ok');
  setTimeout(() => renderPR6Contraste(), 1400);
}

function pr6MostrarHistorial() {
  if (!pr6Registros.length) { pr6MostrarToast('No hay registros guardados aún', 'info'); return; }
  const overlay = document.createElement('div');
  overlay.className = 'pr6-hist-overlay';
  overlay.innerHTML = `
    <div class="pr6-hist-modal">
      <div class="pr6-hist-header">
        <span>📋 Historial de registros</span>
        <button class="pr6-hist-close" id="pr6HClose">✕</button>
      </div>
      <div class="pr6-hist-body">
        ${pr6Registros.slice().reverse().map(r => `
          <div class="pr6-hist-card">
            <div class="pr6-hist-card-header">
              <span class="pr6-hist-maq">${r.maquinista}</span>
              <span class="pr6-hist-turno pr6-turno-${r.turno.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}">${r.turno}</span>
              <span class="pr6-hist-fecha">${r.fecha} ${r.hora}</span>
            </div>
            <table class="pr6-hist-table"><thead><tr>
              <th>Cámara</th><th>Ptr 1</th><th>Ptr 2</th><th>PLC</th><th>Puesta</th><th>Alcanz.</th><th>Obs.</th>
            </tr></thead><tbody>
              ${r.detalles.map(d=>`<tr>
                <td>${d.camara}</td><td>${d.ptr1||'—'}</td><td>${d.ptr2||'—'}</td>
                <td>${d.plc||'—'}</td><td>${d.puesta||'—'}</td><td>${d.alcanzada||'—'}</td>
                <td class="pr6-td-obs">${d.obs||'—'}</td>
              </tr>`).join('')}
            </tbody></table>
            <div class="pr6-hist-footer">Guardado: ${r.ts}</div>
          </div>`).join('')}
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target===overlay) overlay.remove(); });
  document.getElementById('pr6HClose').addEventListener('click', () => overlay.remove());
}

function pr6MostrarToast(msg, tipo='ok') {
  let t = document.querySelector('.pr6-toast');
  if (!t) { t = document.createElement('div'); t.className='pr6-toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'pr6-toast pr6-toast-'+tipo+' pr6-toast-show';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('pr6-toast-show'), 2800);
}
