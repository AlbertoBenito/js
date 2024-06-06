const numberA = 8;
const numberB = 5;

if (numberA > numberB) {
  console.log('A es mayor que B');
} else {
  console.log('B es mayor que A');
}

// un operador ternario sirve para simplificar un "if else" ---> condición ? true : false

numberA > numberB ? console.log('A es mayor que B') : console.log('B es mayor que B');

// se usa un operador ternario cuando es un if else con treu y false simple (es para resumir la condición e una línea de código)

// OBJETO MATH

/* Los objetos tienen propiedades y métodos (se ecribe punnto detrás para acceder a lo quehay dentro). Las propiedades son las características, son valore sue tiene el objeto, y los métodos son las funciones. */

// En azul salen las propiedades y se ponen con punto solo
console.log(Math.PI);

// os métodos salen en morado y se ponee con paréntesis
console.log(Math.pow(2, 2));
console.log(Math.round(3.2));
console.log(Math.floor(3.8));
console.log(Math.ceil(4.1));
// random genera un número entre 0 y 1, para definir el intervalo hay que multiplicar el resultado. Para redondear se añade delante Math.floor() que redondea siempre hacía abajo
console.log(Math.floor(Math.random() * 10));

// STRING

// La única que propiedad que tienen los srtrings es el length. Los strings funcionan como una lista, cada letra ocupa un lugar en la lista
const word = 'Hola';
console.log('esta es la length ' + word.length);

// charAT() te da la letra indicada
console.log(word.charAt(word.length - 1));

// includes define si la unacadena se encuentra dentro de la cadena incicial
console.log(word.includes('Ho'));

// indexof es el contrario de charAt, le das una letra y te dice en qué posición está, siempre empezando por cero. Si se buca una letra que no esté, te da -1. Diferencia entre mayúscula y minúscula
console.log(word.indexOf('l'));

// touppercase y tolowercase
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// startswith vs endswith definen si la palabra empieza o termina por la cadena recibida
console.log(word.startsWith('ho'));

// substring sirve para extraer un trozo de la cadena
console.log(word.substring(1));

//Template strings
const name = 'Carlos';
const age = 23;

console.log('Hola ' + name + '. Tienes ' + age + ' años.');
console.log(`Hola ${name}. Tienes ${age} años`);
