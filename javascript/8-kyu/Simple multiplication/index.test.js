const simpleMultiplication = require('./index');

describe('Simple multiplication tests', () => {
    it('should multiply by 8 for even numbers', () => {
        expect(simpleMultiplication(2)).toBe(16);
        expect(simpleMultiplication(4)).toBe(32);
        expect(simpleMultiplication(6)).toBe(48);
    });
    
    it('should multiply by 9 for odd numbers', () => {
        expect(simpleMultiplication(1)).toBe(9);
        expect(simpleMultiplication(3)).toBe(27);
        expect(simpleMultiplication(5)).toBe(45);
    });
    
    it('should handle zero', () => {
        expect(simpleMultiplication(0)).toBe(0);
    });
});