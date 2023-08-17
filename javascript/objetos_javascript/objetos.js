// /* programacion orientada a objetos de javascript esta basado en prototipos*/

// const natalia = {
//     name: "natalia",
//     name: "natalia",
//     age: 20,
//     cursosAprobados: [
//         "curso definitivo de HTML  CSS", "Curso practico de HTMl y CSS",
//     ],

//     //metodo

//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito);
//     }
// }; //objeto literal

// // crear prototipo

// function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
// }
// function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
// }
// // crear metodo por fuera del prototipo se puede hacer con la palabra prototype
// Student.prototype.aprobarCurso = function(nuevoCursito){
//     this.cursosAprobados.push(nuevoCursito);
// }

// //crear una instancia del prototipo

// const juanita = new Student(
//     "Juanita Alejandra",
//     15,
//     ["Curso de Introduccion A la produccion de videojuengos", "Curso de creacion de personajes"],
// );

// // crear prototipos con la sintaxis de clases

// class Student2 {
//     constructor({
//         name,
//         age, 
//         cursosAprobados = [],
//         email,
        
    
        
//     }) {
//         this.name = name;
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.cursosAprobados = cursosAprobados;
//     }

//     aprobarCurso(nuevoCursito){
//         this.cursosAprobados.push(nuevoCursito);
//     }
// }

// const miguelito = new Student2(
//   {
//       email: "miguelito@platzi.com",
//       name: "Miguel",
//       name: "Miguel",
//     age: 28,
//     cursosAprobados: ["curso Analisis de Negocios para ciencia de datos", 
//     "Curso de Principios de visualizacion de Datos para BI"],

//   }
// );

//crear  otra clase

class Student {
    constructor({
       nombre,
       email,
       username,
       twitter = undefined, 
       instagram = undefined, 
       facebook = undefined, 
       approvedCourses =[],
       learningPaths = [],
       
    }) {
        this.nombre = nombre;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses  = approvedCourses;
        this.learningPaths  = learningPaths;
    }

    

}

const juan2 = new Student(
    nombre: "juanDC",
    username: "juanDC",
    email: "juanDC@gmail.com",


);

