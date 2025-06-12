const arrayMadness = require('./index');

describe('arrayMadness', () => {
    it('should return true for [4, 5, 6] and [1, 2, 3]', () => {
        expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true);
    });
    
    it('should return false for [1, 2] and [3, 4]', () => {
        expect(arrayMadness([1, 2], [3, 4])).toBe(false);
    });
    
    it('should return true for [10] and [1]', () => {
        expect(arrayMadness([10], [1])).toBe(true);
    });
    
    it('should return false for [1] and [10]', () => {
        expect(arrayMadness([1], [10])).toBe(false);
    });
    
});