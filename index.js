var base64 = document.getElementById('base64')
var cifraDeCesar = document.getElementById('cifraDeCesar')
var header = document.header

cifraDeCesar.addEventListener('click', function(){
    var inputNovo = document.createElement ('input');
    inputNovo.type = 'number'

    var incrementoCifra = document.getElementById('incrementoCifra')
    incrementoCifra.append(inputNovo)
})
