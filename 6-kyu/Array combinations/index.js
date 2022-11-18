// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// Parameters: array of sub arrays (numbers, positive integers)
// Returns: possibilites count (number of unique arrays formed)
// Examples: solve([[1,2],[3,4],[5,6]]) = 8
//           solve([[1,2],[4,4],[5,6,6]]) = 4  ** Dont count duplicates
//           solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]) = 72

// Psuedo: Create a function called solve that takes in an array of sub arrays named arr, and returns the possibilites count of unique arrays formed picking exactly one element from each sub array

// Solution 1
function solve(arr) {
    // Loop through the array and remove duplicates, find the length of each array set
    // Then reduce the array by multiplying the accumulator to the current number to find the possibilities
    return arr.map(x => [...new Set(x)].length).reduce((a, c)=> a*c)
}

// Solution 2 ( Arrow Function)
const solve = (arr) => arr.map(numbers => [...new Set(numbers)].length).reduce((acc, c) => acc * c, 1)