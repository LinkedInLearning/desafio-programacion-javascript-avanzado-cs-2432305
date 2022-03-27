// Crear una librearía de utilidad utilizando el patrón Universal Module Definition (UMD)
// https://github.com/umdjs/umd

(function(nombreGlobal, root, factoria){
    root[nombreGlobal] = factoria();
}('$$', this, function(){
    return{
        saludar: ()=> 'Hola cómo estás?',
        sumar: (a, b)=> a + b,
    }
}));

console.log($$.saludar());
console.log($$.sumar(1, 2));