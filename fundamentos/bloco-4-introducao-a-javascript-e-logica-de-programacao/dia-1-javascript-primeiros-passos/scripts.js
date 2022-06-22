// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 20;
const b = 15;

// adição
soma = a + b;

console.log(soma);

// subtração
subtracao = a - b;

console.log(subtracao);

// multiplicação
multiplicacao = a * b;

console.log(multiplicacao);

// Divisão
divisao = a / b;


console.log(divisao);

// módulo
modulo = a % b;

console.log(modulo);


// Versão resumida

console.log('soma = ' + (a + b));
console.log('subtração = ' + (a - b));
console.log('multiplicação = ' + (a * b));
console.log('divisão = ' + (a / b));
console.log('módulo = ' + (a % b));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num = 55;
const num2 = 30;

if (num > num2 ) {
    console.log( num + ' é maior que ' + num2);
} else {
    console.log( num2 + ' é maior que ' + num);
};


//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numero1 = 10;
const numero2 = 57;
const numero3 = 35;

if (numero1 > numero2  && numero1 > numero3) {
    console.log(numero1 + ' é maio que ' + numero2  + ' e ' + numero3);

} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + ' é maio que ' + numero1  + ' e ' + numero3);

}  else {
    console.log(numero3 + ' é maio que ' + numero1  + ' e ' + numero2);

}


//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 0;

if (valor > 0) {
    console.log('positive');
} else if (valor < 0 ) {
    console.log('negative');
} else {
    console.log('zero');
}

// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = 50;
const anguloB = 50;
const anguloC = 80;

if ( anguloA > 0 && anguloB > 0 && anguloC > 0 && anguloA + anguloB + anguloC == 180 ) {
    console.log('true');
} else if ( anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log('ERRO : Angulo inválido');
} else {
    console.log('false');
} 

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Bispo";
let result = peca.toLocaleLowerCase();

switch (result){
    case "peão":
        console.log("ande uma casa frente");
        break;
    
    case "bispo":
        console.log("ande na diogonal");
        break;
        
    case "torre":
        console.log("ande quantas casas desejar na vertical ou horizontal");
        break;

    case "rei":
        console.log("ande uma casa em qualquer direção");
        break;

    case "rainha":
        console.log("ande quantas casas desejar em qualquer direçao");
        break;

    case "cavalo":
        console.log("ande em L ");
        break;

    default:
        console.log("ERRO: Peça inválida");

}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

const nota = -105;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 100) {
    console.log("B");
} else if (nota >= 70 && nota <= 100) {
    console.log("C");
} else if (nota >= 60 && nota <= 100) {
    console.log("D");
} else if (nota >= 50 && nota <= 100) {
    console.log("E");
} else if (nota < 50 && nota > 0) {
    console.log("F");
} else if (nota < 0 || nota > 100) {
    console.log(" Erro : nota inválida");
}

//🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const number1 = 50;
const number2 = 25;
const number3 = 35;

if (number1 %2 == 0 ||number2 %2 == 0 || number3 %2 == 0) {
    console.log(true);
} else {
    console.log(false);
}