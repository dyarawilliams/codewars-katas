// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Parameters: array of integers as strings and numbers
// Returns: the sum of the array values if all are numbers
// Examples: [9, 3, '7', '3'] => 22, 
//           ['5', '0', 9, 3, 2, 1, '9', 6, 7]) => 42, 
//           ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41

// Psuedo: Declare a function named sumMix that takes in an array called x, and returns the sum of the array converting all values that is NaN to numbers.

// Solution 1
function sumMix(x){
    // Loop through each element 
    // Calculate the sum of each element checking if the current value is a number if not then convert to a number
    // Using Number as a function will convert the values in the array to a numerical value 
    return x.reduce((acc, c) => acc + Number(c), 0)
}

// Solution 2 ( Arrow Function)
// The unary plus operator on the current value attempts to convert it into a number if it isnt't already
const sumMix = (arr) => arr.reduce((sum, c) => sum + (+c), 0)
