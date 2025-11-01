// DESCRIPTION:
// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// Parameters: pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin
// Returns: a string "Alive " or "Shark Bait!"
// Example: shark(12, 50, 4, 8, true) => "Alive!", shark(7, 55, 4, 16, true) => "Alive!", shark(24, 0, 4, 8, true) => "Shark Bait!"

 // Psuedo Code:
// 1. Define a function `shark` that takes five parameters: `pontoonDistance`, `sharkDistance`, `youSpeed`, `sharkSpeed`, and `dolphin`.
// 2. If `dolphin` is true, halve the `sharkSpeed`.
// 3. Calculate the time it takes for you to reach the pontoon by dividing `pontoonDistance` by `youSpeed`.
// 4. Calculate the time it takes for the shark to reach the pontoon by dividing `sharkDistance` by `sharkSpeed`.
// 5. Compare the two times:
//     - If your time is less than the shark's time, return "Alive!".
//     - Otherwise, return "Shark Bait!".

// Solution 1

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     let safetyTime = pontoonDistance / youSpeed
//     return sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > safetyTime ? 'Alive!' : 'Shark Bait!'
// }
// Psuedo Code:

// Solution 2 - Best Practice
// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if(dolphin) {
//         sharkSpeed /= 2;
//     }
//     return sharkDistance / sharkSpeed > pontoonDistance / youSpeed  ? "Alive!" : "Shark Bait!";
// }

// Solution 3 - arrow function
const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed ? 'Alive!' : 'Shark Bait!'

module.exports = shark;