// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

// Parameters: a string of words
// Returns: a string of words reversed
// Example: "Hello World" --> "World Hello", "Hi There." --> "There. Hi" 

// Psuedo:
// Split string at each word (spaces delimeter)
// Reverse the words at the space delimeter
// join them together

// Solution 1
// function reverse(string){
//   return string.split(' ').reverse().join(' ');
// }

// Solution 2 - arrow function
const reverse = string => string.split(' ').reverse().join(' ')

module.exports = reverse;