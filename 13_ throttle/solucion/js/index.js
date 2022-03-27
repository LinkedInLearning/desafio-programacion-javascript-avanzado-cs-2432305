// Aplicar la técnica de throttle para 
// limitar el número de llamadas a la función que invierte el texto:

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', () => {
    throttle(reversa, 300);
});

function reversa() {
    resultados.innerText = '';
    const valor = input.value;
    resultados.innerText = valor.split('').reverse().join('');
}

let idTimer;

function throttle(func, tiempo) {
    if (idTimer) {
        return;
    }
    idTimer = setTimeout(() => {
        func();
        idTimer = undefined;
    }, tiempo);
}
