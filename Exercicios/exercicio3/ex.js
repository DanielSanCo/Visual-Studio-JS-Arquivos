/*
//Exercicio 1
let P, E, M;
tomate = prompt("Kg de tomates");
if(tomate > 50) {
    E = tomate - 50
    M = E * 4;
    alert("Excedeu! Deverá pagar R$" + M.toFixed(2));
}else{
    alert("Não precisa pagar multa")
}*/

/*
//Exercicio 2
let C, N, Qtd, E;

C = prompt("Digite o código do Operario");
N = prompt("Digite o total de horas que o operario " + C + " trabalhou");

Qtd = N * 10;
if(N > 50) {
    E = N - 50
    alert("Salario total = " + (50*10).toFixed(2) + " Salario excedente = " + (E*20).toFixed(2));
}else{
    E = 0
    alert("Salario total = " + Qtd.toFixed(2));
}*/

/*
//Exercicio 3
let n1, n2, n3, n4;

n1 = prompt("Digite o primeiro numero: ")
n2 = prompt("Digite o segundo numero: ")
n3 = prompt("Digite o terceiro numero: ")
n4 = prompt("Digite o quarto numero: ")

if(parseInt(n3*n3) >= 1000) {
    alert("terceiro numero: " + n3*n3)
}else{
    alert(n1 + "² = " + n1*n1 + "\n" +
    n2 + "² = " + n2*n2 + "\n" +
    n3 + "² = " + n3*n3 + "\n" +
    n4 + "² = " + n4*n4
    );
}*/

/*
//Exercicio 4 : Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
//número é par ou ímpar, e se é positivo ou negativo.

let num;
num = prompt("Digite um numero")
if(num % 2 == 0) {
    alert(num + " é par");
}else{
    alert(num + " é impar")
}*/

/*
//Exericico 5
let nivelPoluicao;
nivelPoluicao = prompt("Nivel de poluição: ")

if(nivelPoluicao <= 0.29) {
    alert("Tudo normal, continue as atividades")
}else if(nivelPoluicao >= 0.3 && nivelPoluicao <= 0.39){
    alert("Grupo 1 suspenda suas atividades!")
}else if(nivelPoluicao >= 0.4 && nivelPoluicao <= 0.49){
    alert("Grupos 2 e 3, suspendam suas atividades!")
}else if(nivelPoluicao >= 0.5){
    alert("Todos os grupos suspendam suas atividades!")
}*/

/*
//Exercicio 6
let age;
age = prompt("Digite a idade do nadador: ")
if(age >= 5 && age <= 7){
    alert("Infantil A")
}else if(age >= 8 && age <= 11){
    alert("Infantil B")
}else if(age >= 12 && age <= 13){
    alert("Juvenil A")
}else if(age >= 14 && age <= 17){
    alert("Juvenil B")
}else if(age >= 18){
    alert("Adulto")
}else{
    alert("Ainda não tem idade para nadar")
}*/

/*
//Exercicio 7: Receber valores de base e altura de um triângulo e verificar se são valores válidos
//(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.

let b, a;
b = prompt("Base do triangulo")
a = prompt("Altura do triangulo")
if(b > 0 && a > 0) {
    alert("A area do triangulo é " + (b*a)/2)
}else{
    alert("Digite um valor positivo")
}*/


//Exericio 8: Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
//for maior que 100, caso contrário imprimi-la com o valor zero.

let N
N = prompt("Digite um numero")
if(N > 100) {
    alert(N + " é maior do que 100")
}else{
    N = 0
    alert(N)
}