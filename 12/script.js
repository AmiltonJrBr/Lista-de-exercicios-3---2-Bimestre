let getNumero = document.querySelector("#getNumero");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularCasasDecimais(){
    let numero = getNumero.value;
    let centena = parseInt (numero / 100);
    let dezena = parseInt ((numero - (centena * 100)) / 10);
    let unidade = parseInt ((numero - (dezena * 10)) - (centena * 100));

    result.textContent = "Centena: " + centena + " - \nDezena: " + dezena + " - \nUnidade: " + unidade;
}

btCalc.onclick = function(){
    calcularCasasDecimais();
}