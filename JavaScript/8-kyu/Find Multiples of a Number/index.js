// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// Parameters: two numbers(integers), positives only
// Return: array of numbers, multiples of first number
// Example: findMultiples(5, 25) => [5, 10, 15, 20, 25]
//          findMultiples(5, 7) => [5]
//          findMultiples(11, 54) => [11, 22, 33, 44]

// Psuedo: Declare a function called findMultiples that takes in two pararameters, the integer and limit. This function should return the muliples of the integer as an array of numbers.

function findMultiples(integer, limit) {
    // create a variable to hold the array
    // Add the multiples elements to the array, if multiple is less than or equal to limit
    // Return the array
    let arr = []
    for(let i = 1; i <= limit; i++) {
        let multiple = integer * i
        if (multiple <= limit) {
            arr.push(multiple)
        }
    }
    return arr
}

console.log(findMultiples(5, 25))
console.log(findMultiples(5, 7))
console.log(findMultiples(11, 54))