const multiply = require('./index');

describe('multiply', () => {
    it('should multiply two integers and return the product', () => {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(5, 3)).toBe(15);
        expect(multiply(1, 7)).toBe(7);
        expect(multiply(9, 2)).toBe(18);
    });
});