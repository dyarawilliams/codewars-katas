// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

// Parameters: 2 array of numbers
// Returns: boolean true if sum of squares of a is greater than sum of cubes of b, otherwise false
// Example: arrayMadness([4, 5, 6], [1, 2, 3]) should return true
// arrayMadness([1, 2], [3, 4]) should return false

// Pseudocode:
// 1. Define a function `arrayMadness` that takes two arrays `a` and `b` as parameters.
// 2. Use the `reduce` method to calculate the sum of squares of elements in array `a`.
// 3. Use the `reduce` method to calculate the sum of cubes of elements in array `b`.
// 4. Compare the two sums and return true if the sum of squares is greater than the sum of cubes, otherwise return false.

// Constraints: a and b are arrays of integers with length >= 1
// Note: The function should handle arrays of any length, as long as they are not empty.

function arrayMadness(a, b) {
    let sumOfSquares = a.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    let sumOfCubes = b.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    return sumOfSquares > sumOfCubes
}

module.exports = arrayMadness;