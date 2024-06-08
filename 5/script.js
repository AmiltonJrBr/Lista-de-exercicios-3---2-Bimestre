let precoGas = document.querySelector("#precoGas");
let valorPag = document.querySelector("#valorPag");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularLitros(){
    let resultado = Number(valorPag.value) / Number(precoGas.value);

    result.textContent = resultado + " Litros";
}

btCalc.onclick = function(){
    calcularLitros();
}