// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Tags: Fundamentals, Strings, Arrays

// Parameters: an array of numbers
// Returns: array of numbers and characters which are vowels, 
// Examples: [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106] => 
//           [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
// Psuedo:  Declarea a function called isVow that takes in an array of numbers and returns an array of numbers with the replacement of vowels according to ascii character codes.

const isVow = (a) => a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x)

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))