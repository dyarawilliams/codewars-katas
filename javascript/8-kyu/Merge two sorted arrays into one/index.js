// Kata Link: https://www.codewars.com/kata/5899642f6e1b25935d000161

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Parameters: 2 array of numbers or integers
// Returns: a single array of numbers or integers that are sorted in ascending order and do not contain duplicates

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// Solution 1
// function mergeArrays(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2).sort((a,b) => a - b))]
// }

// Psuedo code:
// 1. Create a function called mergeArrays that takes two arrays as parameters
// 2. Use the filter method to remove duplicates from arr1 by checking if each item is included in arr2
// 3. Use the concat method to combine the filtered arr1 with arr2
// 4. Use the sort method to sort the combined array in ascending order
// 5. Return the sorted array

// Solution 2 - arrow function
const mergeArrays = (arr1, arr2) => arr1.filter(item => !arr2.includes(item)).concat(arr2).sort((a,b) => a-b)

module.exports = mergeArrays;