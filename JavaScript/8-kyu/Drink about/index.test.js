const peopleWithAgeDrink = require('./index.js');

describe("peopleWithAgeDrink", () => {
    test("should return 'drink toddy' for age 13", () => {
        expect(peopleWithAgeDrink(13)).toBe("drink toddy");
    });

    test("should return 'drink coke' for age 17", () => {
        expect(peopleWithAgeDrink(17)).toBe("drink coke");
    });

    test("should return 'drink beer' for age 18", () => {
        expect(peopleWithAgeDrink(18)).toBe("drink beer");
    });

    test("should return 'drink beer' for age 20", () => {
        expect(peopleWithAgeDrink(20)).toBe("drink beer");
    });

    test("should return 'drink whisky' for age 30", () => {
        expect(peopleWithAgeDrink(30)).toBe("drink whisky");
    });
});