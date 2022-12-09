// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Tags: Strings, Arrays, Fundamentals

// Parameters: a string of characters or symbols
// Returns: a new string, if character appears only once replace with "(" else more than once then ")"
// Examples: “din” => “(((“ , characters where there is no duplicates
//           “recede” => “()()()”, characters with duplicates present 
//           "(( @" => "))((", symbols with duplicates present

// Psuedo: Declare a function called duplicateEncode that takes in a word(string), and returns a new string where each character is ( if that character appears only once, or ) if that character appears more than once in the original string.

function duplicateEncode(word){
    // Split the word into an array
    // Loop through the word of each character, comparing the original array to the new array 
    // If a character appears only once then return "(" otherwise if the character is a duplicate return ")"
    return word.split('').map((char, i, arr) => arr.indexOf(char) == arr.lastIndexOf(char) ? "(" : ")").join('')
}

console.log(duplicateEncode("din")) // "(((""
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // "(())())"
console.log(duplicateEncode("(( @")) // "))(("