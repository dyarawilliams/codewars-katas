const replaceDots = require('./index');

describe("FIX ME: Replace all dots", () => {
    test("return dots replaced", () => {
      expect(replaceDots("one.two.three")).toBe("one-two-three");
      expect(replaceDots("Hello.World.Welcome.To.JAVASCRIPT")).toBe("Hello-World-Welcome-To-JAVASCRIPT");
      expect(replaceDots("candy.corn.for.halloweeen")).toBe("candy-corn-for-halloweeen");
      expect(replaceDots("seconds.minutes.hours")).toBe("seconds-minutes-hours");
    });
});