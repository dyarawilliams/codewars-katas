const humanYearsCatYearsDogYears = require('./index.js');

// Test cases
describe("humanYearsCatYearsDogYears", () => {
    it("should return the correct cat and dog years for 1 human year", () => {
        expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
    });

    it("should return the correct cat and dog years for 2 human years", () => {
        expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
    });

    it("should return the correct cat and dog years for 3 human years", () => {
        expect(humanYearsCatYearsDogYears(3)).toEqual([3, 28, 29]);
    });

    it("should return the correct cat and dog years for 4 human years", () => {
        expect(humanYearsCatYearsDogYears(4)).toEqual([4, 32, 34]);
    });

    it("should return the correct cat and dog years for 5 human years", () => {
        expect(humanYearsCatYearsDogYears(5)).toEqual([5, 36, 39]);
    });
});