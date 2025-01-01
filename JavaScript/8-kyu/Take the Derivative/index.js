
// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

function derive(coefficient,exponent) {
    return `${(coefficient * exponent)}x^${exponent-1}`
}