const mergeArrays = require('./index.js');

describe('mergeArrays', () => {
    test('should merge two sorted arrays into one sorted array without duplicates', () => {
        expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(mergeArrays([1, 3, 5], [1, 2, 3])).toEqual([1, 2, 3, 5]);
        expect(mergeArrays([], [])).toEqual([]);
        expect(mergeArrays([1], [2])).toEqual([1, 2]);
    });
});