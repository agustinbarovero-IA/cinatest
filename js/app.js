const menuGrid =
document.getElementById("menuGrid");

const screenTitle =
document.getElementById("screenTitle");

const screenSubtitle =
document.getElementById("screenSubtitle");

function renderInicio(){

screenTitle.textContent=
"BIENVENIDOS AL SISTEMA DE GRUPO CINA";

menuGrid.innerHTML=`

<button onclick="renderMapaBoxes()">
Mapa de Boxes
</button>

`;

}

function renderMapaBoxes(){

menuGrid.innerHTML="";

boxesData.forEach(box=>{

const btn =
document.createElement("button");

btn.innerText =
box.titulo;

btn.onclick = ()=>{

if(box.numero==6){

renderContenedor6Detail();

}

};

menuGrid.appendChild(btn);

});

}

renderInicio();
