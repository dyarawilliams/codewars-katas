// Kata Link: https://www.codewars.com/kata/586c1cf4b98de0399300001d/javascript

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// Parameters: numbers for health and damage
// Returns: a number, the player's new health
// Examples: (100, 5) => 95, (92, 8) => 84, (20, 30) => 0

// Psuedo code
// 1. Create a function called combat
// 2. The function takes two parameters, health and damage
// 3. If health is less than damage, return 0
// 4. If health is greater than or equal to damage, return health - damage
// 5. The function should return a number


// Solution 1
// function combat(health, damage) {
//     return (health - damage >= 0) ? health - damage : 0
// }

// Solution 2 - arrow function
const combat = (health, damage) => health < damage ? 0 : health - damage;

module.exports = combat;