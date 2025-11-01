const remove = require('./index');

describe('remove', () => {
    it('should remove an exclamation mark from the end of a string', () => {
        expect(remove("Hi!")).toBe("Hi");
        expect(remove("Hi!!!")).toBe("Hi!!");
        expect(remove("!Hi")).toBe("!Hi");
        expect(remove("!Hi!")).toBe("!Hi");
        expect(remove("Hi! Hi!")).toBe("Hi! Hi");
        expect(remove("Hi")).toBe("Hi");
    });
    
    it('should return the original string if there is no exclamation mark at the end', () => {
        expect(remove("Hello")).toBe("Hello");
        expect(remove("World")).toBe("World");
    });
});