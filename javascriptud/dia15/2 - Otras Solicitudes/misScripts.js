fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',//es un ajuste o modificacion
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripcion'
    })
})
.then(respuesta => respuesta.json())//esto simplifica un funcion anonima
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//Metodo DELETE
/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
    })
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


//metodo PATCH
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',//es un retoque en el servidor
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));*/