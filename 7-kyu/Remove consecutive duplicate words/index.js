// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// Parameters: string with consecutive duplicates
// Returns: a string with no consecutive duplicates
// Examples: 'aaa bbb bbb ccc ccc ccc ddd eee eee fff' => 'aaa bbb ccc ddd eee fff' 
//          'nan nan nan nan and lot aaaaa dddd iiiii iiiii' => 'nan and lot aaaaa dddd iiiii'

// Psuedo: Declare a function called removeConsecutiveDuplicates that takes in a string that includes consecutive duplicates, and return the string without consecutive duplicates leaving the first words entries.

// The idea is to check if current element is equal to the next element or not . 
// If current element is equal to the next element we’ll ignore it and when it is 
// not equal we will add it to our result.

// Solution 1
const removeConsecutiveDuplicates = s => {
    // Create an array to store the result
    let newArr = []
    let strArr = s.split(' ')
    
    // Iterate form 0 to string length
    for (let i = 0; i < strArr.length; i++) {
        // If the current string is not equal to next string then add it to answer string.
        if (strArr[i] != strArr[i + 1]) {
            newArr.push(strArr[i])
        } else {
            continue
        }
    }
    return newArr.join(' ')
}

// Solution 2 (Arrow Function)
// const removeConsecutiveDuplicates = s => s.split(' ').filter((str, i, arr) => str != arr[i - 1]).join(' ')