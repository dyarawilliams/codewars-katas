// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// Parameters: an array of numbers(integers), positives because it represents ages
// Returns: array of numbers, [second oldest age, oldest age]
// Examples: [1,5,87,45,8,8] => [45, 87]
//           [1, 2, 10, 8] => [8, 10]
//           [1, 3, 10, 0] => [3, 10]

// Psuedo: Declare a function called twoOldestAges that takes in an array of numbers(ages), and returns an array of two numbers that represents the two oldest ages.

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    // sort the array from least to greatest
    // return the last two numbers of the sorted array
    return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1,5,87,45,8,8]))
console.log(twoOldestAges([1, 2, 10, 8]))
console.log(twoOldestAges([1, 3, 10, 0]))


