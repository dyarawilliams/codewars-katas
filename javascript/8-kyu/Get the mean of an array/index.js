// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Parameters: array of numbers (positive integers), the array will never be empty
// Returns: average of the given array rounded down
// Examples: [2,2,2,2] -> 2, [1,2,3,4,5,] -> 3, [1,1,1,1,1,1,1,2] -> 1

// Psuedo: Create a function that takes in a array of numbers and returns the average of the array.

// Solution 1
// function getAverage(marks){
//     let sum = 0;
//     for(let i = 0; i < marks.length; i++){
//         sum += marks[i]
//     }
//     return Math.floor(sum / marks.length)
// }

// Solution 2
const getAverage = arrScore => {
    // Average is the sum of all the numbers / count of all the numbers
    let count = arrScore.length;
    let sum = 0;
    for(let i = 0; i < count; i++){
        // Loop through each array element and add them together
        sum += arrScore[i]
    }
    return Math.floor(sum / count);
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))