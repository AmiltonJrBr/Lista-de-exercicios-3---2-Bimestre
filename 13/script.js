let getRaio = document.querySelector("#getRaio");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularAreaPizza(){
    let raio = getRaio.value;
    let area = 0;

    area = (parseFloat(raio) * parseFloat(raio)) * 3,14;

    result.textContent = "Area da pizza: " + area;
}

btCalc.onclick = function(){
    calcularAreaPizza();
}