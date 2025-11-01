// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// PREP method:
// P: two integers a and b where a < b
// R: an array of all integers between a and b, including them
// E: a = 1, b = 4 => [1, 2, 3, 4]
// P: a = -2, b = 2 => [-2, -1, 0, 1, 2]
//    a = 5, b = 5 => [5]

// Psuedo code:
// 1. Create a function called between that takes two parameters a and b
// 2. Create an empty array called arr
// 3. Use a for loop to iterate from a to b (inclusive)
// 4. Inside the loop, push each number into the arr array
// 5. Return the arr array

// Solution 1
// function between(a, b) {
//     let arr = []
//     for(let i = a; i <= b; i++){
//       arr.push(i)
//     }
//     return arr
// }


// Solution 2 - arrow function 
const between = (a, b) => {
    let arr = []
    for(let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
}
module.exports = between;