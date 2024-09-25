const addFive = require('./index');

describe("add five to any number", () => {
    test ("return the new value", ()=> {
        expect(addFive(5)).toBe(10);
        expect(addFive(0)).toBe(5);
        expect(addFive(-5)).toBe(0);
    });
});