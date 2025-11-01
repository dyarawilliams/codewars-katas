// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Paramaters - h(hours) m(minutes) s(seconds) all integers(positive)
// Returns - integer - hours, minutes, and second converted to milliseconds
// Examples - (0,1,1) -> 61000 , (0,0,0) -> 0, (1,0,1) -> 601000

// Psuedocode 
// Create a function that takes in the hours, minutes, and seconds
// and converts the time in milliseconds
function past(h, m, s){
    // Convert hours to milliseconds
    let hoursToMilli = h * 3600000
    // Convert minutes to milliseconds
    let minToMilli = m * 60000
    // Convert seconds to milliseconds
    let secToMilli = s * 1000
    
    // Add each conversion to get total milliseconds
    let result = hoursToMilli + minToMilli + secToMilli
    return result
}