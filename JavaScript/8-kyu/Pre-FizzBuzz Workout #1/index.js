// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// Parameters:positive integer greater than or equal to 1
// Returns: array of positive integers
// Examples: preFizz(1) -> [1], preFizz(2) -> [1,2], preFizz(3) -> [1,2,3], preFizz(4) -> [1,2,3,4]

// Pseudo:
// Decalare a function called preFizz that takes in a positive integer (n) that is greater than or equal to 1, and returns positive integers from 1 to n (inclusive).

function preFizz(n) {
    // Declare a vaiable that holds the array of positive integers
    let arr = []
    // Loop through the array adding each number to the array (arr) up to n
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    // Return the array
    return arr
}

module.exports = preFizz;