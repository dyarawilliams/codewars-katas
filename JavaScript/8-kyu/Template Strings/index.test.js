const templateStrings = require('./index');

describe('Template Strings', () => {
    it('should return a string with the format "noun are adjective"', () => {
        expect(templateStrings('Animals', 'Good')).toBe('Animals are Good');
        expect(templateStrings('You', 'special')).toBe('You are special');
        expect(templateStrings('lives', 'frozen')).toBe('lives are frozen');
    });
    
    it('should handle different inputs correctly', () => {
        expect(templateStrings('Cats', 'awesome')).toBe('Cats are awesome');
        expect(templateStrings('Dogs', 'friendly')).toBe('Dogs are friendly');
    });
});