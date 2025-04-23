const unusualFive = require('./index');

describe('unusualFive', () => {
    it('should return 5', () => {
        expect(unusualFive()).toBe(5);
    });

    it('should not use any of the following characters: 0123456789*+-/', () => {
        const code = unusualFive.toString();
        const forbiddenChars = '0123456789*+-/';
        for (let char of forbiddenChars) {
            expect(code.includes(char)).toBe(false);
        }
    });
});