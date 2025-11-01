// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// Tags: Fundamentals, Strings, Arrays, Sorting

// Parameters: an array of numbers or strings
// Returns: an array of numbers or strings(sorted), starting with the numbers first
// Examples: dbSort([6, 2, 3, 4, 5]) => [2, 3, 4, 5, 6]
// dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]) => [0,2,2,"Apple","Banana","Mango","Orange"]
// dbSort(["C", "W", "W", "W", 1, 2, 0]) => [0,1,2,"C","W","W","W"]

// Psuedo: Declare a function called dbSort that takes in one parameter the array of numbers or strings and returns the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must keeps their original type.

const dbSort = a => {
    // filter the numbers from the strings
    // sort each in ascending order then combine them together as one array
    let nums = a.filter(x => typeof x == 'number').sort((a, b) => a - b);
    let s = a.filter(x => typeof x == 'string').sort();
    return nums.concat(s);
}

console.log(dbSort([6, 2, 3, 4, 5]))
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]))