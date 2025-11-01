const squareSum = require('./index.js');

describe('Square Sum', () => {
    it('should return the sum of squares of the numbers in the array', () => {
        expect(squareSum([1, 2, 2])).toBe(9);
        expect(squareSum([0, 3, 4, 5])).toBe(50);
        expect(squareSum([1, 2])).toBe(5);
        expect(squareSum([])).toBe(0); // Edge case: empty array
        expect(squareSum([-1, -2, -3])).toBe(14); // Negative numbers
    });
});