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

const plantilla = { valor1: null, valor2: null, operador: null };

const handler = {
    get: (target, key)=>{
        if(key === 'valor1'){
            return input1.value === ''? 0 : parseInt(input1.value);
        }

        if(key === 'valor2'){
            return input2.value === ''? 0 : parseInt(input2.value);
        }
        return target[key];
    }
}

const proxy = new Proxy(plantilla, handler);

function calcularResultado() {
    let total;
    switch (proxy.operador) {
        case '+':
            total = proxy.valor1 + proxy.valor2;
            break;
        case '*':
            total = proxy.valor1 * proxy.valor2;
            break;
        case '-':
            total = proxy.valor1 - proxy.valor2;
            break;
        case '/':
            total = proxy.valor1 / proxy.valor2;
            break;
    }

    resultado.innerText = total;
}

function ejecutarOperacion(evento) {
    proxy.operador = evento.target.innerText;
    calcularResultado();
}
