var base64 = document.getElementById('base64')
var cifraDeCesar = document.getElementById('cifraDeCesar')
var header = document.header
var i = 0

cifraDeCesar.addEventListener('click', function () {
    escolhaCifraDeCesar()
})

function escolhaCifraDeCesar() {
    while (i < 1) {
        var inputNovo = document.createElement('input');
        inputNovo.type = 'number'
        var incrementoCifra = document.getElementById('incrementoCifra')
        incrementoCifra.append(inputNovo)
        i++
    }
}

