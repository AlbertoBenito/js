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
