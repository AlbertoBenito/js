let counter = 0;
const printValue = () => {
  if (counter < 5) {
    console.log(counter);
  }
  counter++;
};
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
printValue();
console.log('-----------------');
for (let counter = 0; counter < 5; counter++) {
  console.log(counter);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers[0];
numbers[1];
numbers[2];
numbers[3];
numbers[4];
for (let counter = 0; counter < numbers.length; counter++) {
  console.log(numbers[counter]);
}
for (const number of numbers) {
  console.log(number);
}

const word = 'Tatiana';
for (const letter of word) {
  console.log(letter);
}
// # Ejercicios

// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.
const countdown = start => {
  for (let counter = start; counter >= 0; counter--) {
    console.log(counter);
  }
};
countdown(10);

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumNumbers = numbers => {
  let total = 0;
  for (let counter = 0; counter < numbers.length; counter++) {
    total = total + numbers[counter];
  }
  console.log(total);
};
sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//   4 x 0 = 0
//   4 x 1 = 4
//   4 x 2 = 8
//   4 x 3 = 12
//   4 x 4 = 16
//   4 x 5 = 20
//   4 x 6 = 24
//   4 x 7 = 28
//   4 x 8 = 32
//   4 x 9 = 36
//   4 x 10 = 40

const multiplyTable = number => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};
multiplyTable(9);

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//   4 x 10 = 40
//   4 x 9 = 36
//   4 x 8 = 32
//   4 x 7 = 28
//   4 x 6 = 24
//   4 x 5 = 20
//   4 x 4 = 16
//   4 x 3 = 12
//   4 x 2 = 8
//   4 x 1 = 4
//   4 x 0 = 0

const multiplyTablereverse = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};
multiplyTablereverse(9);

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"
//     ....

const yearAndAge = (year, age) => {
  const birthday = year - age;
  console.log(`naciste en el año ${birthday}`);

  // for(let counter = 1; counter <= age ;counter++){
  //     console.log(`en el año ${birthday + counter} cumpliste ${counter}`)
  // }

  for (let counter = birthday + 1; counter <= year; counter++) {
    if (counter === birthday + 1) {
      console.log(`en el año ${counter} cumpliste ${counter - birthday} año`);
    } else {
      console.log(`en el año ${counter} cumpliste ${counter - birthday} años`);
    }
  }
};
yearAndAge(2024, 24);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

//Camino largo
const printOnlyEven = (numberA, numberB) => {
  if (numberA < numberB) {
    for (let counter = numberA; counter <= numberB; counter++) {
      if (counter % 2 === 0) {
        console.log(counter);
      }
    }
  } else {
    for (let counter = numberB; counter <= numberA; counter++) {
      if (counter % 2 === 0) {
        console.log(counter);
      }
    }
  }
};
printOnlyEven(2, 12);

//Camino corto
const printOnlyEven2 = (numberA, numberB) => {
  const start = Math.min(numberA, numberB);
  const end = Math.max(numberA, numberB);
  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
printOnlyEven2(2, 12);

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const repeatNumberInArray = () => {
  const array1 = [];
  const array2 = [];
  for (let i = 0; i < 5; i++) {
    const randomNumberA = Math.floor(Math.random() * 11);
    array1.push(randomNumberA);
    const randomNumberB = Math.floor(Math.random() * 11);
    array2.push(randomNumberB);
  }

  for (let i = 0; i < array1.length; i++) {
    const number = array2[i];
    if (array1.includes(number)) {
      console.log(`El número §{number} se repite.`);
    }
    console.log(array1);
    console.log(array2);
  }
};
repeatNumberInArray();

// - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

const primeNumber = number => {
  if ((number % 2 === 0 && number !== 2) || number < 2) {
    console.log(`El numero no es primo`);
    return;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`El número ${number} no es primo`);
      return;
    }
  }
  console.log(`El número ${number}  es primo`);
};
primeNumber(19);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const squareAndCube = numbers => {
  for (const number of numbers) {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    console.log(`Número: ${number} - Cuadrado: ${square} - Cubo: ${cube}`);
  }
};
squareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsToUpperCase = word => {
  const vowels = 'aeiou';
  let newWord = '';
  for (letter of word) {
    if (vowels.includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else {
      newWord = newWord + letter.toLowerCase();
    }
  }
  console.log(newWord);
};
vowelsToUpperCase('Mariposa');

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser:
//   a: 3,
//   e: 3,
//   i: 1,
//   o: 1,
//   u: 1

const countVowels = phrase => {
  let aCounter = 0;
  let eCounter = 0;
  let iCounter = 0;
  let oCounter = 0;
  let uCounter = 0;
  for (const letter of phrase) {
    if (letter === 'a') {
      aCounter++;
    } else if (letter === 'e') {
      eCounter++;
    } else if (letter === 'i') {
      iCounter++;
    } else if (letter === 'o') {
      oCounter++;
    } else if (letter === 'u') {
      uCounter++;
    }
  }
  console.log(aCounter);
  console.log(eCounter);
  console.log(iCounter);
  console.log(oCounter);
  console.log(uCounter);
};
countVowels('Enrique ordeña cabras');

// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const intercalateLetters = (wordA, wordB) => {
  const shortesLength = Match.min(wordA.length, wordB.length);
  let newWord = '';
  for (let i = 0; i < shortesLength; i++) {
    newWord += wordA[i] + wordB[i];
  }
  console.log(newWord);
};

intercalateLetters('perro', 'gato');

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const reverseWord = word => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  console.log(newWord);
  console.log(word.split('').reverse().join('')); //es lo mismo que lo de arriba
};

reverseWord('Perro');

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const evenOdds = numbers => {
  const evens = [];
  const odds = [];
  const randomNumber = Math.ceil(Math.random() * 10);

  for (number of number) {
    const multiplyNumber = number * randomNumber;
    if ((multiplyNumber = number % 2 === 0)) {
      evens.push(multiplyNumber);
    } else {
      odss.push(multiplyNumber);
    }
  }
  console.log(numbers);
  console.log(evens);
  console.log(odds);
};

evenOdds([1, 2, 3, 4, 5]);
// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const firstAndLastLetterUpperCase = words => {
  const letters = [];
  for (const word of words) {
    const firstLetter = word.charAt(0).toUpperCase();
    const lastLetter = word.charAt(word.length - 1).toUpperCase();

    letters.push(firstLetter, lastLetter);
  }
  console.log(letters);
};
firstAndLastLetterUpperCase(['hola', 'adios', 'gato', 'perro', 'casa']);
