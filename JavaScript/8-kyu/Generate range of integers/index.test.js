const generateRange = require("./index.js");

describe("generateRange", () => {
    test("should return an array of numbers from min to max, incrementing by step", () => {
        expect(generateRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
        expect(generateRange(1, 10, 3)).toEqual([1, 4, 7, 10]);
        expect(generateRange(-10, 1, 1)).toEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]);
    });

    test("should return an empty array if min is greater than max", () => {
        expect(generateRange(10, 2, 2)).toEqual([]);
    });
});
