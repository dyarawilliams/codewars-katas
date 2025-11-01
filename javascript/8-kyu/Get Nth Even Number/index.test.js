const nthEven = require('./index.js');


describe('nthEven', () => {
    test('should return 0 for input 1', () => {
        expect(nthEven(1)).toBe(0);
    });

    test('should return 4 for input 3', () => {
        expect(nthEven(3)).toBe(4);
    });

    test('should return 198 for input 100', () => {
        expect(nthEven(100)).toBe(198);
    });

    test('should return 2597466 for input 1298734', () => {
        expect(nthEven(1298734)).toBe(2597466);
    });
    test('should return 0 for input 0', () => {
        expect(nthEven(0)).toBe(-2);
    });
});