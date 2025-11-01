const preFizz = require('./index');

describe("Pre-FizzBuzz Workout #1", () => {
    test("return array of positive integers", () => {
        expect(preFizz(1)).toEqual([1]);
        expect(preFizz(2)).toEqual([1, 2]);
        expect(preFizz(3)).toEqual([1, 2, 3]);
        expect(preFizz(4)).toEqual([1, 2, 3, 4]);
    });
});