// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Parameters - string of words
// Results - string of one or multiple words separated by spaces with 
//    'ay' appended to the end of each word unless that word is a punctuation mark
// Example - 'Pig latin is cool' -> 'igPay atinlay siay oolcay' || 'This is my string' -> 'hisTay siay ymay tringsay'

// Pseudocode - 
// Split the string into individual words, then split each word into two parts- 
// the first letter ,and the rest of the string. 
// Reverse the order of these parts, and concatanate them back together. 
// Check if a word is actually a punction mark and if it is NOT, then add 'ay' to the end. Concat the the individual words back into a single string and return.
function pigIt(str){
    let marks = ['.', '!', '?', '"', ',']
    let result = str.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    return result
}