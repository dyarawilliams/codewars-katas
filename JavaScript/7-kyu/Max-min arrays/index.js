// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

// Tags: Arrays, Fundamentals

// Parameters:
// Returns: 
// Examples: [15,11,10,7,12] => [15,7,12,10,11]
//           [91,75,86,14,82] => [91,14,86,75,82]
//           [84,79,76,61,78] => [84,61,79,76,78]


// Psuedo: Declare a function called solve that takes in an array of unique elements, and returns a new array sorted so that the first max value is followed by the first minimum, followed by second max value then second min value, etc

// Sort the array in descending order .sort((a,b) = > b - a) to get [ 15, 12, 11, 10, 7 ]
// Slice the original array which will create a new array to hold the next change.
// Map through the array using the index to separate the highest from lowest value from the previous array. 
// If the index can be divided by 2, then pop(remove last element from the array), and it goes into the new sliced array. If the index cannot be divided by 2 evenly then arr[index/2] ??

const solve = (arr) => arr.sort((a,b) => b - a).slice().map((value, index) => index % 2 ? arr.pop() : arr[index/2])

console.log(solve([15,11,10,7,12]))
console.log(solve([91,75,86,14,82]))