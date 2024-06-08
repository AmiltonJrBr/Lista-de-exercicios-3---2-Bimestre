let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularVendas(){
    let resultado = Number(paes.value) * 0.12 + Number(broas.value) * 1.50;

    result.textContent = resultado + " reais arrecadados, " + resultado / 10 + " reais devem ser guardados na poupança";
}

btCalc.onclick = function(){
    calcularVendas();
}