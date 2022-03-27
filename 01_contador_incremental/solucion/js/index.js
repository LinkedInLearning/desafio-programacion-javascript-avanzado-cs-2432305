
// Escribir una función clousure que 
// aumente un contador en 1 cada vez que la función se llame

function generarContador(valor){
    return ()=> valor += 1;
}

const contador = generarContador(1);

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());