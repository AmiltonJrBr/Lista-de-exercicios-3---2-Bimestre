let pesoPrato = document.querySelector("#pesoPrato");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularValorAPagar(){
    let resultado = Number(pesoPrato.value) * 12;

    result.textContent = resultado + " Reais";
}

btCalc.onclick = function(){
    calcularValorAPagar();
}