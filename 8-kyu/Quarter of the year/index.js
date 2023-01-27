// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// Parameters: a number(integer) between 1 and 12
// Returns: a number(integer) between 1 and 4
// Examples: quarterOf(2) => 1, quarterOf(6) => 2, quarterOf(11) => 4

// Psuedo: Declare a function called quarterOf that takes in a parameter named month which is an integer from 1 to 12 and returns the quarter of the year the integer belongs to.

const quarterOf = (month) => {
    // Create a conditional to determine which quarter each month is
    if (month == 1 || month == 2 || month == 3) return 1
    else if (month == 4 || month == 5 || month == 6) return 2
    else if (month == 7 || month == 8 || month == 9) return 3
    else return 4
}