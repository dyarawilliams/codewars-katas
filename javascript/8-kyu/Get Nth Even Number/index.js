// Kata link: https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/javascript

// Return the Nth Even Number
// Example(Input --> Output)
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
//  100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// Solution 1 
// function nthEven(n){
//     return (n * 2) - 2
// }

// Solution 2 - using the exponentiation operator (**)
// PREP method
// Parameters: a positive integer n
// Returns: the N-th even number
// Example:
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// Pseudocode:
// 1. Subtract 1 from n to get the index of the N-th even number
// 2. Multiply the index by 2 to get the N-th even number
// 3. Return the result
const nthEven = n => --n*2

module.exports = nthEven;