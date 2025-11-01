const squares = require('./index.js');

describe('squaresOnly', () => {
    it('should behave in exactly the same way as the function does prior to refactoring for the tested range of inputs', () => {
        expect(squares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([0, 1, 4, 9]);
        expect(squares([11, 12, 13, 14, 15])).toEqual([]);
        expect(squares([16, 17, 18, 19])).toEqual([16]);
        expect(squares([20, 21, 22, 23])).toEqual([]);
        expect(squares([24, 25])).toEqual([25]);
        expect(squares([26])).toEqual([]);
        expect(squares([27])).toEqual([]);
        expect(squares([28])).toEqual([]);
        expect(squares([29])).toEqual([]);
        expect(squares([30])).toEqual([]);
    });

    it('should contain no more that 127 characters', () => {
        const code = squares.toString();
        const charCount = code.length;
        expect(charCount).toBeLessThanOrEqual(127);
    });

    it('could contain 108 characters or less', () => {
        const code = squares.toString();
        const charCount = code.length;
        expect(charCount).toBeLessThanOrEqual(108);
    });
});