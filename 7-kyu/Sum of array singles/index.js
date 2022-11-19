// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Parameters: array of positive integers(whole numbers)
// Returns: sum of the array of integers occuring once, excluding duplicates
// Example: [4,5,7,5,4,8] => 15
//          [9,10,19,13,19,13] => 19
//          [16,0,11,4,8,16,0,11] => 12
//          [5,10,19,13,10,13] => 24

// Psuedo: Declare a function called repeats that takes in a array of positive integers (whole numbers), and returns the sum of the numbers that only occur once.

// Solution 1
function repeats(arr){
    // Loop through the array and remove the duplicate numbers leaving the number that only occur once
    // Find the sum of the modified array
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,c)=>a+c,0)
}

// Solution 2 (Arrow Function)
const repeats = arr => arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((sum, c) => sum + c, 0)
