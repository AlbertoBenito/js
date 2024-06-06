// # Ejercicios

// ## Strings

// - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else

const wordToUpperOrLower = word =>
{
if
(word. length > 5) {
console. log (word. toUpperCase()) ;
} else {
console. log (word. toLowerCase());
}
}
wordToUpperOrLower ('tatiana')

// - Repite el ejercicio anterior pero con un operador ternario.
const wordToUpperOrLower2 = word => {
  word.length > 5 ? console.log(word.toUpperCase()) : console.log(word.toLowerCase());
};

// - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

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

checkCongucation('vivir', 'comer');

// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

const getTwoRandomLetters = word => {
  const randomNumberA = Math.floor(Math.random() * word.length);
  const randomNumberB = Math.floor(Math.random() * word.length);
  const firstLetter = word.charAt(randomNumberA);
  const secondLetter = word.charAt(randomNumberB);

  return firstLetter + secondLetter;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = getTwoRandomLetters(wordA);
  const second = getTwoRandomLetters(wordB);
  const third = getTwoRandomLetters(wordC);

  console.log(first + second + third);
};

generateWord('Mano', 'Adios', 'Hola');

// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

const getNameAndDomain = email => {
  const atPosition = email.indexOf('@');
  const name = email.substring(0, atPosition);
  const domain = email.substring(atPosition + 1);
  console.log(`El usuario es ${name} El dominio es ${domain}`);
};
getNameAndDomain('hola@trazos.net');



// - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

const getRandomLetter = word => {
  const randomNumber = Math.ceil(Math.random() * word, length);
  const randomLetter = word.charAt(randomNumber);
  console.log(randomLetter);
};

getRandomLetter('Pelo');



// - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

const intercalateLetters = word => {
  console.log(
    word.charAt(0).toLowerCase() +
      word.charAt(1).toUpperCase() +
      word.charAt(2).toLowerCase() +
      word.charAt(3).toUpperCase() +
      word.charAt(4).toLowerCase()
  );
};
intercalateLetters('Adios');



// - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

const generateUsername = (name, surname) => {
  const userNameAndSurname = name.charAt(0).toUpperCase() + surname;
  const randomNumber = Math.ceil(Math.random() * 100);
  console.log(userNameAndSurname + randomNumber);
};
generateUsername('Juan', 'Perez');



//Crea una función que reciba una palabra cualquiera e imprima la palabra con la primera y la  ultima letra en mayuscula

const printUppercaseLetters = word => {
  const firstLetter = word.charAt(0).toUpperCase();
  const lastLetter = word.charAt(word.length - 1).toUpperCase();
  const middlePosition = Math.floor(word.length / 2);
  const middleLeter = word.charAt(middlePosition).toUpperCase();
  const firstSegment = word.substring(middlePosition);
  const secondSegment = word.substring(middlePosition + 1, word.length - 1);
  //const restOfTheword = word.substring(1,word.length -1)
  console.log(firstLetter + firstSegment + middleLeter + secondSegment + lastLetter);
};
printUppercaseLetters('ratón');


