const combat = require('./index');

describe('combat', () => {
    test('should return the correct health after damage', () => {
        expect(combat(100, 5)).toBe(95);
        expect(combat(92, 8)).toBe(84);
        expect(combat(20, 30)).toBe(0);
        expect(combat(50, 50)).toBe(0);
        
    });
});