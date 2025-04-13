let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}

let miToken = 'este_es_mi_token';

//interceptor de solicitud

axios.interceptors.request.use(//son funciones que permiten modificar las solicitudes y las respuestas antes de que sean manejadas por el codigo que las va a llamar
    (config) => {
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

//interceptor de respuesta

axios.interceptors.response.use(//son funciones que permiten modificar las solicitudes y las respuestas antes de que sean manejadas por el codigo que las va a llamar

    (respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return Promise.reject(error)
    }
)



let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');


Promise.all([pedido1, pedido2, pedido3])
.then(([respuesta1, respuesta2, respuesta3]) => {
    //Codigo
})
.catch(error => {
    //manejar errores
})
