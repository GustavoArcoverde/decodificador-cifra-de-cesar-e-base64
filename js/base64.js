var base64 = document.getElementById('base64')
var textoInput = "Gustavasso"
var submit = document.getElementById('submit')
var textoFinal = document.getElementById('textoFinal')

function codificaTexto(){
    var textoCodificado = btoa(textoInput)
    textoFinal.innerText = textoCodificado
}

function decodificaTexto(){}

submit.addEventListener('click', function(){
    codificaTexto()
})

