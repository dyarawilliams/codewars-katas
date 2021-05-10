/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

// PREP
// Parameters - numbers(integer)
// Returns - sum of the squared results
// Example - [1,2] = 5 or [0,3,4,5] = 50

// Psuedo 
// This function takes in an array of numbers and returns the each number in the array squared sum
function squareSum(numbers){
    // assign sum to 0
    let sum = 0;
    // To Be able to iterate throught the array assigning the sum each time
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i] * numbers[i]
    }
    // Returns the sum
    return sum;
  }
  