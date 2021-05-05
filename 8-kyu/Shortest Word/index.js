// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    console.log(s)
    let str = s.split(' ').map(word => word.length)
    console.log(str)
    let sorted = str.sort((a,b) => a - b);
    console.log(sorted)
    return sorted[0];
}