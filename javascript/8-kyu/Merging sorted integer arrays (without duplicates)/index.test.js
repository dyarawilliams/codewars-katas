const mergeArrays = require('./index');

describe('mergeArrays', () => {
    it('should merge two sorted arrays into a single one without duplicates', () => {
        expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(mergeArrays([2, 4, 8], [2, 4, 6])).toEqual([2, 4, 6, 8]);
        expect(mergeArrays([], [1, 2])).toEqual([1, 2]);
    });
});