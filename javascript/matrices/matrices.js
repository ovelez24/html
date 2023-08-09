const cars = ["saab", "Volvo", "BMW"];
//se [puede crear una matriz y luego proporcionar los elementos asi:]
const cars1 = [];
cars1[0] = "Saab";
cars1[1] = "Volvo";
cars1[2] = "BMW";
//tambien se puede crear una Array o matriz asi:
const cars2 = new Array("saab", "Volvo", "BMW");
// pero la opcion anterior no hay necesidad de hacerlo.
//cambio de un elemento de matriz
cars1[0] = "Opel";
//Convertir una matriz en una cadena
/* El metodo toString convierte una matriz en una cadena de valores
de matriz(separdos por comas)*/
const fruits = ["Banana", "Orange", "Apple", 'Mango'];
let length = fruits.length;//cuenta los elementos de la matriz
document.getElementById("demo").innerHTML = cars;
document.getElementById("demo1").innerHTML = cars1;
document.getElementById("demo2").innerHTML = cars2;
// acceso a los elementos de la matriz
document.getElementById("demo3").innerHTML = cars2[0];
document.getElementById("demo4").innerHTML = fruits.toString();
document.getElementById("demo6").innerHTML = fruits[fruits.length-1];//para acceder al ultimo elemento
document.getElementById("demo5").innerHTML = length;

/* una forma de recorrer una matriz es usando un for bucle:
*/

let text = "<ul>";
for(let i=0; i < length; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo7").innerHTML= text;
/*tambien se puede usar el array.foreach funcion asi: */

let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";
document.getElementById("demo8").innerHTML= text;
function myFunction(value) {
    text1 += "<li>" + value + "</li>";
}

/* Adicion de elementos de matriz

la forma mas facil de agregar un nuevo elemento a una matriz es usando el push() metodo:*/
function myFunction1() {
    fruits.push("lemon");
    fruits[fruits.length] = "pineapple";//tambien se puede usar length para agregar un elemento a una matriz
    document.getElementById("demo9").innerHTML= fruits;
}

/* Matrices asociativas

*/