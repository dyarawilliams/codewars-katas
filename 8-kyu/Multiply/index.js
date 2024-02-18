// This code does not execute properly. Try to figure out why.

// Parameters: a (integer) and b (integer)
// Returns: product of a and b as an integer
// Example: (2,2) -> 4, (5,3) -> 15, (1,7) -> 7, (9,2) -> 18
// Psuedo: Create a function called multiply that takes in two integers and returns the product of them.

// Solution 1
// function multiply(a, b){
    // return the product of the two integers 
//     return a * b;
// }

// Solution 2 - Arrow Function
const multiply = (a, b) => a * b;

console.log(multiply(2,2));
console.log(multiply(5,3));
console.log(multiply(1,7));
console.log(multiply(9,2));