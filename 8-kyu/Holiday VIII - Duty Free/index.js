// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

// Parameters: all 3 inputs - (integers) --> normPrice(high street price), discount(duty free discount), hol(cost of the holiday)
// Returns: integer (number of bottles would have to purchase)
// Examples: dutyFree(12,50,1000) -> 166, dutyFree(17,10,500) ->  294, dutyFree(24,35,3000) -> 357

// Pseudo: 


// Solution 1
// function dutyFree(normPrice, discount, hol){
//     return Math.floor(hol / (normPrice * (discount/100)))
// }

// Solution 2 - arrow function
const dutyFree = (normPrice, discount, hol) => Math.floor(hol / (normPrice * (discount / 100)));

module.exports = dutyFree;