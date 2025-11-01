// Kata Link: https://www.codewars.com/kata/5729b103dd8bac11a900119e
// Task
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it

// Parameters: s (a string)
// Returns: a string of 5 lines
// Example:

// Pseudo code:
// 1. Define a function named fiveLine that takes a string s as an argument.
// 2. Trim the string s to remove any leading or trailing whitespace.
// 3. Create an empty string variable result to store the final output.
// 4. Use a for loop to iterate from 1 to 5 (inclusive).
// 5. In each iteration, concatenate the string s repeated i times to the result variable, followed by a newline character.
// 6. After the loop, return the result string, removing the trailing newline character using slice(0, -1).


function fiveLine(s){
    s = s.trim();
    
    let result = '';
    
    for (let i = 1; i <= 5; i++) {
        result += s.repeat(i) + '\n';
    }
    return result.slice(0, -1);
}

module.exports = fiveLine;