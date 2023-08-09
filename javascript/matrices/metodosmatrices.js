/* El metodo length devuelve la longitud o tamaño de una matriz */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;

//metodo tostring() convierte una matriz en una cadena de valores de matriz separados por comas.
document.getElementById("demo1").innerHTML = fruits.toString();

//el metodo join() tambien une todos los elementos de la matriz en una cadena, se comporta como toString(), pero ademas se puede especificar el separador

document.getElementById("demo2").innerHTML = fruits.join(" * ");

// El metodo pop() elimina el ultimo elemento de una matriz

document.getElementById("demo3").innerHTML = fruits.pop();// muestra el valor que fue cortado de la matriz
document.getElementById("demo4").innerHTML = fruits;

//El metodo push() agrega un nuevo elemento a una matriz al final:

document.getElementById("demo5").innerHTML = fruits;
document.getElementById("demo7").innerHTML = fruits.push("kiwi");//muestra la nueva longitud de la matriz
fruits.push("Mango");
document.getElementById("demo6").innerHTML = fruits;



