/*
1 - Criar uma função para calcular a 
porcentagem de um número
*/

/*
let num, perc, result

num = prompt("Digite um numero: ")
perc = prompt("Digite o valor que você quer do percentual de " + num)
function Percentual(n, p){
    result = n * (p/100)
    return(p + "%" + " de " + n + " = " + result)
}

alert(Percentual(num, perc))
*/

/*
2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit
*/

/*
let celsius
celsius = prompt("Digite a temperatura em celsius");
function toFaren(c) {
    f = (celsius*1.8)+32
    return (c + "ºc = " + f + "ºf")
}
alert(toFaren(celsius));
*/

/*
3 -  Criar uma função que converta uma
temperatura de Fahrenheit para Celsius
*/

/*
let faren
faren = prompt("Digite a temperatura em farenheit");
function toCelsius(f) {
    c = (faren-32)/1.8
    return (f + "ºf = " + c + "ºc")
}
alert(toCelsius(faren));
*/

/*
4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes,
a função deverá receber os  seguintes parâmetros, peso e altura.
*/


let peso = prompt("Digite o peso");
let altura = prompt("Digite a altura");
function calcImc (p, h) {
    result = p / (h*h);
    return (result.toFixed(2));
}
alert(calcImc(peso, altura));