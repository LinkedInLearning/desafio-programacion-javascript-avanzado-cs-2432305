
// 1. Cargar el archivo JSON metricas.json
// 2. Mostrar tabla con el promedio de evaluación dividido por mes
// 3. Mostrar tabla con el promedio de evaluación dividido por localidad (cuidad or estado)

const tablaLocalidad = document.getElementById('tabla-localidad');
const tablaMes = document.getElementById('tabla-mes');



function generarFila(texto, valor) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = texto;
    const td2 = document.createElement('td');
    td2.innerText = valor;
    tr.appendChild(td1);
    tr.appendChild(td2);
    return tr;
}