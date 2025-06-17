// Kata Link: https://www.codewars.com/kata/573f5c61e7752709df0005d2

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// Parameters: two arrays of numbers
// Returns: an array of numbers without duplicates sorted in ascending order
// Examples: mergeArrays([1, 3, 5], [2, 4, 6]) => [1, 2, 3, 4, 5, 6], mergeArrays([2, 4, 8], 
// [2, 4, 6]) => [2, 4, 6, 8]

// Psuedocode:
// 1. Concatenate the two arrays
// 2. Use Set to remove duplicates
// 3. Sort the resulting array in ascending order

const mergeArrays = (a,b) => [...new Set(a.concat(b))].sort((x,y) => x - y);

module.exports = mergeArrays;