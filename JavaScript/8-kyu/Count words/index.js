// Kata Link: https://www.codewars.com/kata/570cc83df616a85944001315

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

// Parameters: a string 
// Returns: an integer representing the number of words in the string
// Examples: countWords("Hello") returns 1, countWords("Hello, World!") returns 2, countWords("No results for search term `s`") returns 6

// Pseudocode:
// 1. Split the string by whitespace using a regular expression that matches one or more whitespace characters.
// 2. Filter out any empty strings from the resulting array.
// 3. Return the length of the filtered array, which represents the number of words.

const countWords = str => str.split(/\s+/).filter(elem => elem).length;

module.exports = countWords;