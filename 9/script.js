let aX = document.querySelector("#aX");
let aY = document.querySelector("#aY");
let bX = document.querySelector("#bX");
let bY = document.querySelector("#bY");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularDistancia(){
    let deltaX = aX.value - bX.value;
    deltaX = deltaX * deltaX;
    let deltaY = aY.value - bY.value;
    deltaY = deltaY * deltaY;
    let delta = deltaX + deltaY
    delta =  Math.sqrt(delta);

    result.textContent = "A distancia e de: " + delta;
}

btCalc.onclick = function(){
    calcularDistancia();
}