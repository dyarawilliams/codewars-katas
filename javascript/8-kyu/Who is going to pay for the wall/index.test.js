const whoIsPaying = require('./index.js');

describe('whoIsPaying', () => {
    test('should return an array with the full name and truncated name for a name longer than 2 characters', () => {
        expect(whoIsPaying('Mexico')).toEqual(['Mexico', 'Me']);
        expect(whoIsPaying('Melania')).toEqual(['Melania', 'Me']);
    });

    test('should return an array with the name as is for a name with 2 or fewer characters', () => {
        expect(whoIsPaying('Me')).toEqual(['Me']);
        expect(whoIsPaying('I')).toEqual(['I']);
        expect(whoIsPaying('')).toEqual(['']);
    });
});