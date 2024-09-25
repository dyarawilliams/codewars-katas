// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Parameters: an array of strings
// Returns: a string
// Examples: 
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// Psuedo: Declare a function that takes in a array of strings that represents the queue of sheeps and the wolf and returns a string that lets warns you if their is a sheep in front of the wolf that is about to be eaten

// Solution 1
// function warnTheSheep(queue) {
//     let sheepPos = queue.length - queue.indexOf('wolf') - 1
//     if (sheepPos === 0) {
//         return 'Pls go away and stop eating my sheep'
//     } else {
//         return `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`
//     }
// }

// Solution 2 - arrow function
const warnTheSheep = (queue) => {
    // Declare a variable that stores the sheep that is infront of the wolf's position
    let sheepPos = queue.reverse().indexOf('wolf')
    // Return a string letting the wolf know to go way if sheepPos is equal to 0, and  warn the sheep if otherwise
    return sheepPos == 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`
}

module.exports = warnTheSheep;