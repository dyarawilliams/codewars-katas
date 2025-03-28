// Kata link: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/javascript

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// Solutuon 1
// var humanYearsCatYearsDogYears = function(humanYears) {
//     return [humanYears, (15 + ((humanYears > 2) ? (9 + (humanYears - 2) * 4) : humanYears == 2 ? 9 : 0)), (15 + ((humanYears > 2) ? (9 + (humanYears - 2) * 5) : humanYears == 2 ? 9 : 0))];
// }

// PREP Method
// Parameters - a number (positive) greater than or equal to 1
// Return - array of numbers (positives)
// Examples - (1) => [1,15,15], (2) => [2,24,24], (10) => [10,56,64]
// Pseudocode - create a function that takes a number as an argument and returns an array of numbers. The first number is the same as the input, the second number is 15 + 9 + 4 * (input - 2) if input > 2, else it is 15 + 9 if input == 2, else it is 15. The third number is 15 + 9 + 5 * (input - 2) if input > 2, else it is 15 + 9 if input == 2, else it is 15.
// The function should return an array of the three numbers.

// Solution 2 - array function
const humanYearsCatYearsDogYears = (humanYears) => [humanYears, 15 + ((humanYears > 2) ? (9 + (humanYears - 2)*4) : humanYears == 2 ? 9 : 0), 15 + ((humanYears > 2) ? (9 + (humanYears - 2)*5) : humanYears == 2 ? 9 : 0)];

module.exports = humanYearsCatYearsDogYears;