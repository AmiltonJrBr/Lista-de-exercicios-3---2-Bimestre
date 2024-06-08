let getConta = document.querySelector("#getConta");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularConta(){
    let conta = getConta.value;
    let resto = Number(conta) % 3;
    let pagar = (conta - resto) / 3;
    let felipe = pagar + resto;

    result.textContent = "Carlos: " + pagar + " - \nAndre: " + pagar + " - \nFelipe: " + felipe;
}

btCalc.onclick = function(){
    calcularConta();
}