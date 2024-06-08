let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularDiasDeVida(){
    let resultado = Number(idade.value) * 365;

    result.textContent = nome.value + " possui " + resultado + " dias de vida";
}

btCalc.onclick = function(){
    calcularDiasDeVida();
}