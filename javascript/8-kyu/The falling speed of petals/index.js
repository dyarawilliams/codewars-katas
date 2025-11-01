// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

// Parameters: a number, the speed of the petal
// Returns: a number, the time it takes for the petal to reach the ground from the same branch
// Examples: sakuraFall(5) => 80, sakuraFall(10) => 40, sakuraFall(-1) => 0

// Psuedo Code:
// 1. Create a function called sakuraFall that takes in a variable v which is for the speed of the petal.
// 2. Check if the speed is less than or equal to 0 or if it is Infinity.
// 3. If the speed is less than or equal to 0 or if it is Infinity, return 0.
// 4. Otherwise, calculate the time it takes for the petal to reach the ground using the formula: (distance / speed).
// 5. The distance is given as 80 seconds * 5 cm/s.
// 6. Return the calculated time.


// Solution 1
// function sakuraFall(v) {
//     return (v <= 0 || v == Infinity) ? 0 : (80 * 5) / v
// }

// Solution 2 - arrow function
const sakuraFall = v => (v <= 0 || v == Infinity) ? 0 : (80 * 5) / v

module.exports = sakuraFall;