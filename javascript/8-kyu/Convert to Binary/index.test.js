const toBinary = require('./');

describe("Convert to Binary", () => {
    test("return the binary representation of integer", () => {
        expect(toBinary(1)).toBe(1);
        expect(toBinary(2)).toBe(10);
        expect(toBinary(3)).toBe(11);
        expect(toBinary(5)).toBe(101);
    });
});