let comprimento = document.querySelector("#comprimento");
let largura = document.querySelector("#largura");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularArea(){
    result.textContent = (Number(comprimento.value) * Number(largura.value)) + " metros quadrados";
}

btCalc.onclick = function(){
    calcularArea();
}