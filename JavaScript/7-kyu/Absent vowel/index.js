// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// Tags: Arrays, Stirngs

// Hint: loop through array of vowels and check for the indexOf in the original string. If -1 you found the missing one! 

// Pameters: a string, with a missing vowel
// Returns: a number, the index of the missing vowel
// Examples: absentVowel("John Doe hs seven red pples under his bsket") => 0
//           absentVowel("Bb Smith sent us six neatly arranged range bicycles") => 3

// Psuedo: Declare a function called absentVowel that takes in a string, x, and returns the index of which vowel is missing from the string.

const absentVowel = x => {
    // Create a variable for the vowel that considers the correct index for each
    let vowels = 'aeiou'
    // Loop through the vowels, no need to check for uppercase characters
    // Find the index of the vowels 
    // Return that number of the indexed vowel
    for(var i in vowels){
        if(x.indexOf(vowels[i]) == -1){
            return Number(i)
        }
    }
}
console.log(absentVowel("John Doe hs seven red pples under his bsket"))
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))