const multiply = require('./index');

test("multiply number by 5 raised to the number of digits of each number", () => {
    expect(multiply(3)).toBe(15);
    expect(multiply(10)).toBe(250);
    expect(multiply(200)).toBe(25000);
    expect(multiply(0)).toBe(0);
    expect(multiply(-3)).toBe(-15);
});