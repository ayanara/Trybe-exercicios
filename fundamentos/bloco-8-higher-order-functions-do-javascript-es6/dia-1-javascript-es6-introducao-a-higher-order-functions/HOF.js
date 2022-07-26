//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
//Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
//A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'),
      id4: callback('Carla Paiva de melo'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const employeesGenerate = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com}`};
}

//console.log(newEmployees(employeesGenerate));


  //2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
  //Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
  //O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

  const numberGenerator = () => {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const sorteio =  (number) => {
      return (numberGenerator() === number) ? 'Parabéns você' : 'Tente novamente';
      
    }
  
    //console.log(sorteio(1));

    //3 - Crie uma HOF que receberá três parâmetros:

    const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

    const comparation = () => {
        //comparacao as arrays
    }

    const result = (rightAnswers,studentAnswers, comparation) => {

    //resultado
    // mudar nomes de parametros

    }



    