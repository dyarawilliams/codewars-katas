// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// Parameters: array of integers(numbers), positives only
// Return: new array of integers(numbers), square root or square 
// Example: [ 4, 3, 9, 7, 2, 1 ] => [ 2, 9, 3, 49, 4, 1 ]
//          [ 100, 101, 5, 5, 1, 1 ] => [ 10, 10201, 25, 25, 1, 1 ]

// Psuedo: Declare a function called squareOrSquareRoot that takes in a array of numbers and returns a new array 
// if the number has an integer for square root find the square root, else square the number.

const squareOrSquareRoot = (array) => array.map(num => (num > 0 && Math.sqrt(num) % 1 === 0) ? Math.sqrt(num) : num**2);