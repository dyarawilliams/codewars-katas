// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

// PREP METHOD:
// Parameters: 3 numbers - min, max, step
// Returns: array of numbers - range from start to stop
// Examples: (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]

// Psuedo:
// create an empty array
// loop from min to max, incrementing by step each time
// push each number to the array
// return the array

function generateRange(min, max, step){
    let arr = []
    for(let i = min; i <= max; i+=step){
        arr.push(i)
    }
    return arr
}

module.exports = generateRange;