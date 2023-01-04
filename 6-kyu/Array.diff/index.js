// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Tags: Arrays, Fundamentals, Algoritms

// Parameters: two arrays of numbers (integers), positive and negatives
// Returns: array of numbers, 
// Examples: [1,2,2], [1] => [2,2]
//           [1,2,2], [] => [1,2,2]
//           [-5,1,15],[-5] => [ 1, 15 ]

// Psudeo: Declare a function called arrayDiff that takes in two parameters, arrays of numbers, and returns the array with the removal of values if the first array has elements present in the second array. 

// Use a method that loops through the array and returns results (filter)
// Also it Check if the first array contains the second array elements (includes)
// If so then remove those elements
const arrayDiff = (a, b) => a.filter(x => !b.includes(x))

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], []))