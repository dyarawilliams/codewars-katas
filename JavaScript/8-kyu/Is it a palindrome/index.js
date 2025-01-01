// Write function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let reversed = x.split('').map((str) => { return str.toLowerCase() }).reverse().join('')
    console.log(reversed)
    let lower = x.split('').map(str => str.toLowerCase()).join('')
    console.log(lower)
    return reversed == lower
}