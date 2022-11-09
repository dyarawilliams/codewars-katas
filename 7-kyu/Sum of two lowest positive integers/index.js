// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Parameters: array of positive integers, whole numbers greater than zero, array has a min of 4 integers
// Results: sum of two lowest positive integers, a number
// Examples: [15, 28, 4, 2, 43]) => 6
// [23, 71, 33, 82, 1]) => 24
//  [5, 8, 12, 19, 22]) => 13

// Psuedo-code: Sort the array from smallest to largest. 
// Capture the two smallest array elements and return their sum.

// Solution 1
function sumTwoSmallestNumbers(numbers) {  
    let arr = numbers.sort((a,b) => a-b)
    return arr[0] + arr[1]
}

// Solution 2

function sumTwoSmallestNumbers(numbers) {  
    let firstLowest = Math.min(...numbers)
    numbers.splice(numbers.indexOf(firstLowest),1)
    let secondLowest = Math.min(...numbers)
    return firstLowest + secondLowest
}