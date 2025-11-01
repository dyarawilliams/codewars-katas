const index = require('./index.js');

describe('index', () => {
    it('should return the N-th power of the element in the array with the index N', () => {
        expect(index([1, 2, 3, 4], 2)).toBe(9);
        expect(index([1, 2, 3], 3)).toBe(-1);
        expect(index([1, 2, 3], 0)).toBe(1);
        expect(index([1, 2, 3], 1)).toBe(2);
        expect(index([1, 2, 3], 2)).toBe(9);
        expect(index([], 0)).toBe(-1);
        expect(index([5], 0)).toBe(1);
        expect(index([5], 5)).toBe(-1);
    });
})