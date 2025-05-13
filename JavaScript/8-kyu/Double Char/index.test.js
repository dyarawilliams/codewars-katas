const doubleChar = require('./index.js');

describe('doubleChar', () => {
    test('should return "SSttrriinngg" for input "String"', () => {
        expect(doubleChar('String')).toBe('SSttrriinngg');
    });
    
    test('should return "HHeelllloo  WWoorrlldd" for input "Hello World"', () => {
        expect(doubleChar('Hello World')).toBe('HHeelllloo  WWoorrlldd');
    });
    
    test('should return "11223344!!__  " for input "1234!_ "', () => {
        expect(doubleChar('1234!_ ')).toBe('11223344!!__  ');
    });
});