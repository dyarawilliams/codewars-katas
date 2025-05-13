// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

// Parameters: a string
// Returns: a string with each character repeated once
// Examples: "String" -> "SSttrriinngg", "Hello World" -> "HHeelllloo  WWoorrlldd"

// Pseudo code:
// 1. Use the split() method to convert the string into an array of characters
// 2. Use the map() method to iterate over each character in the array
// 3. For each character, repeat it twice using the repeat() method
// 4. Use the join() method to convert the array back into a string
// 5. Return the new string

const doubleChar = (str) => str.split('').map(s => s.repeat(2)).join('');

module.exports = doubleChar;