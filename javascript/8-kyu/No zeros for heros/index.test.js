const noBoringZeros = require('./index');

describe('noBoringZeros', () => {
    test('should remove trailing zeros from positive numbers', () => {
        expect(noBoringZeros(1450)).toBe(145);
        expect(noBoringZeros(960000)).toBe(96);
        expect(noBoringZeros(1050)).toBe(105);
    });

    test('should remove trailing zeros from negative numbers', () => {
        expect(noBoringZeros(-1050)).toBe(-105);
    });

    test('should return 0 for input 0', () => {
        expect(noBoringZeros(0)).toBe(0);
    });

    test('should handle large numbers', () => {
        expect(noBoringZeros(1000000000)).toBe(1);
        expect(noBoringZeros(-1000000000)).toBe(-1);
    });
});