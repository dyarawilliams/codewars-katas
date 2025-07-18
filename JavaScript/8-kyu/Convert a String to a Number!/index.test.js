const stringToNumber = require('./index.js');

describe('stringToNumber', () => {
    it('should convert string "1234" to number 1234', () => {
        expect(stringToNumber("1234")).toBe(1234);
    });

    it('should convert string "605" to number 605', () => {
        expect(stringToNumber("605")).toBe(605);
    });

    it('should convert string "1405" to number 1405', () => {
        expect(stringToNumber("1405")).toBe(1405);
    });

    it('should convert string "-7" to number -7', () => {
        expect(stringToNumber("-7")).toBe(-7);
    });
});