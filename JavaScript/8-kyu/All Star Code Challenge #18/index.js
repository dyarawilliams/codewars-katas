// Kata Link: https://www.codewars.com/kata/5865918c6b569962950002a1

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// Parameters: two parameters, a string (str) and a single character (letter)
// Returns: a integer representing count of occurrences of the letter in the string str
// Examples: strCount("Hello", 'o')  =>  1, strCount("Hello", 'l')  =>  2, strCount("", 'z') =>  0

// Pseudocode:
// 1. Split the string str by the letter and count the resulting parts.
// 2. Subtract 1 from the length of the resulting array to get the count of occurrences.

const strCount = (str, letter) => str.split(letter).length - 1;

module.exports = strCount;