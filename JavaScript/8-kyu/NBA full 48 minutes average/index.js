// DESCRIPTION:
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

// Parameters - Two numbers
// Return - A number
// Example - pointsPer48(12, 20) // 28.8
// Pseudo code -
// 1. Check if ppg is not equal to 0
// 2. If it is not equal to 0, then return the rounded value of ppg/mpg * 48
// 3. If it is equal to 0, then return 0


// Solution 1
// function pointsPer48(ppg, mpg) {
    // if (typeof ppg !== "number" || typeof mpg !== "number") {
    //     throw new Error("Both arguments must be numbers");
    // }
//  return ppg !== 0 ? Math.round(((ppg/mpg) * 48) * 10) / 10 : 0
// }

// Solution 2 - arrow function
const pointsPer48 = (ppg, mpg) => ppg !== 0 ? Math.round(((ppg/mpg) * 48) * 10) / 10 : 0

module.exports = pointsPer48;