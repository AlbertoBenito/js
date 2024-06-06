// const numberA = 8
// const numberB = 5

// if(numberA > numberB){
//     console.log
// }

//condicion ? true

//MATH
console.log(Math.pow(2, 3));
console.log(Math.round(2.9));
console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
console.log(Math.random()); //siempre * uno mas
console.log(Math.floor(Math.random() * 11)); //siempre * uno mas

//WORD

const word = 'Monitor';

console.log(word.length);
console.log(word.charAt(2));
console.log(word.charAt(word.length - 1)); //Ultima posicion
console.log(word.includes('Mo'));
console.log(word.indexOf('m'));
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.startsWith('Mon'));
console.log(word.endsWith('Mon'));
console.log(word.substring(3, 5));

const name1 = 'Carlos';
const age = 23;

console.log('Hola ' + name1 + ' . Tienes ' + age + ' años. ');

console.log(`Hola ${name1}. Tienes ${age} años.`);

// # Ejercicios

// ## Strings

// - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else
const name = 'Carlos';
const capsWord = name.length;
if (capsWord - 1 >= 5) {
  console.log(name.toUpperCase());
} else {
  console.log(name.toLowerCase());
}

// - Repite el ejercicio anterior pero con un operador ternario.
capsWord - 1 >= 5 ? console.log(name.toUpperCase()) : console.log(name.toLowerCase());

// - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".
//profe

//umberto
const checkCongucation = (verb1, verb2) => {
  const getConjugation = verb => {
    if (verb.endsWith('ar')) {
      return 'primera conjugacion';
    } else if (verb.endsWith('er')) {
      return 'segunda conjugacion';
    } else if (verb.endsWith('ir')) {
      return 'tercera conjugacion';
    } else {
      return 'El verbo no es del modo infinitivo';
    }
  };

  const resultVerb1 = getConjugation(verb1);
  const resultVerb2 = getConjugation(verb2);

  console.log(`El verbo ${verb1} es de la ${resultVerb1} y el verbo ${verb2} es de la ${resultVerb2}`);
};

checkCongucation('andar', 'dormir');

// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

const generateWord = (a, b, c) => {
  a = a.substring(3) + a.substring(2, 3);
  b = b.substring(1, 2) + b.substring(3, 4);
  c = c.substring(2, 3) + c.substring(1, 2);

  const newWord = a + b + c;
  return newWord;
};

console.log(generateWord('Hola', 'Adios', 'Mano'));

// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

const email = 'dorian@gmail.com';

const separateEmail = email => {
  const part = email.split('@');
  const partName = part[0];
  const partEmail = part[1];

  console.log(`El usuario es ${partName}`);
  console.log(`El dominio es ${partEmail}`);
};

// - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

const randomLetter = word => word.charAt(Math.random() * word.length - 1);

console.log(randomLetter('Computadora'));

// - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

const intercalateUpperCaseLetter = word => {
  if (word.length !== 5) {
    return 'La palabra debe contener 5 letras';
  }

  const result =
    word[0].toLowerCase() +
    word[1].toUpperCase() +
    word[2].toLowerCase() +
    word[3].toUpperCase() +
    word[4].toLowerCase();

  return result;
};

console.log(intercalateUpperCaseLetter('Adios'));

// - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

const generateUsername = (name, subname) => {
  const firstName = name.charAt(0);
  const randomValue = Math.ceil(Math.random() * 100);

  return firstName + subname + randomValue;
};

console.log(generateUsername('Juan', 'Perez'));
