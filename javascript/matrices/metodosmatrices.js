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

//elementos cambiantes

/* cambiar es equivalente a hacer estallar, pero trabajando en el primer elemento en lugar del ultimo */

// el metodo shift() elimina el primer elemento de la matriz y cambia todos los demas elementos a un indice mas bajo


document.getElementById("demo8").innerHTML = fruits;
document.getElementById("demo9").innerHTML = fruits.shift();//devulve el valor del elemento cortado
document.getElementById("demo10").innerHTML = fruits;

//El metodo unshift() agrega un nuevo elemento a una matriz al principio y desplaza los elementos mas antiguos

document.getElementById("demo11").innerHTML = fruits;
document.getElementById("demo12").innerHTML = fruits.unshift("Lemon");//devuelve la nueva longitud de la matriz
document.getElementById("demo13").innerHTML = fruits;

// metodo concat() crea una nueva matriz fusionando o concatenando matrices existentes asi:

const myGirls = ["Cecile", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
document.getElementById("demo14").innerHTML = myChildren;
//el concat puede tomar cualquier numero de argumentos de matriz asi:
const arr3  = ["Robin", "Morgan"];
const myChildren1 = myGirls.concat(myBoys, arr3);
document.getElementById("demo15").innerHTML = myChildren1;

// el concat tambien puede tomar cadenas como argumentos

const myChildren2 = arr3.concat("Peter");
document.getElementById("demo16").innerHTML = myChildren2;

// Aplanando una matriz

/* Aplanar una matriz es el procesos de reducir la dimensionalidad de una matriz.

el metodo flat() crea una nueva matriz con elementos de submatrices concatenados a una profundidad especifica
*/

const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();
document.getElementById("demo17").innerHTML = newArr;

//Matrices de empalme y corte

// splice() metodo se puede usar para agregar nuevos elementos a una matriz

document.getElementById("demo18").innerHTML = fruits;
fruits.splice(2, 0, "guanabana", "kiwi");//el primer parametro (2) define la posicion en la que se deben agregar nuevos elementos, el segundo (0) define cuantos elementos se deben eliminar
document.getElementById("demo19").innerHTML = fruits;
let removed = fruits.splice(2,2, "guanabana", "kiwi")
document.getElementById("demo20").innerHTML = "items removidos: <br> " + removed;

//usando splice para eliminar elementos sin dejar agujeros en la matriz

document.getElementById("demo21").innerHTML = fruits;
fruits.splice(0, 1);//el primer parametro define la posicion en la que se deben agregar nuevos elementos en este caso (0) y el segundo define cuantos elementos se deben eliminar
document.getElementById("demo22").innerHTML = fruits;

//Metodo slice()

// el metodo slice corta una parte de una matriz en una nueva matriz asi:
//nota: el slice crea una nueva matriz y no elimina ningun elemento de la matriz origen

const citrus = fruits.slice(1);
document.getElementById("demo23").innerHTML = fruits + "<br><br>" + citrus;
const citrus1 = fruits.slice(3);
document.getElementById("demo24").innerHTML = fruits + "<br><br>" + citrus1;
/* el slice puede tomar dos argumentos como slice(1,3), luego el metodo 
selecciona elementos desde el argumento inicial y hasta el argumento final,
pero sin incluir. si se omite el argumento final, corta el resto de la matriz*/

const citrus2 = fruits.slice(1,3);
document.getElementById("demo25").innerHTML = fruits + "<br><br>" + citrus2;
