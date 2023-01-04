// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// Parameters: two params, a equals array of strings or numbers(integers), and x is the value to be checked
// Returns: boolean, true if contains the value, x, otherwise false
// Examples: check([66, 101], 66) => true, check(['t', 'e', 's', 't'], 'e') => true, check(['what', 'a', 'great', 'kata'], 'kat') => false

// Psuedo: Declare a function called check that takes in two parameters and array of strings or numbers

// Solution 1
// function check(a, x) {
//     // Check if the array contains the value
//     return a.includes(x)
// }

// Solution 2 
const check = (arr, x) => arr.includes(x)