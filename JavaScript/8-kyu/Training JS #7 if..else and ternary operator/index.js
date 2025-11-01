/* Task: 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
You can use if..else or ternary operator to complete it. */

// Solution 1
// function saleHotdogs(n){
//     if(n<5) {
//     return n * 100
//     } else if(n>=5 && n<10) {
//       return n * 95 
//     } else if(n>=10){
//       return n * 90
//     }  
// }


// PREP method: 
// Parameters: number of hotdogs (n)
// Returns: price of hotdogs (number)
// Examples:
// 0 hotdogs = 0 cents
// 1 hotdog = 100 cents
// 4 hotdogs = 400 cents
// 5 hotdogs = 475 cents

// Pseudo code:
// 1. Check if n is less than 5, if true return n * 100
// 2. Check if n is between 5 and 10, if true return n * 95
// 3. If n is greater than or equal to 10, return n * 90
// 4. Return the calculated price
// 5. Use ternary operator for cleaner code 

// Solution 2 - arrow function
const saleHotdogs = (n) => n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;

module.exports = saleHotdogs;