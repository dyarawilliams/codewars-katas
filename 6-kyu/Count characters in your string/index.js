// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Tags: Strings, Fundamentals

// Parameters: a string
// Returns: an object containing each occurrence of a character
// Examples: 'aba' => {'a': 2, 'b': 1}
//           "" => {}
//           'common' => {'c': 1, 'o': 2, 'm': 2, 'n': 1}

// Psuedo: Declare a function called count that takes in a string and counts the occurrences of each character in the string.

// Solution 1
const count = (string) => {
    let obj = {}
    // Put each letter in the string as the key of the object
    // Put the number of occurrences each letter has occured as the value
    for (let i = 0; i < string.length; i++) {
        if ((string.match(new RegExp(string[i], "g"))).length >= 1) {
            obj[string[i]] = (string.match(new RegExp(string[i], "g"))).length;
        }
    }
    return obj
}

// Solution 2
function count(string){
    // Create emppty object literal
    let charCount = {}
    // Split string into array, without delimiter then use forEach to loop through each individual letter and return the new object literal
    string.split('').forEach(char => charCount[char] ? charCount[char]++ : charCount[char] = 1);
    return charCount;
}

console.log(count('aba'))
console.log(count('common'))