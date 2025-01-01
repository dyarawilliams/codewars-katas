// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// Parameters: a string 
// Returns: a new string that showing it transformed
// Examples: 'Example string' => 'STRING eXAMPLE', 
//           'Chv     Np     Rdue   Lp     Jjzq Bba' => '  bBA jJZQ     lP   rDUE     nP     cHV'

// Psuedo: Declare a function named stringTransformer that takes in a string, str, and transforms the input 
// so that the case of every character is switched meaning if the character is lowercase then it is changed to uppercase, and 
// if uppercase then it will be lowercase

// Loop through string to transform characters then join the array. Split the array to reverse it by blank space
// Reverse can only happen on a array so that is why I will use split, then join the array back by blank space to make a string
const stringTransformer = (str) => [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('').split(' ').reverse().join(' ')