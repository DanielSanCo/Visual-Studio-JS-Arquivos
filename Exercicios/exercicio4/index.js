/* FOR: A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.
*/

/*
let salary = 0, sons = 0, media = 0, mSalary = 0, perc = 0, mSon = 0

for(let i = 1; i <= 20; i++){
    salary = prompt("Digite seu salario");
    sons = prompt("Quantos filhos você tem?");
    media = media += parseFloat(salary);
    mSon = mSon += parseInt(sons);

    if(salary > mSalary){
        mSalary = salary
    }
    if(salary <= 100){
        perc += 1
    }
}
alert("a média do salario da população é R$" + (media/20).toFixed(2) +
        "\na media de filhos da população é: " + mSon +
        "\no maior salario é R$" + mSalary +
        "\npercentual de pessoas com até R$100,00 de salario é: " + (perc/20)*100 + "%");
*/

/* FOR: Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.*/

/*
let soma = 0
for(let i = 1; i <= 500; i++){
    if(i % 2 == 1 && i % 3 == 0){
        soma += i
    }
}
alert(soma)
*/

/* WHILE: Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

/*
let num = 0, soma = 0
while(num >= 0){
    num = prompt("Digite um numero")
    if(num >= 0){
        soma += parseInt(num)
    }
}
alert(soma)
*/

/* WHILE: Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.*/

/*
let number
number = prompt("Digite um numero")
while(number < 300){
    console.log(number)
    number = number * 3
}*/

/* DO WHILE: Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.*/

/*
let number = 233
do{
    console.log(number)
    if(number >= 300 && number <= 400){
        number += 3
    }else{
        number+=5
    }
}while(number <= 456)
*/

/* DO WHILE: Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28.*/

/*
let number, sum = 0
number = prompt("Digite um numero")
do{
    sum += parseInt(number)
    number--
}while(number > 0)
alert(sum)*/