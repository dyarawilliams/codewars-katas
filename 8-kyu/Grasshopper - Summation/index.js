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

var summation = num => {
    let running_total = 0;
    for(let i = 1; i <= num; i++){
        running_total += i
    }
    return running_total;
}

console.log(summation(2))
console.log(summation(8))
console.log(summation(1))