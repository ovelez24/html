let socket = new WebSocket('ws://localhost:8080');//protocolo de comunicacion en tiempo real
let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById('mensajeChat');
    let elementoMensaje = document.createElement('p');//se crea un elemento html
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);
};

//el evento cuando se da click en el boton
botonEnviar.onclick = function() {
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
};

//evento que sirve para cuando se recibe un mensaje
socket.onmessage = function(event) {
    let mensaje = event.data;
    mostrarMensajes(mensaje);
};