// Kata link: https://www.codewars.com/kata/59c8b38423dacc7d95000008

// DESCRIPTION:
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// Happy Coding ^_^

// Solution 1
// function isValid(formula){
//     if((formula.includes(1) && formula.includes(2)) || (formula.includes(3) && formula.includes(4))) return false
//     else if((formula.includes(5) && !formula.includes(6)) || (!formula.includes(5) && formula.includes(6))) return false
//     else if(!(formula.includes(7) || formula.includes(8))) return false
//     else return true
// }

// PREP
// Parameters: an array of integers (1-8) representing materials
// Returns: a boolean value indicating whether the formula is valid or not
// Example: [1,3,7] => true, [7,1,2,3] => false, [1,3,5,7] => false
// Pseudocode: use if-else statements to check the conditions for validity
// 1. Check if both 1 and 2 are present or both 3 and 4 are present, return false
// 2. Check if 5 is present without 6 or 6 is present without 5, return false
// 3. Check if neither 7 nor 8 is present, return false
// 4. If all conditions are satisfied, return true
// 5. Use array methods like includes() to check for the presence of elements in the array


// Solution 2 - array function with ternary operator
const isValid = (formula) => {
  return (formula.includes(1) && formula.includes(2)) ||
    (formula.includes(3) && formula.includes(4))
    ? false
    : (formula.includes(5) && !formula.includes(6)) ||
      (!formula.includes(5) && formula.includes(6))
    ? false
    : !(formula.includes(7) || formula.includes(8))
    ? false 
    : true;
};

module.exports = isValid;
