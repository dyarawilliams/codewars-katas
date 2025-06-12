// Kata Link: https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// Parameters: a string input that contains the age
// Returns: an integer representing the age
// Example: "5 years old" should return 5, "0 years old" should return 0, "9 years old" should return 9

// Pseudocode:
// 1. Define a function getAge that takes an input string
// 2. Use the charAt method to get the first character of the string
// 3. Convert the character to an integer using parseInt

// Constraints: the input string will always start with a digit between 0 and 9
const getAge = (inputString) => parseInt(inputString.charAt(0));

module.exports = getAge;