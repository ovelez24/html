let campo = document.getElementById("miCampo");


function verificarNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);//keydown cuando se presiona una tecla

campo.addEventListener('keyup', function(event){//keyup cuando se levanta de la tecla
    console.log("Entrada del usuario: " + event.target.value);
});

campo.addEventListener('keypress', function(event){//keypress cuando se oprime y se levanta rapido una tecla
    console.log("Caracter ingresado: " + event.key);
})
