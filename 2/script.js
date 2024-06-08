let cavalos = document.querySelector("#cavalos");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularFerraduras(){
    result.textContent = (Number(cavalos.value) * 4) + " ferraduras";
}

btCalc.onclick = function(){
    calcularFerraduras();
}