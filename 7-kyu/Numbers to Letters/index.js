// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Paramaters: array of numbers, in string format
// Returns: a string, that represents the array of numbers decoded
// Examples: ['24', '12', '23', '22', '4', '26', '9', '8'] => 'codewars'
// ['25','7','8','4','14','23','8','25','23','29','16','16','4'] => 'btswmdsbd kkw'
// ['4', '24'] => 'wc'


// Psuedo: Declare a function called switcher that takes in an array of numbers as strings, and returns a string of the array decoded.

function switcher(x){
    let str = ' zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item => str[item]).join('')
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))