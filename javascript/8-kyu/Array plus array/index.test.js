const arrayPlusArray = require('./index.js');
const { test, expect } = require('@jest/globals');

describe('Array plus array', () => {
    test('should return the sum of two arrays', () => {
        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
        expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
        expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15);
        expect(arrayPlusArray([1], [2])).toBe(3);
        expect(arrayPlusArray([], [1, 2, 3])).toBe(6);
        expect(arrayPlusArray([1, 2], [])).toBe(3);
        expect(arrayPlusArray([], [])).toBe(0);
    });
});