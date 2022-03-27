
// 1. Cargar el archivo JSON metricas.json
// 2. Mostrar tabla con el promedio de evaluación dividido por mes
// 3. Mostrar tabla con el promedio de evaluación dividido por localidad (cuidad or estado)

const tablaLocalidad = document.getElementById('tabla-localidad');
const tablaMes = document.getElementById('tabla-mes');

fetch('../metricas.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        const accuL = {};
        const accuM = {};

        for (const index in datos) {
            const eval = datos[index];

            if (!accuL[eval.estado]) {
                accuL[eval.estado] = { acc: 0, contador: 0 };
            }
            accuL[eval.estado].acc += parseInt(eval.evaluacion);
            accuL[eval.estado].contador += 1;

            const mes = eval.fecha.split('-').filter((val, i) => i !== 2).join('-');
            if (!accuM[mes]) {
                accuM[mes] = { acc: 0, contador: 0 };
            }
            accuM[mes].acc += parseInt(eval.evaluacion);
            accuM[mes].contador += 1;

        }

        for(const key of Object.keys(accuL)){
            tablaLocalidad.appendChild(generarFila(key, Math.floor(accuL[key].acc / accuL[key].contador)));
        }

        for(const key of Object.keys(accuM)){
            tablaMes.appendChild(generarFila(key, Math.floor(accuM[key].acc / accuM[key].contador)));
        }

        

    });



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