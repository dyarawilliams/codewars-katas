/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0
    makeNegative(0.12); // return -0.12

    Notes:

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

// Parameters: a number (num)
// Returns: the number given negative
// Examples:

// Psuedo: Create a function called makeNegative that takes in a number and returns the number given as a negative integer.

// Solution 1
// function makeNegative(num) {
//     return num > 0 ? num * -1 : num;
// }

// Solution 2 - Arrow Function 
const makeNegative = num => num > 0 ? num * -1 : num;

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))