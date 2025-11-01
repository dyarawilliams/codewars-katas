// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// Parameters:
// Returns: 
// Examples: 

// Pseudo Code:
// 1. Define a function named parseF that takes a single argument s.
// 2. Use parseFloat to attempt to convert s to a floating point number.
// 3. Check if the result of parseFloat is NaN (Not-a-Number).
// 4. If the result is NaN, return null.
// 5. If the result is a valid number, return the result.

// Solution 1
// function parseF(s) {
//     return isNaN(parseFloat(s)) ? null : parseFloat(s);
// }

// Solution 2 - arrow function
const parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);

module.exports = parseF;