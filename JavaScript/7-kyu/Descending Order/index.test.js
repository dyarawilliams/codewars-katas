const descendingOrder = require('./index');

describe('Descending Order', () => {
    test('should return the digits of the number in descending order', () => {
        expect(descendingOrder(0)).toBe(0);
        expect(descendingOrder(1)).toBe(1);
        expect(descendingOrder(111)).toBe(111);
        expect(descendingOrder(15)).toBe(51);
        expect(descendingOrder(1021)).toBe(2110);
        expect(descendingOrder(123456789)).toBe(987654321);
    });
    
    test('should handle large numbers', () => {
        expect(descendingOrder(9876543210)).toBe(9876543210);
    });
});