// Kata Link: https://www.codewars.com/kata/5a34b80155519e1a00000009

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// Parameters: an array of numbers
// Returns: an array of numbers that are multiples of their index
// Examples: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25], [68, -1, 1, -7, 10, 10] => [-1, 10], [0,2,3,6,9,12] => [0, 2, 6, 12]

// Psuedocode:
// 1. Filter the array to include only elements where the element is a multiple of its index
// 2. Exclude the first element (index 0) since it cannot be a multiple of its index
// 3. Return the filtered array

const multipleOfIndex = arr => arr.filter((num, index) => num % index == 0 || num == 0);

module.exports = multipleOfIndex;