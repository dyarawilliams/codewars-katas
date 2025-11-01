// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Parameters: number
// Returns: number or string - value multipled by 50 + 6 if number, "Error" if string
// Examples: 
// 1. Input: 1, Output: 56
// 2. Input: 0, Output: 6
// 3. Input: "test", Output: "Error"
// 4. Input: -1, Output: -44

// Psuedo:
// 1. Create a function called problem that takes in a parameter x
// 2. Check if the input is a string, if it is, return "Error"
// 3. If it is not a string, check if it is a number
// 4. If it is a number, return the number multiplied by 50 and increased by 6
// 5. If it is neither, return "Error"


function problem(x){
    return typeof(x) === 'string' ? "Error" : (x * 50) + 6
}

module.exports = problem;