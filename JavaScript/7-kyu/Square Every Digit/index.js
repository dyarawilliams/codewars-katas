// Kata Link: https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer

// Parameters: number or integer
// Returns: number or integer
// Example: (9119) => 811181, (765) => 493625

// Solution 1
// function squareDigits(num){
//     // split digit into an array of integers
//     let arrOfNum = []
//     let arrOfStr = num.toString().split('')
//     arrOfStr.forEach(str => {
//         arrOfNum.push(Number(str))
//     })
//     // find the square of each digit
//     let sq = arrOfNum.map(x =>  x*x)
//     // Concatenate the array
//     let result = +sq.join('')
    
//     return result;
// }

// Pseudo code:
// 1. Convert the number to a string
// 2. Split the string into an array of characters
// 3. Map over the array and square each character
// 4. Join the array back into a string
// 5. Convert the string back to a number
// 6. Return the result
// Use the Number() function to convert the string back to a number
// Use the join() method to concatenate the array into a string
// Use the map() method to square each digit
// Use the split() method to convert the string into an array of characters
// Use the toString() method to convert the number back to a string

// Solution 2
const squareDigits = num => Number(num.toString().split('').map(x => x * x).join(''));

module.exports = squareDigits;