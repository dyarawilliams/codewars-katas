// Kata Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// PREP method
// Parameters: array of numbers or integers
// Returns: number
// Examples: sumArray(null) => 0, sumArray([]) => 0, sumArray([3]) => 0, sumArray([3,5]) => 0, sumArray([6, 2, 1, 8, 10]) => 16

// Pseudocode: Declare a function called sumArray that takes an array as an argument. Check if the input is null or has 2 or fewer elements. If so, return 0. Sort the array to find the highest and lowest values. Remove the first (lowest) and last (highest) elements. Calculate the sum of the remaining elements and return it.

function sumArray(array) {
    // Check if the input is null or 2 or fewer elements
    if (!Array.isArray(array) || array.length <= 2) {
        return 0; // Return 0 for null, undefined, non-array, or arrays with 2 or fewer elements
    }

    // Sort the array to find the highest and lowest values
    const sortedArray = array.slice().sort((a, b) => a - b);
    
    // Remove the first (lowest) and last (highest) elements
    sortedArray.pop(); // Remove the highest value
    sortedArray.shift(); // Remove the lowest value

    // Calculate the sum of the remaining elements
    return sortedArray.reduce((sum, num) => sum + num, 0);
}

module.exports = sumArray;