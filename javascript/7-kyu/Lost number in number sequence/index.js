// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// Parameters: array of numbers
// Returns: number(integer)
// Examples: findDeletedNumber([1,2,3,4,5], [3,4,1,5]); returns 2
//           findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]); returns 5
//           findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]); returns 0

// Psudeo: Declare a function called findDeleteNumber that takes in two parameters the first is an aray of numbers and the second is an mixed array of numbers.

// Solution 1
// const findDeletedNumber = (arr, mixArr) => {
//     // Compare the lengths of both arrays, if equal then assumenothing has been deleted
//     if(arr.length == mixArr.length) return 0
//     // Loop through array and compare the arr to the mixArr, if the number doesn't exist in mixArr then possibly removed from the first return that current value
//     return arr.filter(num => mixArr.indexOf(num) == -1)[0]
// }

// Solution 2
function findDeletedNumber(arr, mixArr) {
    let result = 0;
    if(arr.length === mixArr.length) return 0
    for(let i = 0; i < arr.length; i++){
    if(!mixArr.includes(arr[i])){
        result = arr[i]
    }
    }
    return result
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))