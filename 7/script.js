let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularDias(){
    let resultado = Number(mes.value) * 30;
    resultado = resultado - 30;
    resultado = resultado + Number(dia.value)

    result.textContent = resultado + " Dias";
}

btCalc.onclick = function(){
    calcularDias();
}