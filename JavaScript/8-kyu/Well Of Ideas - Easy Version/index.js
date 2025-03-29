// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Solution 1

// function well(x){
//     switch(x.filter(idea => idea == 'good').length){
//         case 0:
//             return 'Fail!'
//             break;
//         case 1:
//         case 2: 
//             return 'Publish!'
//             break;
//         default: 
//             return 'I smell a series!'
//             break;
        
//     }
// }

// PREP method
// Parameters: an array of strings, => 'good' and 'bad' ideas
// Return: a string - 'Fail!', 'Publish!' or 'I smell a series!'

// Example: 
// ['bad', 'bad', 'bad'] => 'Fail!'
// ['good', 'bad', 'bad'] => 'Publish!'
// ['good', 'good', 'bad'] => 'Publish!'
// ['good', 'good', 'good'] => 'I smell a series!'
// ['good', 'bad', 'good', 'good'] => 'I smell a series!'

// Psuedocode: 
// 1. Create a function well that takes an array of strings as an argument
// 2. Use filter method to count the number of 'good' ideas in the array
// 3. Use if statement to check the count of good ideas
// 4. If the count is 0, return 'Fail!'
// 5. If the count is 1 or 2, return 'Publish!'
// 6. If the count is greater than 2, return 'I smell a series!'
// 7. Return the appropriate string based on the count of good ideas

// Soluttion 2 - arrow function
const well = (x) => {
    const goodIdeasCount = x.filter(idea => idea === 'good').length;
    return goodIdeasCount === 0 ? 'Fail!' : goodIdeasCount <= 2 ? 'Publish!' : 'I smell a series!';
};

module.exports = well;