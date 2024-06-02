// const a = 1
// const b = 10
// const c = 5
// const d = 8

// if(a < b && c < d){
//     console.log('todo ok')
// }

// if( a < b || c > d ){
//     console.log('todo ok')
// }





// - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.

const a = 20
const name = 'Carlos'

if( a >= 18){
    console.log('Hola ' + name + ' eres mayor de edad' )
} else if(a <= 18){
    console.log('Hola ' + name + ' eres menor de edad' )
}

// - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.

const b = 10
const c = 70

if( b > c){
    console.log( b )
}else if(b < c){
    console.log (c)
}



// - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.

const d = -3

if( d > 0){
    console.log('positivo' )
}if(d < 0){
    console.log ('negativo')
}if(d === 0){
    console.log ('cero')
}



// - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"

const getHalf = (numberA, numberB, numberC) => {
    const getHalf = ((numberA + numberB + numberC) /3);
    if( getHalf >= 0 &&   getHalf < 5){
        console.log ('suspenso')
      }
    if(getHalf >= 5 &&   getHalf < 8){
        console.log ('aprobado')
    }if( getHalf >= 8){
        console.log('Matricula de honor')
    }  
    
  };
  getHalf(8, 7, 8);

// - Crea una función que reciba tres números y devuelva el mayor de ellos.

const e = 7
const f = 8
const g = 5

if(e > f && g){
    console.log(e + ' es el mayor')
}else if(f > g && e){
    console.log(f + ' es el mayor')
}else if(g > f && e){
    console.log(g + ' es el mayor')
}

// - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.


const h = 4

if(h % 3  === 0 && h % 5 === 0 ){
    console.log(h + ' es divisible por 3 y 5')
}else if(h % 3 === 0 ){
    console.log(h + ' es divisible por 3')
}else if(h % 5 === 0 ){
    console.log(h + ' es divisible por 5')
}else{
    console.log(h + ' no es divisible ni por 3 ni 5')
}



// - Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.

const i = 6
if( i % 2 === 0 ){
    console.log(i + ' es par')
}else{
    console.log (i + ' es impar')
}

// - Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado


const j = 2008

if(j % 4 === 0 && j % 100 !== 0 || (j % 400 === 0)) {
    console.log( j + ' es un año bisiesto')
} else{
    console.log( j + ' no es un año bisiesto')
}



// - Crea una función que reciba dos valores y los sume, la función debe sumar los valores aunque se los mandemos en formato string y SÓLO debe convertirlos a number si llegan como string.