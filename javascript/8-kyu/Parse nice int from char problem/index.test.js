const getAge = require('./index');

describe('getAge', () => {
    
    it('should return the age from the input string', () => {
        expect(getAge("1 year old")).toBe(1);
        expect(getAge("5 years old")).toBe(5);
        expect(getAge("0 years old")).toBe(0);
        expect(getAge("9 years old")).toBe(9);
        expect(getAge("3 years old")).toBe(3);
    });
    
    it('should handle single digit ages only', () => {
        expect(getAge("8 years old")).toBe(8);
        expect(getAge("2 years old")).toBe(2);
    });
});