
// Implementar un traductor de texto a código morse.

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', ()=>{
    resultados.innerText = '';
    const valor = input.value.toLowerCase().split('');
    const valorTraducido = valor.map(letra=> `${CODIGO_MORSE[letra]}` ?? letra).join('');
    resultados.innerText = valorTraducido;
});
