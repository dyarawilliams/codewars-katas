// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// Paramaters - array of positive integers(ages)
// Return - array of positive integers [youngest, oldest, difference of youngest and oldest]
// Examples - [82, 15, 6, 38, 35] => [6, 82, 76] , [57, 99, 14, 32] => [14, 99, 85]
//          [25, 14, 18, 20, 45] => [14, 45, 31] , [42, 29, 21, 50] => [21, 50, 29]

// Psuedo 
// Create a function that takes in positive integers of ages and sort them from youngest to oldest
// Return a new array with the [youngest age, oldest age, difference between the youngest and oldest age]
function differenceInAges(ages){
    // Sort from youngest to oldest
    let sorted = ages.sort((a,b) => a - b)
    console.log(sorted)
    
    // Filter out the oldest and youngest and find the difference between the youngest and oldest
    let youngest = Math.min(...sorted)
    let oldest = Math.max(...sorted)
    let difference = oldest - youngest
    let result = [youngest, oldest, difference]
    return result
}