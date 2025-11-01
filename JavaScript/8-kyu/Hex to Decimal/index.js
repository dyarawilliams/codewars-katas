// Kata Link: https://www.codewars.com/kata/57a4d500e298a7952100035d

// Complete the function which converts hex number (given as a string) to a decimal number.

// Solution 1
// function hexToDec(hexString){
//     return parseInt(hexString, 16)
// }

// Solution 2 - arrow function
const hexToDec = hexString => Number.parseInt(hexString, 16);

module.exports = hexToDec;