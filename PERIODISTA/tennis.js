var playerA = document.getElementById("A");
var playerB = document.getElementById("B");

function getPlayer(){
    if(playerA.value == 6 && playerA.value-playerB.value >=2){
        alert("Player A gana");
    }


    else if(playerB.value == 6 && playerB.value-playerA.value >=2) {
        alert("Player B gana");
    }
    
    else if(playerA.value == 5 && playerB.value == 5 || playerA.value == 6 && playerB.value == 6 ){
        alert("El ganador es el primero que llegue a 7");
    }

    else{
        alert("Aún no hay ganador del set");

    }
    

}
