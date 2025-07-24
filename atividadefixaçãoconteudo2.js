var nome = prompt('Qual é o seu nome?')
var altura = prompt('Qual é a sua altura em centimetros')
altura = parseFloat(altura)
var peso = prompt('Qual é o seu peso?')
peso = parseFloat(peso)
altura = (altura / 100)
var IMC = (peso / (altura * altura))
var classificacao = ''

switch (IMC) {
    case (IMC < 16):
        classificacao = 'Baixo peso muito grave'
        break
    case (IMC > 16 && IMC < 16.99):
        classificacao = 'Baixo peso grave'
        break
    case (IMC > 17 && IMC < 18.49):
        classificacao = 'Baixo peso'
        break
    case (IMC > 18.50 && IMC < 24.99):
        classificacao = 'Peso normal'
        break
    case (IMC > 25 && IMC < 29.99):
        classificacao = 'Sobrepeso'
        break
    case (IMC > 30 && IMC < 34.99):
        classificacao = 'Obesidade grau I'
        break
    case (IMC > 35 && IMC < 39.99):
        classificacao = 'Obesidade grau II'
        break
    case (IMC > 40):
        classificacao = 'Obesidade grau III'
        break
}

document.write(nome + ' possui índice de massa corporal igual a ' + IMC.toFixed(2) + ', sendo classificado como ' + classificacao + '.')