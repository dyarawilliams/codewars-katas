// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier


// Parameters: a string, words
// Returns: a string, capitilized beginning of word last index of each word lowercased
// Examples: "My name is John" => "My NAMe Is JOHn"
//           "this is an example" => "THIs Is An EXAMPLe"
//          "Hello World" => "HELLo WORLd"

// Psuedo: Declare a function called alienLanguage that takes in a string, str, that returns a sentence capitialized with the last letter in each word turned to lowercase.

// Split the sentence into words
// Loop through each word, returning a copy of the beginning of the word uppercased
// then add the last letter converted to lowercase
const alienLanguage = str => str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ')

console.log(alienLanguage("My name is John"))
console.log(alienLanguage("this is an example"))
console.log(alienLanguage("Hello World"))
