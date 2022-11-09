// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. 

// Parameters: array of numbers
// Returns: sum of the squared results
// Examples: [1,2] => 5, [0,3,4,5] => 50

// Psuedo: Create a function that takes in an array of numbers and return the sum of each number squared

// Solution 1
// function squareSum(numbers){
//     // assign sum to 0
//     let sum = 0;
//     // To Be able to iterate throught the array assigning the sum each time
//     for(let i = 0; i < numbers.length; i++){
//       sum += numbers[i] * numbers[i]
//     }
//     // Returns the sum
//     return sum;
// }

// Solution 2 
// function squareSum(numbers){
//   return numbers.reduce((sum, n) => { return (n*n) + sum } , 0)
// }

// Solution 3 (Arrow Function)
const squareSum = (numbers) => numbers.reduce((sum, current) => sum + (current * current), 0)