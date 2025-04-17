const addLength = require("../index.js");

describe("addLength", () => {
    it("should return an array of strings with the length of each word added", () => {
        expect(addLength("apple ban")).toEqual(["apple 5", "ban 3"]);
        expect(addLength("you will win")).toEqual(["you 3", "will 4", "win 3"]);
        expect(addLength("hello world")).toEqual(["hello 5", "world 5"]);
        expect(addLength("a b c")).toEqual(["a 1", "b 1", "c 1"]);
        expect(addLength("one two three four five")).toEqual([
        "one 3",
        "two 3",
        "three 5",
        "four 4",
        "five 4",
        ]);
    });
});