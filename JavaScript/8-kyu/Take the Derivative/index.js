
// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

// Parameters - two integers
// Return - string

// Examples - derive(7, 8) => '56x^7', 
// derive(5, 9) => '45x^8', derive(9, 5) => '45x^4'
// derive(4, 3) => '12x^2', derive(15, 9) => '135x^8'

//  7 * 8 = 56, 8 - 1 = 7, return '56x^7'
//  5 * 9 = 45, 9 - 1 = 8, return '45x^8'

// Pseudocode - 
// multiply the two integers and subtract 1 from the exponent
// return the result as a string

// Solution 1
// function derive(coefficient,exponent) {
//     return `${(coefficient * exponent)}x^${exponent-1}`
// }

// Solution 2 - arrow function 
const derive = (coefficient,exponent) => `${coefficient * exponent}x^${exponent-1}`

module.exports = derive;