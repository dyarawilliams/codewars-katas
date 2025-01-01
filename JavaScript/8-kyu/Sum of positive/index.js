// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// Tags: Arrays & Fundamentals

// Parameters: array of numbers, positive and negative integers
// Returns: sum of all positive numbers
// Examples: [1,2,3,4,5] => 15, [-1,2,3,4,-5] => 9, [] => 0

// Psuedo: Create a function that takes in an array of numbers and returns the sum of all positive numbers.

// Solution 1
// function positiveSum(arr) {
//     let sum = 0
//     for(let key in arr){
//       if(arr[key] > 0){
//         sum += arr[key]
//       }
//     }
//     return sum
// }

// Solution 2 (Arrow function)
// const positiveSum = (arr) => {
//   let sum = 0;
//   // Iterate through the array and filter out the positive numbers
//   for(let i = 0; i < arr.length; i++){
//     // If the current number of the array is a positive number, then 
//     if(arr[i] > 0){
//       // Add current number to sum
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// Solution 3 (Array Methods)
const positiveSum = (arr) => arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);