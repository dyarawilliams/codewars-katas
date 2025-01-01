// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

// Parameters: Takes in a non-negative number, n
// Returns: number in binary format
// Examples: 
// Psuedo: Creates a function that takes in a non negative number and returns that number given in binary format.

// Solution 1
// function toBinary(n){
//     console.log(`Decimal: ${n} => Binary: ${parseInt(n.toString(2))}`)
//     return parseInt(n.toString(2));
// }

// Solution 2
const toBinary = (n) => +n.toString(2);