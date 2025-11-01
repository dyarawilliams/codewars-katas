const multiTable = require('./index');

describe("Multiplication table for number", () => {
    test("return a multiplication table from 1 to 10", () => {
        expect(multiTable(5)).toBe("1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50");
        expect(multiTable(1)).toBe("1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10");
        expect(multiTable(7)).toBe("1 * 7 = 7\n2 * 7 = 14\n3 * 7 = 21\n4 * 7 = 28\n5 * 7 = 35\n6 * 7 = 42\n7 * 7 = 49\n8 * 7 = 56\n9 * 7 = 63\n10 * 7 = 70");
        expect(multiTable(3)).toBe("1 * 3 = 3\n2 * 3 = 6\n3 * 3 = 9\n4 * 3 = 12\n5 * 3 = 15\n6 * 3 = 18\n7 * 3 = 21\n8 * 3 = 24\n9 * 3 = 27\n10 * 3 = 30");
    });
});