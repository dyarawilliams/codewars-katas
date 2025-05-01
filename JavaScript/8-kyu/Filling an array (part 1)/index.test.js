const arr = require('./index.js');

describe('Filling an array (part 1)', () => {
    it('should return an array with numbers from 0 to N-1', () => {
        expect(arr(5)).toEqual([0, 1, 2, 3, 4]);
        expect(arr(0)).toEqual([]);
        expect(arr(1)).toEqual([0]);
        expect(arr(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle negative numbers', () => {
        expect(arr(-5)).toEqual([]);
    });
});