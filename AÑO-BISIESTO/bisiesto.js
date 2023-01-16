var year = document.getElementById("leapYear");

function bisiesto() {

    if (year.value % 4==0 && year.value % 100!=0 || year.value % 400==0) {
        alert("Es bisiesto");
       
    } else  {
        alert("No es bisiesto")
       
    }
    
}
