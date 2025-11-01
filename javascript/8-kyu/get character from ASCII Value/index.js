// Kata Link: https://www.codewars.com/kata/55ad04714f0b468e8200001c/javascript

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

// The fromCharCode() method returns a string created by using the specified sequence of Unicode values.

// Parameters: a number representing the ASCII value
// Returns: a string representing the character corresponding to the ASCII value
// Example: (55) => '7', (56) => '8', (57) => '9', (58) => ':'

// Psuedocode:
// 1. Create a function getChar that takes a number as an argument
// 2. Use String.fromCharCode() to convert the number to its corresponding ASCII character
// 3. Return the character
// 4. Test the function with different ASCII values

// Solution 1
// function getChar(c){
//     return String.fromCharCode(c)
// }

// Solution 2 - arrow function oneliner
const getChar = c => String.fromCharCode(c);

module.exports = getChar;