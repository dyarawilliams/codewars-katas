// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//     let sum = 0
//         for(let i = 1; i <= num; i++){
//             sum += i
//             console.log(`Count: ${i} and Sum: ${sum}`)
//         }
//     return sum
// }

// Parameters: positive integers (numbers)
// Returns: sum of all numbers from 1 to number given
// Examples: summation(1) -> 1, summation(2) -> 3, summation(8) -> 36

// Psuedo: Create a function called summation that takes in a number and returns the sum of each number starting at 1 to the number given.

// Solution 1
// var summation = num => {
//     let running_total = 0;
//     for(let i = 1; i <= num; i++){
//         running_total += i
//     }
//     return running_total;
// }

// Solution 2
let summation = num => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        // console.log(`Sum start: ${sum}`)
        sum += i;
        // console.log(`Sum after plus i: ${sum}`)
    }
    return sum;
    // console.log(`Sum total: ${sum}`)
}

console.log(summation(1))
console.log(summation(2))
console.log(summation(8))