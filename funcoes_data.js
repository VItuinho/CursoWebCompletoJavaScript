var data = new Date()

//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())
//25/7/2025

//adicionar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 720)
document.write('<hr />')
document.writeln(data.toString())