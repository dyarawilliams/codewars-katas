const multipleOfIndex = require('./index');

describe('Multiple of index', () => {
    it('should return elements that are multiples of their own index', () => {
        expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25]);
        expect(multipleOfIndex([68, -1, 1, -7, 10, 10])).toEqual([-1, 10]);
        expect(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68])).toEqual([-85, 72, 0, 68]);
        expect(multipleOfIndex([0,2,3,6,9])).toEqual([0, 2, 6]);
        expect(multipleOfIndex([1])).toEqual([]);
        expect(multipleOfIndex([])).toEqual([]);
    });
});