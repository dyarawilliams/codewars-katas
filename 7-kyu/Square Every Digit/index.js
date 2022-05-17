// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // split digit into an array of integers
    let arrOfNum = []
    let arrOfStr = num.toString().split('')
    arrOfStr.forEach(str => {
        arrOfNum.push(Number(str))
    })
    // find the square of each digit
    let sq = arrOfNum.map(x =>  x*x)
    // Concatenate the array
    let result = +sq.join('')
    
    return result;
}