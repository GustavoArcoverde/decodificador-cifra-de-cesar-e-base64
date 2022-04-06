var cc = document.getElementById('cifraDeCesar')
var textoFinal = document.getElementById('textoFinal')
var submit = document.getElementById('submit')
var codificar = document.getElementById('codificar')
var decodificar = document.getElementById('decodificar')
var arr = [];
var arrComIncremento = [];
var arrParaCharCode = [];
var valorIncrementado = [];
var incremento = 2;

// FUNÇÕES COMUNS

function textoParaArray() {
    var textoInput = document.getElementById('textoInicial').value
    arr = textoInput.split('');
}

function transformaArrParaCharCode() {
    textoParaArray();

    arr = arr.join("");

    for (var i = 0; i < arr.length; i++) {
        arrParaCharCode.push(arr.charCodeAt(i));
    }

}


// CODIFICAR


function addIncrementoCodifica() {
    transformaArrParaCharCode()


    for (var j = 0; j < arrParaCharCode.length; j++) {

        if (arrParaCharCode[j] >= 97 && arrParaCharCode[j] <= 122) {
            arrComIncremento.push((arrParaCharCode[j] - 97 + incremento) % 26 + 97)
        } else if (arrParaCharCode[j] >= 65 && arrParaCharCode[j] <= 90) {
            arrComIncremento.push((arrParaCharCode[j] - 65 + incremento) % 26 + 65)
        } else {
            arrComIncremento.push(arrParaCharCode[j])
        }

    }
}

function novoValorParaLetraCodifica() {
    addIncrementoCodifica()

    for (var k = 0; k < arrComIncremento.length; k++) {
        valorIncrementado.push(String.fromCharCode(arrComIncremento[k]));
    }
}

function resultadoCodifica() {
    novoValorParaLetraCodifica()

    var resultado = valorIncrementado.join('')
    textoFinal.innerText = resultado

    arr = [];
    arrComIncremento = [];
    arrParaCharCode = [];
    valorIncrementado = [];
}

// DECODIFICAR

function addIncrementoDecodifica() {
    transformaArrParaCharCode()

    for (var j = 0; j < arrParaCharCode.length; j++) {
        if (arrParaCharCode[j] >= 97 && arrParaCharCode[j] <= 122) {
            arrComIncremento.push((arrParaCharCode[j] - 122 - incremento) % 26 + 122)
        } else if (arrParaCharCode[j] >= 65 && arrParaCharCode[j] <= 90) {
            arrComIncremento.push((arrParaCharCode[j] - 90 - incremento) % 26 + 90)
        } else {
            arrComIncremento.push(arrParaCharCode[j])
        }
    }
}

function novoValorParaLetraDecodifica() {
    console.log("decodifica")
    addIncrementoDecodifica()

    for (var k = 0; k < arrComIncremento.length; k++) {
        valorIncrementado.push(String.fromCharCode(arrComIncremento[k]));
    }
}

function resultadoDecodifica() {
    novoValorParaLetraDecodifica()

    var resultado = valorIncrementado.join('')
    textoFinal.innerText = resultado

    arr = [];
    arrComIncremento = [];
    arrParaCharCode = [];
    valorIncrementado = [];
}

// SUBMIT

submit.addEventListener('click', function () {
    if (codificar.checked) {
        resultadoCodifica()
    } else if (decodificar.checked) {
        resultadoDecodifica()
    } else {
        alert("Escolha uma das opções")
    }
})