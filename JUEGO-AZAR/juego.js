
var number = document.getElementById("range");

function bet() {

    if (number.value < 15 && number.value > 5 || number.value==70 || number.value==55) {
        alert("El número ingresado tiene opciones de ganar");
       
    } else  {
        alert("El número ingresado no es favorable")
       
    }
    
}

