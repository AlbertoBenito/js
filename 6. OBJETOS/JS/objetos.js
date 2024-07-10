// const user = {
//   name: 'cesar',
//   age: 79,
//   isActive: false,
//   friends: [],
//   address:{
//     city:'Gotham'
//   }
// };
// user.friends.push('globo');

// console.log(user);

// # Ejercicios

// ## Objetos

// - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const userHistoria = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', ' tocar la guitarra', ' pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(
  `Hola me llamo ${userHistoria.name} ${userHistoria.surname}  tengo ${userHistoria.age} mis hobbies son ${userHistoria.hobbies}. Vivo en la C/${userHistoria.address.street} en la ciudad de  ${userHistoria.address.city} en el estado de ${userHistoria.address.state} mi codigo postal es ${userHistoria.address.postalCode} en ${userHistoria.address.country}. Mi trabajo es ${userHistoria.occupation} y estudie  ${userHistoria.education}. Mis datos de contacto son, NUMERO:${userHistoria.phone}, EMAIL:${userHistoria.email}. Tengo dos mascotas un ${userHistoria.pets[0].type} llamado ${userHistoria.pets[0].name} y un ${userHistoria.pets[1].type} llamado ${userHistoria.pets[1].name}`
  
);


// - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

// //javascript

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

const dataObject = number => {
  for (const number of  data.numbers) {
    data.firstFloor.secondFloor.numbersPlus2.push(number + 2);
    data.firstFloor.thirdFloor.numbersDouble.push(number * 2);
    data.fourthFloor.numbersDividedBy2.push(number / 2);

    if (number % 2 === 0) {
      data.fifthFloor.onlyEven.push(number);
    } else {
      data.fifthFloor.onlyOdd.push(number);
    }
  }
  console.log(data.firstFloor.secondFloor.numbersPlus2);
  console.log(data.firstFloor.thirdFloor.numbersDouble);
  console.log(data.fourthFloor.numbersDividedBy2)
  console.log(data.fifthFloor.onlyEven)
  console.log(data.fifthFloor.onlyOdd)

};
dataObject(data.numbers)








// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    constants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    
    secretCode: ''
  }
};

const wordArray = phrase => {
  const vowels = 'aeiouáéíóú';

  for (const letter of phrase) {
  if (vowels.includes(letter)) {
  data2.firstFloor.vowels.push(letter);
  } else if (letter !== ' ') {
  data2.secondFloor.constants.push(letter);
  }

  data2.fourthFloor.asciiCode.push(letter.charCodeAt());
  }

  data2.fifthFloor.wordsInUppercase = phrase.toUpperCase().split(' ');
  data2.fifthFloor.wordsInLowercase = phrase.toLowerCase().split(' ');

// En este nivel codificarás la frase para que sea un secreto.
// Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
// Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
// Si el caracter es un espacio lo sustituirás por una letra random del alfabeto

let secretCode = '';

const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const consonants = 'bcdfghjklmnñpqrstvwxyz';

for (const letter of phrase.toLowerCase()) {
if (letter === 'a' || letter === 'á') {
secretCode += 1;
} else if (letter === 'e' || letter === 'é') {
secretCode += 2;
} else if (letter === 'i' || letter === 'í') {
secretCode += 3;
} else if (letter === 'o' || letter === 'ó') {
secretCode += 4;
} else if (letter === 'u' || letter === 'ú') {
secretCode += 5;
} else if (consonants.includes(letter)) {
if (letter === 'b') {
secretCode += 'z';
} else {
const position = consonants.indexOf(letter) - 1;
secretCode += consonants.charAt(position);
}
} else if (letter === ' ') {
const randomPosition = Math.floor(Math.random() * alphabet.length);
secretCode += alphabet.charAt(randomPosition);
} else {
secretCode += letter;
}
}

console.log(secretCode);
};

wordArray('Si no estudias acabarás como Victor');
