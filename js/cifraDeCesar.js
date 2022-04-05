var cc = document.getElementById('cifraDeCesar')
var textoFinal = document.getElementById('textoFinal')
var submit = document.getElementById('submit')
var codificar = document.getElementById('codificar')
var decodificar = document.getElementById('decodificar')
var arr = []


function textoParaArray() {
    var textoInput = "filipe"
    arr = textoInput.split('');
    console.log(arr);
}

function arrParaCharCode() {
    textoParaArray();
    var arrParaCharCode = [];
    arr = arr.join("");

    for (var i = 0; i < arr.length; i++) {
        arrParaCharCode.push(arr.charCodeAt(i));
    }
}

arrParaCharCode()

