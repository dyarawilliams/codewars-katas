const sakuraFall = require('./index.js');

test("Sample test for The falling speed of petals", () => {
    expect(sakuraFall(5)).toBe(80);
    expect(sakuraFall(10)).toBe(40);
    expect(sakuraFall(-1)).toBe(0);
});