const check = require('./index.js');

describe('You only need one - Beginner', () => {
    it('should return true if the array contains the value', () => {
        expect(check([66, 101], 66)).toBe(true);
        expect(check([101, 45, 75, 105, 99], 75)).toBe(true);
        expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
    });
    
    it('should return false if the array does not contain the value', () => {
        expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
        expect(check([1, 2, 3], 4)).toBe(false);
        expect(check(['apple', 'banana'], 'orange')).toBe(false);
    });
});