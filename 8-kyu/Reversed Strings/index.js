// Complete the solution so that it reverses the string passed into it.
// 'world => 'dlrow'

// Parameters: a string of characters
// Returns: the string from the parameter taken in reverse
// Examples: ('world') -> dlrow, ('hello') -> olleh, ('javascript') -> tpircsavaj

// Psuedo: Create a function called solution that takes in a string and reverses the order of each character and returns that string reversed.

// Split the string into an array
// Use a method that allows you to reverse the array of strings
// Join the array of strings back together and return this string back to the function

// Solution 1
// function solution(str){
//     return str.split('').reverse().join('')
// }

// Solution 2 - Arrow Function
// const solution = str => str.split("").reverse().join("")

// Solution 3 - Arrow Fuction with Destructuring 
const solution = str => [...str].reverse().join('')

console.log(solution('world'))
console.log(solution('hello'))
console.log(solution('javascript'))