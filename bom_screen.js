var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write('Altura do navegador é: ' + altura + '<br>')
document.write('Largura do navegador é: ' + largura + '<br>')

if(largura < 500) {
    document.write('Lógica para impressão do menu versão mobile')
}
else {
    document.write('Lógica para impressão do menu versão web')
}