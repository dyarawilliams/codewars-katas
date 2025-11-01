// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Solution 1:
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9
// }


// Solution 2 (using arrow function):
const simpleMultiplication = (num) => num % 2 === 0 ? num * 8 : num * 9;

module.exports = simpleMultiplication;