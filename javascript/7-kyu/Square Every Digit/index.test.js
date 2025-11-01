const squareDigits = require('./index.js');

describe('Square Every Digit', () => {
    test('should return 811181 for input 9119', () => {
        expect(squareDigits(9119)).toBe(811181);
    });

    test('should return 493625 for input 765', () => {
        expect(squareDigits(765)).toBe(493625);
    });

    test('should return 0 for input 0', () => {
        expect(squareDigits(0)).toBe(0);
    });

    test('should return 1 for input 1', () => {
        expect(squareDigits(1)).toBe(1);
    });

    test('should return 4 for input 2', () => {
        expect(squareDigits(2)).toBe(4);
    });
});