// DESCRIPTION:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Explain the function 
// The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).

// Parameters: string - The string to normalize.
// Returns: A new string containing the Unicode Normalization Form of the given string.

// Examples: correctPolishLetters("Jędrzej Błądziński") => "Jedrzej Bladzinski", correctPolishLetters("Lech Wałęsa") => "Lech Walesa", correctPolishLetters("Maria Skłodowska-Curie") => "Maria Sklodowska-Curie"

// Psuedo Code: 
// 1. Create a function called correctPolishLetters with a parameter string
// 2. Return the string with the normalize method to convert the string to Unicode Normalization Form D (NFD)
// 3. Use the replace method to remove the diacritics from the string
// 5. Return the string


// Solution 1
// function correctPolishLetters (string) {
//     return string.split('').map(item => item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u0142]/g, 'l')).join('')
// }

// Solution 2 - arrow function
const correctPolishLetters = string => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u0142]/g, 'l')

module.exports = correctPolishLetters;