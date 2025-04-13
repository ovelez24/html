//Práctica: Solicitudes POST con Fetch 1

function agregarRegistro(nombre, datos) {
    fetch('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nombre,
            data: datos
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}


//Práctica: Otras Solicitudes HTTP con Fetch 1

function agregarRegistro(identificador, nombre) {
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nombre
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}


//Práctica: Otras Solicitudes HTTP con Fetch 2

function agregarRegistro(identificador) {
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'DELETE'
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}


//Práctica: Axios en Detalle 1

function consultarElementos() {
    axios.get('https://api.restful-api.dev/objects')
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.error(error))
}
