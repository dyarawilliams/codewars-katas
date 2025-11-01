const problem = require("./index.js");

describe("Super Duper Easy", () => {
    it("should return 56 when input is 1", () => {
        expect(problem(1)).toBe(56);
    });

    it("should return 6 when input is 0", () => {
        expect(problem(0)).toBe(6);
    });

    it("should return 'Error' when input is 'test'", () => {
        expect(problem("test")).toBe("Error");
    });

    it("should return -44 when input is -1", () => {
        expect(problem(-1)).toBe(-44);
    });
});