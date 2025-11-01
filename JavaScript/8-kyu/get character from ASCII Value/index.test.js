const getChar = require('./index.js');

describe('getChar', () => {
    it('should return the character corresponding to the ASCII value', () => {
        expect(getChar(60)).toBe('<');
        expect(getChar(61)).toBe('=');
        expect(getChar(62)).toBe('>');
        expect(getChar(63)).toBe('?');
        expect(getChar(64)).toBe('@');
        expect(getChar(65)).toBe('A');
        expect(getChar(66)).toBe('B');
        expect(getChar(67)).toBe('C');
        expect(getChar(68)).toBe('D');
        expect(getChar(69)).toBe('E');
        expect(getChar(70)).toBe('F');
        expect(getChar(71)).toBe('G');
        expect(getChar(72)).toBe('H');
        expect(getChar(73)).toBe('I');
        expect(getChar(74)).toBe('J');
    });
});