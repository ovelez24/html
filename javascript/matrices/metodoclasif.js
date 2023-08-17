// Matrices de clasificacion

// El sort() método ordena una matriz alfabéticamente:

const fruits = ["Bananas", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
fruits.sort();
document.getElementById("demo1").innerHTML = fruits;

// El reverse() método invierte los elementos en una matriz
// Puede usarlo para ordenar una matriz en orden descendente:

fruits.reverse();
document.getElementById("demo2").innerHTML = fruits;

/* Clasificación numérica

De forma predeterminada, la sort() función ordena los valores como cadenas .

Esto funciona bien para cadenas ("Apple" viene antes de "Banana").

Sin embargo, si los números se ordenan como cadenas, "25" es mayor que "100", porque "2" es mayor que "1".

Debido a esto, el sort() método producirá un resultado incorrecto al ordenar números.

Puede solucionar esto proporcionando una función de comparación asi: */

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo3").innerHTML = points + " sin el sort";
points.sort(function(a, b) { return a - b}); 
document.getElementById("demo4").innerHTML = points + " con el sort ordenando los numeros con una funcion en orden ascendente ";
points.sort(function(a, b) { return b - a}); 
document.getElementById("demo5").innerHTML = points + " con el sort ordenando los numeros con una funcion en orden descendiente";

/* La función de comparación
El propósito de la función de comparación es definir un orden de clasificación alternativo.

La función de comparación debe devolver un valor negativo, cero o positivo, según los argumentos:

function(a, b){return a - b}
Cuando la sort()función compara dos valores, envía los valores a la función de comparación y ordena los valores según el valor devuelto (negativo, cero, positivo).

Si el resultado es negativo, ase ordena antes b.

Si el resultado es positivo, bse ordena antes a.

Si el resultado es 0, no se realizan cambios en el orden de clasificación de los dos valores.

Ejemplo:

La función de comparación compara todos los valores de la matriz, dos valores a la vez (a, b).

Al comparar 40 y 100, el sort()método llama a la función de comparación (40, 100).

La función calcula 40 - 100 (a - b)y, dado que el resultado es negativo (-60), la función de clasificación clasificará 40 como un valor inferior a 100.

Puede usar este fragmento de código para experimentar con la ordenación numérica y alfabética:  */

function myFunction1(){
    points.sort();
    document.getElementById("demo6").innerHTML = points;
}
function myFunction2(){
    points.sort(function(a, b){return a - b});
    document.getElementById("demo6").innerHTML = points;
}

//Ordenar una matriz en orden aleatorio

function myFunction3(){
    
    points.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo7").innerHTML = points;
}

//-------------- Metodo Fisher Yates-------------

/* El ejemplo anterior, array .sort(), no es exacto. Favorecerá algunos números sobre otros.

El método correcto más popular se llama el método aleatorio de Fisher Yates y se introdujo en la ciencia de datos ya en 1938.

En JavaScript, el método se puede traducir a esto: */

document.getElementById("demo8").innerHTML = points;

function myFunction4() {
    for (let i = points.length -1; i > 0; i--) {
        let j = Math.floor(Math.random * (i + 1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    }
    
    document.getElementById("demo8").innerHTML = points;

}





