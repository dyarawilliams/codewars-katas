// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// Parameters - You will be given a two-dimensional array of numbers called array (each array will have the same length).
// Returns - You need to return a string.

// Examples 
// expect(toCsvText([[ 0, 1, 2, 3, 4 ], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ], [ 30,31,32,33,34 ]])).toBe('0,1,2,3,4\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
// expect(toCsvText([[ 0, 1 ], [ 2, 3 ], [ 4, 5 ]])).toBe('0,1\n2,3\n4,5');
// expect(toCsvText([[ 0 ], [ 2 ], [ 4 ], [ 6 ]])).toBe('0\n2\n4\n6');
// expect(toCsvText([[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]])).toBe('0,1,2,3,4,5,6,7,8,9,10');

// Peusdocode - 
// Create a function that takes in an array of arrays
// Loop through the array
// Join each array with a comma
// Join the arrays with a new line


// Solution 1
// function toCsvText(array) {
//     for(let i = 0; i < array.length; i++){
//         array[i] = array[i].join(',')
//     }
//     return array.join('\n')
// } 

// Solution 2 - arrow function
const toCsvText = array => array.map(row => row.join(',')).join('\n')

module.exports = toCsvText;