const countWords = require('./index');

describe('countWords', () => {
    it('should return 1 for "Hello"', () => {
        expect(countWords("Hello")).toBe(1);
    });
    
    it('should return 2 for "Hello, World!"', () => {
        expect(countWords("Hello, World!")).toBe(2);
    });
    
    it('should return 6 for "No results for search term `s`"', () => {
        expect(countWords("No results for search term `s`")).toBe(6);
    });
    
    it('should return 1 for " Hello"', () => {
        expect(countWords(" Hello")).toBe(1);
    });
    
    it('should return 0 for an empty string', () => {
        expect(countWords("")).toBe(0);
    });
    
    it('should handle multiple spaces correctly', () => {
        expect(countWords("   Hello   World   ")).toBe(2);
    });
    
    it('should treat non-whitespace characters as delimiters', () => {
        expect(countWords("Hello\nWorld")).toBe(2);
        expect(countWords("Hello\tWorld")).toBe(2);
        expect(countWords("Hello\u00A0World")).toBe(2); // Non-breaking space
    });
});