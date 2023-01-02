// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// Parameters: a string of words
// Returns: array of sorted words by last character
// Examples: last('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano') => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak') => ['take', 'me', 'semynak', 'to']

// Psuedo: Declare a function called last that takes in one parameter a string of words and returns an array of word sorted alphabetically by the last character in each.

// Split the string into an array of words
// Find the last character in each element
// sort alphabetically by the last character
const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))