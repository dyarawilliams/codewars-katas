const fiveLine = require('./index.js');

describe('fiveLine', () => {
    it('should return the correct string for input "  a"', () => {
        expect(fiveLine("  a")).toBe("a\naa\naaa\naaaa\naaaaa");
    });

    it('should return the correct string for input "  xy "', () => {
        expect(fiveLine("\txy \n")).toBe("xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    });

    it('should return the correct string for input "  hello "', () => {
        expect(fiveLine("           Ok               ")).toBe("Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
    });
});