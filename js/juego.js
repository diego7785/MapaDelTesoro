const WIDTH = 400;
const HEIGHT = 400;

var treasure = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
}


var map = document.getElementById("map");
var clics = 0;

map.addEventListener("click", function(e){
    clics++;

    var distance = distancePoints(e, treasure);
    var hint = getDistanceHint(distance);
    var hintHTML = document.getElementById("distance");
    hintHTML.innerHTML = "<h1>"+hint+"</h1>";

    if(distance < 20){
        alert("Has encontrado el tesoro en " + clics + " clics");
        location.reload();  //Refresca la página
    }
})