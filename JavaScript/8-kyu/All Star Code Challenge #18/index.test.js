const strCount = require('./index');

describe('strCount', () => {
    it("should return the count of occurrences of 'o' in 'Hello'", () => {
        expect(strCount("Hello", 'o')).toBe(1);
    });
    
    it("should return the count of occurrences of 'l' in 'Hello'", () => {
        expect(strCount("Hello", 'l')).toBe(2);
    });
    
    it("should return 0 for an empty string with any letter", () => {
        expect(strCount("", 'z')).toBe(0);
    });
    
    it("should return 0 when the letter is not found in the string", () => {
        expect(strCount("Hello", 'x')).toBe(0);
    });
    
    it("should handle cases with multiple occurrences of the same letter", () => {
        expect(strCount("banana", 'a')).toBe(3);
    });
});