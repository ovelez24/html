//index.js
//Configurar con eExpressJS el servidor de la app
const express = require('express');//almacena el complemento express
const app = express();

app.set('port', 3000)
app.listen(3000)

//Llamar al componente de mysql
var mysql = require('mysql');

//Establecer los parámetros de la conexión
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mibasenueva'
});

//Nos conectamos con la base
connection.connect((err) => {
    if (err) {
      console.error('Error conectando a la base de datos:', err.message);
      return;
    }
    console.log('Conectado a la base de datos');
  });

//Agregar un nuevo registro
connection.query('INSERT INTO clientes VALUES (5, "Teofilo", 1, 123456, "Av. circunvalar 2528")', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM clientes', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Realizar modificacion de registro
connection.query('UPDATE clientes SET genero = 0, telefono = 324456 WHERE id_clientes = 3', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM clientes', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Eliminar un registro
connection.query('DELETE FROM clientes WHERE id_clientes = 5', function(error, resultados){
    if(error) throw error;
    console.log(resultados)
});

//Realizar la consulta a la tabla
connection.query('SELECT * FROM clientes', function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//Cerramos la conexión
connection.end();