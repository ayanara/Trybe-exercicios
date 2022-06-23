// crie um algoritmo que retorne o fatorial de 10.

let fatorial = n => {
    if ( n > 1) {
        return 10 * fatorial(n - 1)
    }

    return n
}

console.log(fatorial(10))


//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.


function reverse(s) {
    return s.split("").reverse().join("");
}

let word = reverse("trybe")
console.log(word);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];



for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length){
        biggestWord = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length){
        smallestWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallestWord);

//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let primeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber +=1){
    let isprime = true;
    for (let divisor = 2; divisor < currentNumber; divisor += 1) {
        if (currentNumber % divisor === 0){
            isprime = false;
        }
    }

    if (isprime) {
        primeNumber = currentNumber;
    }
}

console.log(primeNumber);



