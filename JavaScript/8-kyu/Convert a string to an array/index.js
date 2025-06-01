/* 
Write a function to split a string and convert it into an array of words. For example: 

    "Robin Singh" ==> ["Robin", "Singh"]

    "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Solution 1
// function stringToArray(string){
//     return string.split(' ');
// }

// Solution 2 - arrow function
const stringToArray = string => string.split(" ");

module.exports = stringToArray;