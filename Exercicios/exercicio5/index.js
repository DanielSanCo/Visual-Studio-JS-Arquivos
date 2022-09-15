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

/*
let peso = prompt("Digite o peso");
let altura = prompt("Digite a altura");
function calcImc (p, h) {
    result = p / (h*h);
    return (result.toFixed(2));
}
alert(calcImc(peso, altura));
*/

/*
1 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função
e o menor número através de outra função.
*/

/*
let n1 = prompt("Digite o primeiro numero")
let n2 = prompt("Digite o segundo numero")
let n3 = prompt("Digite o terceiro numero")

function Maior(pn, sn, tn) {
    let maior
    if(pn >= sn && pn >= tn){
        maior = pn
    }else if(sn >= pn && sn >= tn){
        maior = sn
    }else if(tn >= sn && tn >= pn){
        maior = tn
    }

    return ("Maior numero é o " + maior)
}

function Menor(pn, sn, tn) {
    let menor
    if(pn <= sn && pn <= tn){
        menor = pn
    }else if(sn <= pn && sn <= tn){
        menor = sn
    }else if(tn <= sn && tn <= pn){
        menor = tn
    }

    return ("Menor numero é o " + menor)
}

alert(Maior(n1, n2, n3))
alert(Menor(n1, n2, n3))
*/

/*
    2 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros 
    formais: 'taxaImposto', que é a quantia de imposto sobre vendas expressa em porcentagem. e o 'custo', 
    que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o 
    imposto sobre vendas.
*/

/*
let tI = prompt("Digite o imposto expresso em porcentagem")
let c = prompt("Digite o custo do item antes do imposto")

function somaImposto (taxaImposto, custo) {
    valor = parseFloat(custo) + (parseFloat(custo)*(parseFloat(taxaImposto)/100))
    return (alert("R$" +  parseFloat(custo).toFixed(2) + " + " + taxaImposto + "%" + 
    "\n valor de venda -> R$" + valor.toFixed(2)))
}

somaImposto(tI, c)
*/

/*
3 - Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, 
o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos 
duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um 
valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal 
para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos 
valores de entrada todas as vezes que desejar.
*/

/*
let h, m
h = prompt("Digite a hora")
m = prompt("Digite o minuto")
function Convercao(dd1, dd2) {
    if(dd1 > 12 && dd1 < 24 && dd2 >= 0 && dd2 <= 59){
        return(dd1-12 + ":" + dd2 + " P.M.")
    }else if(dd1 <= 12 && dd2 >= 0 && dd2 <= 59){
        return(dd1 + ":" + dd2 + " A.M.")
    }else if(dd1 <= 0 || dd1 > 24 || dd2 <= 0 || dd2 > 59){
        return("Há algum valor invalido")
    }
}
alert(Convercao(h, m))
*/

/*
5 -  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
subtração, multiplicação e divisão desses valores.
*/

/*
let n1 = prompt("Digite o primeiro numero")
let n2 = prompt("Digite o segundo numero")

function Calculo(v1, v2) {
    return(v1 + " + " + v2 + " = " + (parseInt(v1)+parseInt(v2)) + 
    "\n" + v1 + " - " + v2 + " = " + (parseInt(v1)-parseInt(v2)) +
    "\n" + v1 + " * " + v2 + " = " + (parseInt(v1)*parseInt(v2)) +
    "\n" + v1 + " / " + v2 + " = " + (parseInt(v1)/parseInt(v2)).toFixed(2)
    );
}

console.log(Calculo(n1, n2));
*/

/*
6 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
*/


let num
num = prompt("Digite o numero do mês")
function Mes (n) {
    let mes

    switch(n){
        case "1":
            mes = "Janeiro"
        break;
        case "2":
            mes = "Fevereiro"
        break;
        case "3":
            mes = "Março"
        break;
        case "4":
            mes = "Abril"
        break;
        case "5":
            mes = "Maio"
        break;
        case "6":
            mes = "Junho"
        break;
        case "7":
            mes = "Julho"
        break;
        case "8":
            mes = "Agosto"
        break;
        case "9":
            mes = "Setembro"
        break;
        case "10":
            mes = "Outubro"
        break;
        case "11":
            mes = "Novembro"
        break;
        case "12":
            mes = "Dezembro"
        break;
    }

    return (alert(mes))
}

Mes(num);