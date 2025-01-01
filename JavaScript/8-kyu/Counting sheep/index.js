/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

    The correct answer would be 17.

    Hint: Don't forget to check for bad values like null/undefined
*/

// Param: array of sheeps, boolean
// Return: number of true sheeps
// Example: [true,  true,  true,  false,                  
//           true,  true,  true,  true ,   => 9
//           true,  false, true,  false]

// Psuedo:
// Create a function called countSheeps that takes in a array of sheeps(boolean) and returns the number of sheeps present(true)
// Solution 1
function countSheeps(arrayOfSheep) {
    // Declare a count variable to keep track of # of sheeps present(true)
    let count = 0;
    // Loop through the array of sheeps 
    arrayOfSheep.forEach(x => x === true ? count++ : count)
    return count
}

// Solution 2 (Arrow Function)
const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(x => x === true).length