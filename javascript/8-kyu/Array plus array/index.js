// Kata Link: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/javascript

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Solution 1
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, c) => acc + c)
// }

// Solution 2 - arrow function
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, c) => acc + c, 0);

module.exports = arrayPlusArray;