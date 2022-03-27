
// Escribir una función recursiva que genere el fractal:

let repeticionesTotales = 3;
let tamanoStage = 600;

function generarCuadrado(w, x, y){
    const cuadrado = document.createElement('div');
    cuadrado.style.position = 'absolute';
    cuadrado.style.width = w + 'px';
    cuadrado.style.height = w + 'px';
    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';
    cuadrado.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.appendChild(cuadrado);
}
