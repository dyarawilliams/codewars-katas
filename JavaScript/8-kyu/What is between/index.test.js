const between = require("./index.js");

describe("between", () => {
    test("returns an array of numbers between two given numbers", () => {
        expect(between(1, 4)).toEqual([1, 2, 3, 4]);
        expect(between(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
        expect(between(5, 5)).toEqual([5]);
        expect(between(0, 0)).toEqual([0]);
        expect(between(-3, -1)).toEqual([-3, -2, -1]);
    });
    
    test("returns an empty array when the first number is greater than the second", () => {
        expect(between(4, 1)).toEqual([]);
        expect(between(2, -2)).toEqual([]);
    });
    
    test("returns an empty array when the first number is equal to the second", () => {
        expect(between(5, 5)).toEqual([5]);
        expect(between(-1, -1)).toEqual([-1]);
    });
    
    test("handles negative numbers correctly", () => {
        expect(between(-5, -3)).toEqual([-5, -4, -3]);
        expect(between(-10, -8)).toEqual([-10, -9, -8]);
    });
    
    test("handles large ranges correctly", () => {
        expect(between(1000, 1005)).toEqual([1000, 1001, 1002, 1003, 1004, 1005]);
        expect(between(-1000, -995)).toEqual([-1000, -999, -998, -997, -996, -995]);
    });
});