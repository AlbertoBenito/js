const printResult = value =>{
    console.log(value)
}

const sumNumbers = (a, b, callback) =>{
    const result = a + b 
    callback(result)
}
sumNumbers (3, 5, printResult)

console.log('___________')


const arrayExample = [ 'a', 'b', 'c']

const callback=(value, index, array) =>{
    console.log(value)
    console.log(index)
    console.log(array)//no se usa nunca
}

arrayExample.forEach(callback)
console.log('___________')
const resultForEach = arrayExample.forEach(letter => {
    return letter.toUpperCase();
    })
    const resultMap = arrayExample.map(letter => {
    return letter.toUpperCase();
    });
    console. log (resultForEach); 
    console. log(resultMap)


console.log('___________')
const numbers = [1, 2, 3, 4, 5, 6];
// // const even = [];
// for (const number of numbers) {
// if(number % 2 ===0) {
// even. push (number);
// }}

const even = numbers. filter(number => number % 2 === 0);
console.log(even)

// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

// - Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//   const array = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 20 }
//   ];

// - Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

// - Utilizando el array que te dejo a continuación resuelve estos dos retos.

//   - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.

//   - Crea una función que reciba un id de usuario y borre ese usuario del array.

//     const users = [
//     {
//     id: "user001",
//     name: "Juan",
//     surname: "Pérez",
//     age: 30
//     },
//     {
//     id: "user002",
//     name: "María",
//     surname: "González",
//     age: 25
//     },
//     {
//     id: "user003",
//     name: "Pedro",
//     surname: "Sánchez",
//     age: 35
//     },
//     {
//     id: "user004",
//     name: "Ana",
//     surname: "Martínez",
//     age: 28
//     },
//     {
//     id: "user005",
//     name: "Luis",
//     surname: "López",
//     age: 40
//     }
//     ];
