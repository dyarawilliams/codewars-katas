// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Parameters: string with sets of chars seperated by commas, can be of varying length
// Returns: a new string containing the same chars except the first and last one separated by spaces
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// Psuedo: Declare a function called array that takes in a string variable named arr and returns a shallow copy of the same characters except the first and last characters separtated by spaces.

// Use split method to turn string into array using a delimeter
// Use slice method to remove the first and last elements
// Use join method with the space delimeter to 
// If empty, or if the removal of the first and last items would cause the resulting string to be empty return an empty value such as null


// Solution 1
// function array(arr) {
//     return arr.split(',').slice(1, -1).join(" ") || null
// }

// Solution 2
const array = arr => arr.split(',').slice(1, -1).join(' ') || null

console.log(array("")) // null
console.log(array("A1,B2")) // null
console.log(array("1,2,3")) // 2
console.log(array("1,2,3,4")) // 2 3
console.log(array("1,2,3,4,5")) // 2 3 4
console.log(array("A1,B2,C3,D4,E5")) // B2 C3 D4
