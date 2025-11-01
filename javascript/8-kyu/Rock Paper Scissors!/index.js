// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):


// Parameters: two strings each from a list of values such as "rock", "paper", "scisors"
// First value is player 1 and second value is player 2 
// Returns: "Player 1 won!" (P1 won), "Player 1 won!"" (P2 won) or "Draw"
// Examples:
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Psuedo: Declare a function called rps that takes in two strings - p1 and p2 for player 1 and player 2 the values of these parameter comes from a list of values and returns the winning player or draw.
    // If scissors -> paper, paper -> rock, rock -> scissor then "Player 1 won"
    // If scissors -> rock, paper -> scissors, rock -> paper then "Player 2 won"

// Solution 1
// const rps = (p1, p2) => {
//     if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
//         return 'Player 1 won!'
//     } else if ((p1 == 'scissors' && p2 == 'rock') || (p1 == 'paper' && p2 == 'scissors') || (p1 == 'rock' && p2 == 'paper')) {
//         return 'Player 2 won!'
//     } else {
//         return 'Draw!'
//     }
// };

// Solution 2
const rps = (p1, p2) => ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) ? "Player 1 won!" : ((p1 == 'scissors' && p2 == 'rock') || (p1 == 'paper' && p2 == 'scissors') || (p1 == 'rock' && p2 == 'paper')) ? "Player 2 won!" : "Draw!";

console.log(rps('scissors', 'paper'))
console.log(rps('paper', 'rock'))
console.log(rps('scissors', 'rock'))
console.log(rps('rock', 'rock'))