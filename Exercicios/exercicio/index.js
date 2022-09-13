let nome = "Daniel" //string
let sobreNome = "Santos" //string
let peso = 2.5 //real
let altura = 1.8 //real
let dataInternacao = "08/09/2022" //string
let diabetico = false //boolean

nome = prompt("Nome: ")
sobreNome = prompt("Sobrenome: ")
peso = prompt("Peso: ")
altura = prompt("Sua altura (ex: 1.5): ")
dataInternacao = prompt("Data de Internação (ex: 10/10/2010): ")
diabetico = prompt("Diabete (sim ou não): ")

alert("Nome: " + nome + "\n"
     + "Sobrenome: " + sobreNome + "\n"
     + "peso: " + peso + "\n"
     + "Altura: "+ altura + "\n"
     + "Data de internação: " + dataInternacao + "\n"
     + "Diabético: " + diabetico);