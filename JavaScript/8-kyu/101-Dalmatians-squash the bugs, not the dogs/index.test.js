const howManyDalmatians = require('./index.js');

describe("howManyDalmatians", () => {
    test("should return 'Hardly any' for 10 or fewer dogs", () => {
        expect(howManyDalmatians(10)).toBe("Hardly any");
    });

    test("should return 'More than a handful!' for more than 10 but 50 or fewer dogs", () => {
        expect(howManyDalmatians(20)).toBe("More than a handful!");
    });

    test("should return 'Woah that's a lot of dogs!' for more than 50 but not 101 dogs", () => {
        expect(howManyDalmatians(60)).toBe("Woah that's a lot of dogs!");
    });

    test("should return '101 DALMATIANS!!!' for exactly 101 dogs", () => {
        expect(howManyDalmatians(101)).toBe("101 DALMATIANS!!!");
    });
});