//void
//retorno
/*
function calcularAreaTerreno (largura,comprimento) {
    
    //lógica
    var area = largura * comprimento

    return area

}

var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados')  

*/

function soma() {
    var resultado = 0
    for (var i in arguments) {
        resultado += arguments[i]
    }

    return resultado
}

console.log(soma(7, 5 ,3.2))