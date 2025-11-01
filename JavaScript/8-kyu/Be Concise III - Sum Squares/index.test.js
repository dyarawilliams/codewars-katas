const sumSquares = require('./index');

describe('sumSquares', () => {
    it('should behave in exactly the same way as the program prior to refactoring for the range of inputs tested', () => {
        expect(sumSquares([1, 2, 3, 4, 5])).toEqual(55);
        expect(sumSquares([7, 3, 9, 6, 5])).toEqual(200);
        expect(sumSquares([11, 13, 15, 18, 2])).toEqual(843);
    });

    it('could contain 101 characters or less', () => {
        const code = sumSquares.toString();
        expect(code.length).toBeLessThanOrEqual(101);
    });
});