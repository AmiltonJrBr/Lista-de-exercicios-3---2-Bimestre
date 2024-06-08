let getDias = document.querySelector("#getDias");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularDiasSemAcidentes(){
    let dias = getDias.value;
    let meses = 0;
    let anos = 0;

    if (dias >= 30){
        meses = ((dias - (dias % 30)) / 30);
        dias = dias - (meses * 30);
    }

    if (meses >= 12){
        anos = ((meses - (meses % 12)) / 12);
        meses = meses - (anos * 12);
    }

    result.textContent = anos + " Anos, " + meses + " meses e " + dias + " dias";
}

btCalc.onclick = function(){
    calcularDiasSemAcidentes();
}