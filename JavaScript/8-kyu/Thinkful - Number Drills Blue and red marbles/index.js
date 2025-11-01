// DESCRIPTION:
// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

// Parameters: four integers representing the number of blue marbles, red marbles, blue marbles pulled out, and red marbles pulled out.
// Returns: a float representing the probability of drawing a blue marble.

// Example: guessBlue(5, 5, 2, 3) => 0.6, guessBlue(5, 7, 4, 3) => 0.2, guessBlue(12, 18, 4, 6) => 0.4

// Psuedo Code: 
// 1. Calculate the total number of marbles in the bag
// 2. Subtract the number of blue marbles pulled out from the total number of blue marbles
// 3. Divide the number of blue marbles left by the total number of marbles in the bag
// 4. Return the result

// Solution 1
// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//     let totalMarbles = blueStart + redStart - bluePulled - redPulled;
//     return (blueStart - bluePulled) / totalMarbles;
// }

// Solution 2 
const guessBlue = (blueStart, redStart, bluePulled, redPulled) => (blueStart - bluePulled) / (blueStart + redStart - redPulled - bluePulled);

module.exports = guessBlue;