/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
    348597 => [7,9,5,8,4,3]
*/

// Parameters: array of numbers, non-negative(positive)
// Returns: array of numbers of reversed 
// Examples: [1,2,3,4,5] => [5,4,3,2,1], [7,4,3] => [3,4,7]

// Psuedo: 
// Solution 1
// Create an function called digitize taking in a random number and return it as an array of numbers reversed
// function digitize(n) {
//     return String(n).split('').reverse().map(Number)
// }

// Solution 2 (Arrow Function)
const digitize = (n) => {
    // Assign a variable to be able to store numbers in the array
    let arr = []
    // Convert random non-negative number to a string
    let strNum = n.toString()
    // Loop through the number and push it the array => (arr) converting the string to a number
    for(let i = 0; i <= strNum.length-1; i++){
        arr.push(+strNum.charAt(i))
    }
    return arr.reverse()
}