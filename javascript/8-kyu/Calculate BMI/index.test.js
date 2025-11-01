const bmi = require("./index.js");

describe("bmi", () => {
    it("should return 'Underweight' for bmi <= 18.5", () => {
        expect(bmi(50, 1.8)).toBe("Underweight");
    });
    
    it("should return 'Normal' for bmi <= 25.0", () => {
        expect(bmi(70, 1.75)).toBe("Normal");
    });
    
    it("should return 'Overweight' for bmi <= 30.0", () => {
        expect(bmi(85, 1.75)).toBe("Overweight");
    });
    
    it("should return 'Obese' for bmi > 30", () => {
        expect(bmi(100, 1.75)).toBe("Obese");
    });
});