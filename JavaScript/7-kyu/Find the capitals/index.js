// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Tags: Strings, Arrays, Fundamentals

// Parameters: a string, sequence of characters
// Returns: array of numbers (integers), index of capital characters
// Examples: capitals('dOmiNoES') => [ 1, 4, 6, 7 ]
//           capitals('docuMENTaTiON') =>  [ 4,  5,  6, 7, 9, 11, 12 ]

// Psuedo: Declare a function called capitals that takes in a string, a word and returns the index of each capital letter within the word as an array of numbers.

const capitals = word => {
    // Declare a variable for the placement of the array of indexes of the word
    let arrIndex = []
    // Split the word into an array and find the characters that are uppercase
    // Push the index of the uppercase characters to the new array
	word.split('').filter((char, index) => char === char.toUpperCase() ? arrIndex.push(index) : index)
    // Return the new array created it should return the index of each capital letter within the word as an array of numbers
    return arrIndex
};

console.log(capitals('CodEWaRs'))
console.log(capitals('dOmiNoES')) // [ 1, 4, 6, 7 ]
console.log(capitals('docuMENTaTiON')) // [ 4,  5,  6, 7, 9, 11, 12 ]
