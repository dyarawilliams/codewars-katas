// Kata link: https://www.codewars.com/kata/559d2284b5bb6799e9000047/javascript

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space


// Parameters: string (words)
// Returns: array of string - length of word added at the end of string inputed
// Example: 'apple ban' => ['apple 5', 'ban 3']

// Psuedo: Split it into an array of words, 
// Use the map function to iterate over each word. 
// For each word, it appends the word's length to the word itself, separated by a space, and 
// Return the modified array

const addLength = (str) => str.split(' ').map(word => word + " " + word.length);

module.exports = addLength;