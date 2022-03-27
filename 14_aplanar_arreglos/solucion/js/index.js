// Implementar solución para aplanar el arreglo:

const arreglo = [
    [1, 2],
    [3, [7, 8, [90, 2, 13]]],
    [5, [7, 8, 9]],
    [10, 11, 12, [7, 8, [90, 2, 13]], 14, 15]
];

const simple = arreglo.flat(3);
console.log(simple);

const arregloPlano = [];

function aplanar(arr){
    for(const el of arr){
        if(Array.isArray(el)){
            aplanar(el);
        }else{
            arregloPlano.push(el);
        }
    }
}
aplanar(arreglo);
console.log(arregloPlano);