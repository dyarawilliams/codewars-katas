// Kata Link: https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7

// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!

// function sumSquares(array) {
//   var result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] ** 2;
//   }
//   return result;
// }

// Explanation:
// The original function iterates through each element of the array, squares it, and accumulates the sum in a variable called result. The refactored version uses the reduce method to achieve the same result in a more concise manner.

const sumSquares = array => array.reduce((total, number) => total + number ** 2, 0);

module.exports = sumSquares;