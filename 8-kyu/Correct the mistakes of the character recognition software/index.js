// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Tags: Fundamentals, Strings

// Parameters:
// Returns:
// Example: 
// Psuedo: Declare a function called correct that takes one parameter: a valid string with mistakes and returns a string with corrected characters.

function correct(string) {
    let ref = { '5': 'S', '0': 'O', '1': 'I' }
    // Change string into an array to Loop over each character
    // If the character is misinterpreted, correct it
    // return the result
    return string.split('').map(char => ref.hasOwnProperty(char) ? ref[char] : char).join('')
}