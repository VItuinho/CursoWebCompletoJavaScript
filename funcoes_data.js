var data = new Date()

//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
//25/7/2025

/*

//adicionar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 720)
document.write('<hr />')
document.writeln(data.toString())
document.write('<br /><br /><hr />')

//adicionar / remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<hr />')
document.writeln(data.toString())
document.write('<br /><br /><hr />')

//adicionar / remover anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<hr />')
document.writeln(data.toString())

*/

//15/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())

document.write('<hr /><br /><hr />')
//converter dadas para algo que possamos calcular
document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())

//1 de janeiro de 1970
document.write('<hr /><br /><hr />')
//encontrar a qtde de milissegundos entre data1 e data2 
var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundos_entre_datas)

//1 dia tem 24h, cada hora tem 60 min, cada min tem 60 sec, e cada segundo tem 1000 milissegundos, então quantos milessegundos existem em um dia
var milissegundos_por_dia = 1*24*60*60*1000
document.write(' 1 dia tem: ' + (milissegundos_por_dia) + ' milissegundos')

document.write('<hr /><br /><hr />')
document.write('A diferença entre data1 e data2 é de: ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)')