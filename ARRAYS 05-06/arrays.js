const letter = ['a', 'b', 'c'];
console.log(letter);
console.log(letter[0].toUpperCase());

console.log(length);

const printNumbers = numbers => {
  console.log(numbers);
};
printNumbers([1, 2, 3, 4]);

// # Ejercicios

// ## Arrays

// - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const number = ['1', '2', '3', '4', '5'];
const randomPosition = Math.floor(Math.random() * number.length);
console.log(number);
console.log('posicion aleatoria ' + randomPosition);

//Adrian

const aleatoryNumberfArray = numbers => {
  const randomPosition1 = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomPosition1]);
};

aleatoryNumberfArray([1, 2, 3, 4]);

// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

const numbers = [2, 7, 5];
//Adrian
const arrayOperations = numbers => {
  const sum = numbers[0] + numbers[1] + numbers[21];
  const average = sum / numbers.length;
  const max = Math.max(numbers[0], numbers[1], numbers[21]);
  const min = Math.min(numbers[0], numbers[1], numbers[21]);

  console.log(`La suma de todos los números es: ${sum}`);
  console.log(`La media de todos los números es: ${average}`);
  console.log(`La suma de todos los números es: ${sum}`);
  console.log(`El mayor es ${max} y el menor es ${min}`);
};
arrayOperations[(5, 7, 38)];

//   - "La suma de todos los números es:[suma]"

const sumNumbers = numbers[0] + numbers[1] + numbers[2];

console.log(`La suma de todos los numeros es ${sumNumbers}`);

//   - "La media de todos los números es:[media]"

const halfNumbers = (numbers[0] + numbers[1] + numbers[2]) / 3;
console.log(`La media de todos los numeros es ${halfNumbers}`);

//   - "El mayor es [mayor] y el menor es [menor]"

const hight =
  numbers[0] > numbers[1] &&
  numbers[0] > numbers[2] &&
  numbers[1] > numbers[0] &&
  numbers[1] > numbers[2] &&
  numbers[2] > numbers[1] &&
  numbers[2] > numbers[0];

const less =
  numbers[0] < numbers[1] &&
  numbers[0] < numbers[2] &&
  numbers[1] < numbers[0] &&
  numbers[1] < numbers[2] &&
  numbers[2] < numbers[1] &&
  numbers[2] < numbers[0];

console.log(`El mayor es ${hight} y el menor es ${less}`);

if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
  console.log(numbers[0]);
}
if (numbers[1] > numbers[2] && numbers[1] > numbers[0]) {
  console.log(numbers[1]);
}
if (numbers[2] > numbers[0] && numbers[2] > numbers[1]) {
  console.log(numbers[2]);
}

if (numbers[0] < numbers[1] && numbers[0] < numbers[2]) {
  console.log(numbers[0]);
}
if (numbers[1] < numbers[2] && numbers[1] < numbers[0]) {
  console.log(numbers[1]);
}
if (numbers[2] < numbers[0] && numbers[2] < numbers[1]) {
  console.log(numbers[2]);
}

// - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

//adrian
const arrayIncludeRandomNumber = numbers => {
  const randomNumber = Math.floor(Math.random() * 11);
  if (numbers.includes(randomNumber)) {
    console.log(`El número ${randomNumber} está en la posición ${numbers.indexOf(randomNumber)}`);
  } else {
    console.log(`El número ${randomNumber} no está en el array`);
  }
};
arrayIncludeRandomNumber([1, 2, 3, 4, 5]);

//yo
const fiveNumber = [1, 4, 6, 7, 10];

const randomNumber2 = Math.floor(Math.random() * 11);

if (fiveNumber.includes(randomNumber2)) {
  console.log(
    `El array contiene el número ${randomNumber2} y esta en la posicion ${fiveNumber.indexOf(randomNumber2)}`
  );
} else {
  console.log(`El array ${randomNumber2} no contiene el número `);
}

// - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const lonly = [Math.floor(Math.random() * 101)];
const lonly1 = [Math.floor(Math.random() * 101)];
const lonly2 = [Math.floor(Math.random() * 101)];

console.log(`El array aleatorio del 1 al 100 es ${lonly}, ${lonly1}, ${lonly2}`);

// - Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const even0r0dd = numbers => {
  const even = [];
  const odd = [];
  const randomNumber = Math.floor(Math.random() * 11);
  const resultA = numbers[0] * randomNumber;
  const resultB = numbers[1] * randomNumber;
  const resultC = numbers[2] * randomNumber;
  const resultD = numbers[3] * randomNumber;
  const resultE = numbers[4] * randomNumber;

  if (resultA % 2 === 0) {
    even.push(resultA);
  } else {
    odd.push(resultA);
  }
  if (resultB % 2 === 0) {
    even.push(resultB);
  } else {
    odd.push(resultB);
  }
  if (resultC % 2 === 0) {
    even.push(resultC);
  } else {
    odd.push(resultC);
  }
  if (resultD % 2 === 0) {
    even.push(resultD);
  } else {
    odd.push(resultD);
  }
  if (resultE % 2 === 0) {
    even.push(resultE);
  } else {
    odd.push(resultE);
  }
  console.log(numbers);
  console.log(even);
  console.log(odd);
};
even0r0dd([1, 2, 3, 4, 5]);

// - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.
const dniLetter = dni => {
  const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];

  const letterPosition = dni % 23;
  console.log(dni + letters[letterPosition]);
};
dniLetter(70253012);

// - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const firstAndLastLetterInUppercasse = words => {
  const firstLetterA = words[0].charAt(0).toUpperCase();
  const lastLetterA = words[0].charAt(words[0].length - 1).toUpperCase();
  const firstLetterB = words[1].charAt(0).toUpperCase();
  const lastLetterB = words[1].charAt(words[1].length - 1).toUpperCase();
  const firstLetterC = words[2].charAt(0).toUpperCase();
  const lastLetterC = words[2].charAt(words[2].length - 1).toUpperCase();

  const letters = [];
  letters.push(firstLetterA, lastLetterA, firstLetterB, lastLetterB, firstLetterC, lastLetterC);
  console.log(letters);
};
firstAndLastLetterInUppercasse(['Hola', 'Adios', 'Gato']);

//esto

const returnExample = (a, b) => {
  const isGreater = a > b;
  if (isGreater) {
    return true;
  } else {
    return false;
  }
};
returnExample(4, 9);

// es igual a esto

const returnExample2 = (a, b) => a > b;

returnExample2(4, 9);
