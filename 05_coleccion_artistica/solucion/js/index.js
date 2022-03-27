
// Cargar las imágenes contenidas en la constante rutasImagenes utilizando Promise.all
// Luego cargadas, agregarlas al div #contenedor

const rutasImagenes = imagenes;
const contenedor = document.getElementById('contenedor');

const promesas = [];
for(const img of rutasImagenes){
    promesas.push(fetch(img.src));
}

Promise.all(promesas).then(respuestas=> {
    Promise.all(respuestas.map(respuesta=> respuesta.blob()))
    .then(blobs=>{
        const fragmento = document.createDocumentFragment();
        for(const blob of blobs){
            const imgURL = URL.createObjectURL(blob);
            const imgHTML = document.createElement('img');
            imgHTML.src = imgURL;
            fragmento.appendChild(imgHTML);
        }
        return fragmento;
    }).then(fragmento=> contenedor.appendChild(fragmento));
});
