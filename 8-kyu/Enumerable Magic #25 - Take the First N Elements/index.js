// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Parameters: an array of integers(arr), number of integers to return (n) 
// Returns: an array of integers modified
// Examples: 
// ([0,1,2,3,5,8,13], 3) => [0,1,2], 
// ([10, 59, -38, -26, 55], 2) => [10, 59], 
// ([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], 13) => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]

// Psuedo: Declare a function called take that takes in two parameters, arr and n. 
// The first param which is (arr) takes in an array of numbers postive or negative.
// The second param (n) takes in the number of the elements you want to be returned.
// This function should return the first n elements of the array inputed from the first param.

// Use slice method is perfect for this problem because it returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included).
// start and end represent the index of items in that array
// The original array will not be modified.

// Solution 1
// function take(arr, n) {
//     return arr.slice(0, n);
// }

// Solution 2 - arrow function

const take = (arr, n) => arr.slice(0, n);

module.exports = take;