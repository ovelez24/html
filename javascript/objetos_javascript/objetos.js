// /* programacion orientada a objetos de javascript esta basado en prototipos*/

// const natalia = {
//     name: "natalia",
//     name: "natalia",
//     age: 20,
//     cursosAprobados: [
//         "curso definitivo de HTML  CSS", "Curso practico de HTMl y CSS",
//     ],

    //metodo

//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito);
//     }
// }; //objeto literal

// crear prototipo

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

// crear metodo por fuera del prototipo se puede hacer con la palabra prototype
// Student.prototype.aprobarCurso = function(nuevoCursito){
//     this.cursosAprobados.push(nuevoCursito);
// }

//crear una instancia del prototipo

// const juanita = new Student(
//     "Juanita Alejandra",
//     15,
//     ["Curso de Introduccion A la produccion de videojuengos", "Curso de creacion de personajes"],
// );

// crear prototipos con la sintaxis de clases

// class Student2 {
//     constructor({
//         name,
//         age, 
//         cursosAprobados = [],
//         email,
        
    
        
//     }) {
//         this.name = name;
//          this.age = age;
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
//       age: 28,
//     cursosAprobados: ["curso Analisis de Negocios para ciencia de datos", 
//     "Curso de Principios de visualizacion de Datos para BI"],

//   }
// );

//crear  otra clase

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
        

    }
}

function videoPlay(id){
    const urlSecreta = "https://ulstrasecreto";
    console.log("Se esta reproduciendo desde la url secreta" + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://ulstrasecreto";
    console.log("Pausamos la url secreta" + urlSecreta);
}

class PlatziClass { // esto se hace para que se puede ejecutar la clase desde la aplicacion
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;// esto se escribe para indicar que este atributo no se puede modificar y poder aplicar un getter
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    /* que es encapsulamiento

aqui se limita el acceso a ciertos atributos y propiedades; lo cual no permite la alteracion de los metodos y atributos


una forma de encapsular son los getters y setters*/

    get name(){ //este es un getter
        return this._name;
    }

    set name(nuevoNombre){//este es un setter
        if(nuevoNombre === "Curso malicioso de programacion basica"){//esto se escribe para que no se permita mandar nombres no aceptados
            console.error("Web....no");

        }else {
            this._name = nuevoNombre;
        }
        
    }

    
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programacion Basica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
    
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
});

class LearningPaths{
    constructor({
        name, 
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
const escuelaData = new LearningPaths({
    name: "Escuela de Data science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});
const escuelaVgs = new LearningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});


class Student {
    constructor({
       name,
       email,
       username,
       twitter = undefined, 
       instagram = undefined, 
       facebook = undefined, 
       approvedCourses =[],
       learningPaths = [],
       
    }) {
        this.name = name;
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
/* Que es polimorfismo

 es una herencia mas avanzada que le permite a las subclases cambiar el comportamiento de los metodos que se heredaron de la superclase 
 
 los tipos de polimorfismo son: sobrecarga , parametrico e inclusion */

    publicarComentario(commentContent){// esto es polimorfismo
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });

        comment.publicar();//este metodo se trae de otra super clase que se llama Comment pero no es la instancia comment
      
    }
    
    
    
}

/* Herencia 

*/


class FreeStudent extends Student {
    constructor(props){
        super(props);//esto permite traer toda la informacion del constructor de la clase principal en este caso student
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos" );
        }
    }

   

  
}

class BasicStudent extends Student {
    constructor(props){
        super(props);//esto permite traer toda la informacion del constructor de la clase principal en este caso student
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("lo sentimos, " + this.name + ", no puedes tomar cursos en ingles" );
        }
    }
}

class ExpertStudent extends Student {
    constructor(props){
        super(props);//esto permite traer toda la informacion del constructor de la clase principal en este caso student
    }
}
class TeacherStudent extends Student {
    constructor(props){
        super(props);//esto permite traer toda la informacion del constructor de la clase principal en este caso student
    }

    publicarComentario(commentContent){//esto es polimorfismo
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });

        comment.publicar();
    }
}
/* Que es abstraccion

consiste en abstraer los datos de un objeto esto sucede cuando se crea una instancia*/

const juan2 = new FreeStudent({
    
    name: "juanDC",
    username: "juanDC",
    email: "juanDC@gmail.com",
    twitter: "fjuandc",
});


const miguelito2 = new BasicStudent({

    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@gmail.com",
    instagram: "migelito_feliz",
});

const freddy = new TeacherStudent({

    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});





