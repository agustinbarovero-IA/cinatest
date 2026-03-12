function renderDashboardLogisticaNacional(){

screenTitle.textContent = "DASHBOARD LOGISTICA NACIONAL";

menuGrid.innerHTML = "";

const div = document.createElement("div");

div.innerHTML = `
<div class="dashboard-card">
<div>CAMARA 1</div>
<div>150</div>
</div>
`;

menuGrid.appendChild(div);

}
