const basicOp = require('./index');

describe('Basic Mathematical Operations', () => {
    test('should return the sum of two numbers for addition', () => {
        expect(basicOp('+', 4, 7)).toBe(11);
    });
    
    test('should return the difference of two numbers for subtraction', () => {
        expect(basicOp('-', 15, 18)).toBe(-3);
    });
    
    test('should return the product of two numbers for multiplication', () => {
        expect(basicOp('*', 5, 5)).toBe(25);
    });
    
    test('should return the quotient of two numbers for division', () => {
        expect(basicOp('/', 49, 7)).toBe(7);
    });
    
    test('should throw an error for invalid operations', () => {
        expect(() => basicOp('%', 5, 5)).toThrow('Invalid operation');
    });
});