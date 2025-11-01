const well = require('./index.js');

describe('well', () => {
    it('should return "Fail!" when there are no good ideas', () => {
        expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
    });

    it('should return "Publish!" when there are one or two good ideas', () => {
        expect(well(['good', 'bad', 'bad'])).toBe('Publish!');
        expect(well(['good', 'good', 'bad'])).toBe('Publish!');
    });

    it('should return "I smell a series!" when there are more than two good ideas', () => {
        expect(well(['good', 'good', 'good'])).toBe('I smell a series!');
        expect(well(['good', 'bad', 'good', 'good'])).toBe('I smell a series!');
    });
    it('should return "Fail!" when the input is an empty array', () => {
        expect(well([])).toBe('Fail!');
    });
});