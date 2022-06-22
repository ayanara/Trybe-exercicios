//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers);

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;


for (let index = 0; index < numbers.length; index ++) {
    soma += numbers[index];
}

console.log(soma);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let index = 0; index < numbers.length; index ++) {
    soma += numbers[index];
}

soma = soma / numbers.length;

if (soma > 20) {
    console.log("valor maior que 20");
} else {
    console.log("Valo menor que 20");
}

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let higherNumbe = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumbe){
        higherNumbe = numbers[index]
    }
}

console.log(higherNumbe);