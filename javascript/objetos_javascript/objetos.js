/* programacion orientada a objetos de javascript esta basado en prototipos*/

const natalia = {
    name: "natalia",
    age: 20,
    cursosAprobados: [
        "curso definitivo de HTML  CSS", "Curso practico de HTMl y CSS",
    ],

    //metodo

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}; //objeto literal

// crear prototipo

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
// crear metodo por fuera del prototipo se puede hacer con la palabra prototype
Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//crear una instancia del prototipo

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de Introduccion A la produccion de videojuengos", "Curso de creacion de personajes"],
);

// crear prototipos con la sintaxis de clases

class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    "miguel Antonio",
    28,
    ["Cursos de negocios para ciencia de datos", "Curso de principios de visualizacion de datos para BI"],
);

