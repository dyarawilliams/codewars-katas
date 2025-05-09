// Kata Link: https://www.codewars.com/kata/57280481e8118511f7000ffa

// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// Paramaters: a string called string and a string called separator
// Returns: a string with the words split into characters and joined with the specified separator

// Example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

// Pseudo code:
// 1. Split the string into words by spaces
// 2. For each word, split it into characters
// 3. Join the characters back together with the specified separator
// 4. Join all the resulting "words" back into a sentence with spaces
// 5. Return the final string

function splitAndMerge(string, separator) {
    return string.split(' ').map(i => i.split('').join(separator)).join(' ')
}

module.exports = splitAndMerge;