const feast = require('./index.js');

describe('Feast of Many Beasts', () => {
    test('should return true for valid feast', () => {
        expect(feast("great blue heron", "garlic naan")).toBe(true);
        expect(feast("chickadee", "chocolate cake")).toBe(true);
    });
    
    test('should return false for invalid feast', () => {
        expect(feast("brown bear", "bear claw")).toBe(false);
        expect(feast("lion", "lion steak")).toBe(false);
    });
    
    test('should handle edge cases', () => {
        expect(feast("a", "a")).toBe(true);
        expect(feast("ab", "ab")).toBe(true);
        expect(feast("a", "b")).toBe(false);
    });
});