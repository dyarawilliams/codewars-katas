// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Parameters: a number representing an age
// Returns: a string of words
// Examples: (Input --> Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// Solution 1
// function peopleWithAgeDrink(old) {
//     let drink = "";
//     if (old < 14) {
//         drink = "toddy";
//     } else if (old < 18) {
//         drink = "coke";
//     } else if (old < 21) {
//         drink = "beer";
//     } else {
//         drink = "whisky";
//     }
//     return `drink ${drink}`;
// }

// Psuedo code:
// 1. Create a function that takes a number as an argument
// 2. Use a ternary operator to check if the number is less than 14
// 3. If it is, return "drink toddy"
// 4. Use an else if statement to check if the number is less than 18
// 5. If it is, return "drink coke"
// 6. Use an else if statement to check if the number is less than 21
// 7. If it is, return "drink beer"
// 8. Use an else statement to return "drink whisky"
// 9. Use string interpolation to return the string
// 10. Use a template literal to return the string "drink " + drink

// Solution 2
const peopleWithAgeDrink = old => `drink ${old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky'}`;

module.exports = peopleWithAgeDrink;