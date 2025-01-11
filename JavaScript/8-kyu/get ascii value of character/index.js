// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

// Parameters: A character
// Returns: The ASCII value of the character
// Example: getASCII('A') => 65, getASCII(' ') => 32, getASCII('!') => 33

// Psuedo Code: 
// 1. Create a function that takes in a character as a parameter
// 2. Return the ASCII value of the character

// Solution 1
// function getASCII(c){
//     return c.charCodeAt()
// }

// Solution 2 
// Generate a function that allows me to get the ascii value of a character
const getASCII = c => c.charCodeAt()

module.exports = getASCII;