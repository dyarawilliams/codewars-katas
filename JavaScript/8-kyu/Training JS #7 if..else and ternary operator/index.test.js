const saleHotdogs = require('./index.js');

describe('saleHotdogs', () => {
    test('should return the correct price for 0 hotdogs', () => {
        expect(saleHotdogs(0)).toBe(0);
    });
    
    test('should return the correct price for 1 hotdog', () => {
        expect(saleHotdogs(1)).toBe(100);
    });
    
    test('should return the correct price for 4 hotdogs', () => {
        expect(saleHotdogs(4)).toBe(400);
    });
    
    test('should return the correct price for 5 hotdogs', () => {
        expect(saleHotdogs(5)).toBe(475);
    });
    
    test('should return the correct price for 9 hotdogs', () => {
        expect(saleHotdogs(9)).toBe(855);
    });
    
    test('should return the correct price for 10 hotdogs', () => {
        expect(saleHotdogs(10)).toBe(900);
    });
    
    test('should return the correct price for 15 hotdogs', () => {
        expect(saleHotdogs(15)).toBe(1350);
    });
});