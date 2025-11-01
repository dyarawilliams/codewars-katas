// Kata Link: https://www.codewars.com/kata/57fae964d80daa229d000126

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Paramaters: string: a string that may or may not end with an exclamation mark
// Returns: a string with the exclamation mark removed if it is at the end, otherwise the original string

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// Note
// Please don't post issue about difficulty or duplicate.

// Psuedo code:
// 1. Check if the last character of the string is an exclamation mark
// 5. Use string.endsWith() to check if the string ends with an exclamation mark
// 2. If it is, remove it and return the string
// 4. Use string.slice() to remove the last character if it is an exclamation mark
// 3. If it isn't, return the string as is

// Solution 1
// function remove (string) {
//     return string[string.length - 1] === '!' ? string.slice(0,-1) : string ;
// }

// Solution 2
const remove = string => string.endsWith('!') ? string.slice(0, -1) : string;

module.exports = remove;