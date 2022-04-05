var base64 = document.getElementById('base64')
var textoFinal = document.getElementById('textoFinal')
var submit = document.getElementById('submit')
var codificar = document.getElementById('codificar')
var decodificar = document.getElementById('decodificar')

function codificaTexto(){
    var textoInput = document.getElementById('textoInicial').value
    var textoCodificado = btoa(textoInput)
    textoFinal.innerText = textoCodificado
}

function decodificaTexto(){
    var textoInput = document.getElementById('textoInicial').value
    var textoDecodificado = atob(textoInput)
    textoFinal.innerText = textoDecodificado
}

// submit.addEventListener('click', function(){
//     if(codificar.checked){
//         codificaTexto()
//     }else if(decodificar.checked){
//         decodificaTexto()
//     }else{
//         alert("Escolha uma das opções")
//     }
// })

