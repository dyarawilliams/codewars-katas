// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Parameters: string(str) with atleast 2 characters
// Returns: same string without the first and last characters
// Example: removeChar('eloquent') -> 'loquen' removeChar('country') -> 'ountr', removeChar('place') -> 'lac'

// Psuedo: Create a function called removeChar that takes in one parameter (a string of two or more characters - named str) and removes the first and last characters from that string.


// Solution 1
// function removeChar(str){
//     str = str.split(''); // divides string into an ordered list
//     let removeFirst = str.shift();
//     let removeLast = str.pop();
//     return str.join('');
// }

// Solution 2
// function removeChar(str){
//     return str.slice(1, -1)
// }

// Solution 3 (Arrow Function)
// Use slice method to extract the first and last index of the string and returns a shallow copy of the remaining characters
const removeChar = str => str.slice(1, -1)

console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('place'))
