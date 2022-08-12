// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Parameters - array of integers(positives and negatives)
// Return - array of integers index 0 count of positives and index 1 sum of negatives
// Examples - ([1,2,3,4,-1,-2,-3,-4] -> [4, -10]), ([0,2,4,0,6,-2,-4,-6,-8] -> [3, -20]

// Psuedocode
// Create a function that takes in an array of positve and negative integers that 
// returns an array of integers which the first element is the count of positives and the second element
// is the sum of negative integers **note that 0 is neither positive or negative(not counted))
function countPositivesSumNegatives(input) {
    // Filter out the positives
    let positiveNums = input.filter(item => item >= 1)
    // Filter out the negatives and find the sum of the integers
    let negativeSum = input.filter(item => item < 0).reduce((acc, c) => acc + c, 0)
    
    let result = [positiveNums.length, negativeSum]
    return result
}