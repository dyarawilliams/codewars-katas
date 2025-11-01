const hexToDec = require('./index.js');

describe('hexToDec', () => {
    test('should convert hex string to decimal', () => {
        expect(hexToDec('1')).toBe(1);
        expect(hexToDec('a')).toBe(10);
        expect(hexToDec('f')).toBe(15);
        expect(hexToDec('10')).toBe(16);
        expect(hexToDec('1a')).toBe(26);
        expect(hexToDec('ff')).toBe(255);
        expect(hexToDec('100')).toBe(256);
        expect(hexToDec('abc')).toBe(2748);
    });

    test('should handle uppercase letters', () => {
        expect(hexToDec('A')).toBe(10);
        expect(hexToDec('F')).toBe(15);
        expect(hexToDec('10A')).toBe(266);
    });

    test('should handle mixed case letters', () => {
        expect(hexToDec('aBc')).toBe(2748);
    });
});