// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Tags: FUNDAMENTALS, STRINGS, ARRAYS

// Parameters: a string of words or characters
// Returns: the highest scoring word as a string
// Examples: high('man i need a taxi up to ubud'), => 'taxi'
//             high('what time are we climbing up the volcano'), => 'volcano'
//              high('b aa'), => 'b'

// Psuedo: Declare a function called high that takes in a string of words and returns the highest scoring word.

function high(str){
    let alpha = ' abcdefghijklmnopqrstuvwxyz'
    // Split the words into an array using the split method so we can get each character
    // Then determine the score of each word
    const wordScore = word => word.split('').reduce((acc, c) => acc + alpha.indexOf(c), 0)
    // Declare variables that holds the highest scoring word as a string, and the highest score count as a number, 0
    let highestWord = ''
    let highestCount = 0
    // Split the string of words into an array of words using a space delimiter
    // Loop through the array to check the scores of each word
    str.split(' ').forEach(w => {
        const scoreCheck = wordScore(w)
        // console.log(`${w} : ${scoreCheck}`)
        // If the score is greater than the highest count then the highest word will equal to the current word and highest count will equal to the word score which will be the score check 
        if(scoreCheck > highestCount){
            highestWord = w
            highestCount = scoreCheck
        }
    })
    // Return the highest word string that holds the highest score
    return highestWord
}

console.log(high('man i need a taxi up to ubud')) // taxi
console.log(high('what time are we climbing up the volcano')) // volcano
console.log(high('')) // ''
console.log(high('b aa')) // b
