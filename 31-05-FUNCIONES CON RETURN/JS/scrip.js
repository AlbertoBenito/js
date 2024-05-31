// function getDoubleValue(number) {
//   const double = number * 2;
//   return double;
// }
// const result = getDoubleValue(8);

// console.log(result);

//# Ejercicios funciones con return

// - Crea una función que reciba tres números y devuelva la media entre esos 3 números.

function getHalfValue(numberA, numberB, numberC) {
  const media = (numberA + numberB + numberC) / 3;
  return media;
}
const result1 = getHalfValue(6, 8, 4);
console.log(result1);

const getHalf = (numberA, numberB, numberC) => {
  console.log ((numberA + numberB + numberC) /3) ;
  
};
getHalf(6, 8, 4);

// - Crea una función que reciba un valor de descuento y un precio y devuelva el resultado de aplicar ese descuento al precio.

function getDiscountValue(numberA, numberB) {
  const discount = numberA * numberB - numberA;
  return discount;
}
const result2 = getDiscountValue(20, 0.2);

console.log(result2);

const getDiscount = (numberA, numberB) => {
    console.log ((numberA * numberB ) - numberA) ;
  };
  getDiscount(20, 0.2);

// - Crea una función que reciba dos palabras y devuelva un nuevo string formado por las dos palabras unidas por un guión

// function getNametValue(name, name2) {
//     const string = name  + '-' + name2;
//     return string;
//   }
//   const result3 = getNameValue('Carlos', 'Perez');

//   console.log(result3);

// - Crea una función que reciba un número de kilómetros y los devuelva conviertidos a metros.

function getMetersValue(numberA) {
  const meters = numberA * 1000;
  return meters;
}
const result4 = getMetersValue(2);

console.log(result4);


const getMeters = (numberA) => {
    console.log (numberA * 1000 ) ;
  };
  getMeters(2);

// - Crea una función que reciba un número de horas y las devuelva convertidas a segundos.
function getHourValue(numberA) {
  const hour = numberA * 3600;
  return hour;
}
const result5 = getHourValue(24);

console.log(result5);


const getHour = (numberA) => {
    console.log (numberA * 3600 ) ;
  };
  getHour(24);
