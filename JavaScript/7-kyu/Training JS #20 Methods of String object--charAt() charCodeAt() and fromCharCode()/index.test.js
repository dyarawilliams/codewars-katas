const topSecret = require('./index');

describe('topSecret', () => {
    it('should decrypt the file correctly', () => {
        expect(topSecret("Pb qdph lv Mrkq.")).toBe("My name is John.");
        expect(topSecret("wklv lv dq hadpsoh")).toBe("this is an example");
        expect(topSecret("Khoor Zruog")).toBe("Hello World");
    });

});