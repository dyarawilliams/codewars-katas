const sumArray = require('./index');

describe('sumArray', () => {
    test('should return 0 for null input', () => {
        expect(sumArray(null)).toBe(0);
    });
    
    test('should return 0 for empty array', () => {
        expect(sumArray([])).toBe(0);
    });
    
    test('should return 0 for array with one element', () => {
        expect(sumArray([3])).toBe(0);
    });

    test('should return 0 for array with two elements', () => {
        expect(sumArray([3, 5])).toBe(0);
    });
    
    test('should return the sum of the array excluding the highest and lowest values', () => {
        expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
        expect(sumArray([0, 1, 6, 10, 10])).toBe(17);
        expect(sumArray([-6, -20, -1, -10, -12])).toBe(-28);
        expect(sumArray([ -6, 20, -1, 10, -12 ])).toBe(3);
    });
});