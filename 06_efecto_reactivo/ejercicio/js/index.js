const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const division = document.getElementById('divisar');

const resultado = document.getElementById('resultado');

sumar.addEventListener('click', ejecutarOperacion);
restar.addEventListener('click', ejecutarOperacion);
multiplicar.addEventListener('click', ejecutarOperacion);
division.addEventListener('click', ejecutarOperacion);


// Escribir un Proxy que controle el acceso a las propiedades
// de un objeto que contenga la información una operación matemática.


function calcularResultado() {
    let total;
    switch (operador) {
        case '+':
            total = valor1 + valor2;
            break;
        case '*':
            total = valor1 * valor2;
            break;
        case '-':
            total = valor1 - valor2;
            break;
        case '/':
            total = valor1 / valor2;
            break;
    }

    resultado.innerText = total;
}

function ejecutarOperacion(evento) {
    calcularResultado();
}
