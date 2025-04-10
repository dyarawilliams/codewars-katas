// Task
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96

// Input/Output
// [input] integer nCols

// An integer, the number of theater's columns.

// Constraints: 1 ≤ nCols ≤ 1000.

// [input] integer nRows

// An integer, the number of theater's rows.

// Constraints: 1 ≤ nRows ≤ 1000.

// [input] integer col

// An integer, the column number of your own seat (with the rightmost column having index 1).

// Constraints: 1 ≤ col ≤ nCols.

// [input] integer row

// An integer, the row number of your own seat (with the front row having index 1).

// Constraints: 1 ≤ row ≤ nRows.

// [output] an integer
// The number of people who sit strictly behind you and in your column or to the left.

// Solution 1
// function seatsInTheater(nCols, nRows, col, row) {
//     return (nCols - col + 1) * (nRows - row)
// }

// PREP method
// Parameters: numbers
// Return: number
// Example: (16, 11, 5, 3) -> 96, (1,1,1,1) -> 0, (13, 6, 8, 3) -> 18

// Pseudocode:
// 1. Create a function called seatsInTheater that takes in four parameters: nCols, nRows, col, and row.
// 2. Calculate the number of people who sit strictly behind you and in your column or to the left by using the formula (nCols - col + 1) * (nRows - row).
// 3. Return the result of the calculation.

// Solution 2 - arrow funciton
const seatsInTheater = (nCols, nRows, col, row) => (nCols - col + 1) * (nRows - row);

module.exports = seatsInTheater;