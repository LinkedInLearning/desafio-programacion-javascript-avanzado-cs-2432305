class Nodo {
    constructor(valor, izquierda, derecha) {
        this.valor = valor;
        this.izquierda = izquierda;
        this.derecha = derecha;
    }
}

function invertir(nodo) {
    // Escribir el código para invertir el árbol binario.
};


const arbol = new Nodo(89, new Nodo(78, new Nodo(5), new Nodo(90)), new Nodo(4, new Nodo(9), new Nodo(0)));
console.log(arbol);
console.log(invertir(arbol));
