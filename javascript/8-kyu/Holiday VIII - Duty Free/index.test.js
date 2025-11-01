const dutyFree = require('./index');

describe("Holiday VII - Duty Free", () => {
    test("return number of bottles have to purchase", () => {
        expect(dutyFree(12, 50, 1000)).toBe(166);
        expect(dutyFree(17, 10, 500)).toBe(294);
        expect(dutyFree(24, 35, 3000)).toBe(357);
    });
});