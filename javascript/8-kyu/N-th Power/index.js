// Kata Link(retired): https://www.codewars.com/kata/57d814e4950d8489720008db

// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// // Solution 1
// function index(array, n){
//     return isNaN(array[n]**n) ? -1 : array[n]**n
// }

// Solution 2 - arrow function

// PREP method 
// Parameters: an array of positive numbers and a non-negative number N
// Returns: the N-th power of the element in the array with the index N or -1 if N is outside of the array

// Example:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// Pseudocode:
// 1. Check if N is less than the length of the array
// 2. If it is, return the N-th power of the element at index N
// 3. If it is not, return -1
// ** Use the exponentiation operator (**) to calculate the power
// ** Use the length property of the array to check if N is within bounds
// ** Use the ternary operator to return the result in one line
const index = (array, n) => n < array.length ? array[n] ** n : -1;

module.exports = index;