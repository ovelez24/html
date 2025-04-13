let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);//esto esta atento a escuchar el evento

function cambiarCancion() {
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();
    let evento = new CustomEvent('cambioDeCancion');//evento personalizado
    audio.dispatchEvent(evento);//esto dispara el evento
}

audio.addEventListener('cambioDeCancion', mostrarCancion);//esto esta atento a escuchar el evento

function mostrarCancion() {
    console.log("La cancion actual es " + listaCanciones.value);
}