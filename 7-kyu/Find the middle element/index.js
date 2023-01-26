// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Tags: Arrays, Fundamentals

// Parameters: a array of numbers, positives or negatives
// Returns: a number
// Examples: [5, 10, 14] => 1, [-2, -3.2, 1] => 0, [-2, -3, -1] => 0

// Psuedo: Declare a function called gimme that takes in an array of numbers and returns the index of the triplet array number that is between the other two elements 

function gimme(triplet) {
    // Create a variable that sorts the array in ascending order
    // return the index of the middle element from the triplet
    let sorted = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(sorted[1])
}

console.log(gimme([5, 10, 14]))
console.log(gimme([-2, -3.2, 1]))
console.log(gimme([-2, -3, -1]))