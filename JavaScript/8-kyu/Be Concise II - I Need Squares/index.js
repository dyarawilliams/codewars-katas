// Kata Link: https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e

// Be Concise II - I Need Squares
// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

// There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
// Don't you think the array parameter is a bit wordy? ;)
// Good luck! :D

// function squaresOnly(array) {
//   var result = [], isSquare;
//   for (let i = 0; i < array.length; i++) {
//     isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
//     for (let k = 0; k <= 10; k++) {
//       if (k ** 2 === array[i]) {
//         isSquare = true;
//       }
//     }
//     if (isSquare) {
//       result[result.length] = array[i];
//     }
//   }
//   return result;
// }

// Explanation:
// - `a.filter(...)` creates a new array containing only the elements that pass the test implemented by the provided function.
// - `Math.sqrt(n) % 1 === 0` checks if the square root of `n` is an integer, which means `n` is a perfect square.
// - The function returns the new array containing only the perfect squares from the original array `a`.

const squaresOnly = a => a.filter(n => Math.sqrt(n) % 1 === 0);

module.exports = squaresOnly;
