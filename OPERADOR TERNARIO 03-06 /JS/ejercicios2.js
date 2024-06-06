// Función que reciba 2 palabras y te las devuelva unidas por un guión

const wordScript = (wordA, wordB) => {
    console.log(`${wordA}-${wordB}`);
  };
  wordScript('ratón', 'perez');

// Función que reciba una palabra de 5 letras y te diga cuantas vocales tiene

const countVowels = word => {
    let vowelsCounter = 0 
    const vowels = ('aeiouAEIOU');

    if(vowels.includes(word.charAt(0))){
        vowelsCounter++
    }
    if(vowels.includes(word.charAt(1))){
        vowelsCounter++
    }
    if(vowels.includes(word.charAt(2))){
        vowelsCounter++
    }
    if(vowels.includes(word.charAt(3))){
        vowelsCounter++
    }
    if(vowels.includes(word.charAt(4))){
        vowelsCounter++
    }

    console.log(`La palabra ${word} tiene ${vowelsCounter} vocales.`)
}
countVowels('Adios');


// Función que reciba una palabra de 5 letras y la imprima al revés, Adios →>  soidA

const reverseWord = word=> 
console.log(word.charAt(4) + word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0))
reverseWord('Hola')

// Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus digitos. Para el número 123 elresultado deberia ser 6

const sumDigits = number=>{
const numberString = String(number)
const firstNumber = numberString.charAt(0)
const secondNumber = numberString.charAt(1)
const thirdNumber = numberString.charAt(2)

console.log(Number(firstNumber) + Number(secondNumber) + Number(thirdNumber))
}

sumDigits(453)