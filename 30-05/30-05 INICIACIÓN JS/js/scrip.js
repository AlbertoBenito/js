function sumNumbers(numberA, numberB) {
  console.log(numberA + numberB);
}

function printName(name, age) {
  console.log('Hola me llamo ' + name + ' y tengo ' + age + ' años.');
}
sumNumbers(4, 8);
sumNumbers(15, 8);
sumNumbers(40, 26);

printName('Carlos', 23);

// # Ejercicios funciones con parámetros

// - Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".

sayHello('Pepe');

function sayHello(name) {
  console.log('Hola ' + name);
}

// - Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(number) {
  console.log(number * number);
}
calculateSquareArea(4);

// - Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(numberA, numberB) {
  console.log((numberA * numberB) / 2);
}
calculateTriangleArea(5, 10, 2);

// - Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculateCircleArea(numberA) {
  console.log(numberA * numberA * 3.14);
}
calculateCircleArea(8);

// - Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(numberA) {
  console.log(numberA * 1.8 + 32);
}

celsiusToFahrenheit(5);

// - Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

function fahrenheitToCelsius(numberA) {
  console.log((numberA - 32) / 1.8);
}

fahrenheitToCelsius(41);

// - Crea una función totalPrice que reciba un precio y le sume el IVA.

function totalPrice(numberA) {
  console.log(numberA * 0.21 + numberA);
}

totalPrice(10);

// - Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note) {
  console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size);
}

writeMessage('Pepe', 'camisetas', 'M');
