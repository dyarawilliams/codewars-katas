// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

// Solution 1:
// var templateStrings = function(noun, adjective) {
    // return `${noun} are ${adjective}`
// }


// Solution 2:
const templateStrings = (noun, adjective) => `${noun} are ${adjective}`;

module.exports = templateStrings;