// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Parameters: array of numbers
// Returns: array of numbers sorting the odds and keeping original at original position
// Examples: [7, 1] => [1, 7]
//           [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//           
// Psuedo: Declare a function called sortArray that takes in a array of numbers and returns the array only sorting the odd numbers keeping the even numbers at its original position.

// Solution 1 
// const sortArray = array => {
//     // Create a variable that holds the odd numbers sorted
//     let odds = array.filter(num => num % 2).sort((a, b) => a - b);
//     return array.map(x => x % 2 ? odds.shift() : x)
// }

// Solution 2 ( to better understand what is going on )
function sortArray(array) {
    // create an array variable to store the new array
    let sortedArr = []
    // Loop through the array to check if the element is odd
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        // If the element is odd then add element to array and sort it accordingly
        if (array[i] % 2 !== 0) {
            console.log(`The number ${array[i]} is ODD`)
            sortedArr.push(array[i])
        }
    }

    console.log(sortedArr)
    // Sort the sortedArr 
    sortedArr.sort((a, b) => a - b)
    console.log(sortedArr)

    // Loop through the array replacing sorted odd values with original values
    for (var j = 0; j < array.length; j++) {
        if (array[j] % 2 !== 0) {
            array[j] = sortedArr.shift();
        }
    }
    return array
}