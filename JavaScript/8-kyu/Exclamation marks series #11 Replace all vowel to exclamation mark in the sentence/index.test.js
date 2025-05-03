const replace = require('./index');

describe('replace function', () => {
    it('should replace all vowels with exclamation marks', () => {
        expect(replace("Hi!")).toBe("H!!");
        expect(replace("!Hi! Hi!")).toBe("!H!! H!!");
        expect(replace("aeiou")).toBe("!!!!!");
        expect(replace("ABCDE")).toBe("!BCD!");
    });

    it('should handle empty strings', () => {
        expect(replace("")).toBe("");
    });

    it('should handle strings without vowels', () => {
        expect(replace("BCDFG")).toBe("BCDFG");
    });
});