// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Parameters: takes in a positive integer called number
// Returns: a string of 'Even' or 'Odd'
// Examples: 2 -> 'Even', 5 -> 'Odd', 21 -> 'Odd', 38 -> 'Even'

// Psuedo: Create a function called even_or_Odd (or evenOrOdd) that takes in a positive integer and returns a string which determines if the number is even or odd.

// Solution 1
// function even_or_odd(number) {
//     // Check if the number has a remainder of 0, if so then the number is even, otherwise odd
//     if(number % 2 === 0){
//       return 'Even'
//     } else {
//       return 'Odd'
//     }
// }

// Solution 2 -> Arrow Function
// Used an arrow function and a ternary operator to solve this challenge 
// It states that if number is divided by 2 and their is no remainder then the output is 'Even', else 'Odd'
const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";


console.log(even_or_odd(2));
console.log(even_or_odd(5));
console.log(even_or_odd(21));
console.log(even_or_odd(38));