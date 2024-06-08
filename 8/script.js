let camisetaP = document.querySelector("#camisetaP");
let camisetaM = document.querySelector("#camisetaM");
let camisetaG = document.querySelector("#camisetaG");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularVenda(){
    let resultado = Number(camisetaP.value) * 10;
    resultado = resultado + (Number(camisetaM.value) * 12);
    resultado = resultado + (Number(camisetaG.value) * 15);

    result.textContent = resultado + " Reais";
}

btCalc.onclick = function(){
    calcularVenda();
}