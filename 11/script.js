let getSalario = document.querySelector("#getSalario");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularSalario(){
    let salario = getSalario.value;
    let aumento = 0;
    let salarioAumento = 0;
    let imposto = 0;
    let salarioFinal = 0;

    aumento = salario * 0.15;
    salarioAumento = Number(salario) + Number(aumento);
    imposto = salario * 0.08;
    salarioFinal = Number(salarioAumento) - Number(imposto);

    result.textContent = "Salario inicial: " + salario + "R$ - \nSalario com aumento: " + salarioAumento + "R$ - \nSalario final: " + salarioFinal + "R$";
}

btCalc.onclick = function(){
    calcularSalario();
}