function numeroParaBinario(){
    let numero_digitado = Number(document.getElementById("numero_digitado").value);
    let testeNumber = isNumeric(numero_digitado);
    let numero_codificado = conversorBinario(numero_digitado);

    if(testeNumber == false){
        document.getElementById("numero_convertido").innerHTML = `<p><strong>Digite um numero</strong></p>`
    }
    else{
        document.getElementById("numero_convertido").innerHTML = `<p>numero em binário = <strong>${numero_codificado}</strong></p>`
    }
    

}

function conversorBinario(num){
    return num > 0 ? num.toString(2) : (~num).toString(2);
}

function isNumeric(val) {
    return /^-?\d+$/.test(val);
}