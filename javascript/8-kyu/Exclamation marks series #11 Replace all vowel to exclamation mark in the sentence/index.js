// Kata Link: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// Parameters: s, a string of characters
// Returns: a string with vowels replaced with exclamation marks
// Examples: ("Hi!" => "H!!", "!Hi! Hi!" => "!H!! H!!", "aeiou" => "!!!!!", "ABCDE" => "!BCD!")
// Pseudocode:
// 1. Define a function replace that takes a string s as input.
// 2. Use the replace method on the string s to find all occurrences of vowels (both lowercase and uppercase).
// 3. Use a regular expression to match all vowels: /[aeiou]/ig
// 4. Replace each vowel with an exclamation mark '!'
// 5. Return the modified string with all vowels replaced by '!'.

// 6. Test the function with various test cases to ensure it works as expected.

// Solution 1
// function replace(s){
//     return s.replace(/[aeiou]/ig, '!')
// }

// Solution 2 - arrow function 
const replace = s => s.replace(/[aeiou]/ig, '!');

module.exports = replace;