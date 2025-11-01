// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// [Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

// [Vowel consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

// Tags: Strings, Arrays, Algorithms

// Parameters: an array of strings
// Returns: an array of strings with all consecutive duplicate letters removed
// Examples: dup(["abracadabra","allottee","assessee"]) => ["abracadabra","alote","asese"]
//            dup(["kelless","keenness"]) => ["keles","kenes"]
//   dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) => ['codewars','picaniny','hubububo']

// Psudeo: Declare a function called dup that takes in an array of strings and returns that array of strings without the consectutive duplicate letter in each element.

function dup(s) {
    // Loop through each element, then split it into characters
    // Filter out the consecutive letters and join the letters back together
    return s.map(str => str.split('').filter((char, index) => char != str[index - 1]).join(''))
}

console.log(dup(["abracadabra","allottee","assessee"]))
console.log(dup(["kelless","keenness"]))
console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))