
// Escribir una función que determine si dos objetos son iguales:

function sonIguales(obj1, obj2) {
    
}
// Todos los console logs deben retornar true:
console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(sonIguales([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }]));