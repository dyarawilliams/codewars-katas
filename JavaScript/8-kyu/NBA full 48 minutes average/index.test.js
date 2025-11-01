const pointsPer48 = require('./index');

// test('Function takes two arguments of numbers', () => {
//     expect(() => pointsPer48(12, 20)).not.toThrow();
//     expect(() => pointsPer48('12', 20)).toThrow();
//     expect(() => pointsPer48(12, '20')).toThrow();
//     expect(() => pointsPer48('12', '20')).toThrow();
// });

test('Returns a straight extrapolation of points per 48 minutes rounded to the nearest tenth', () => {
    expect(pointsPer48(12, 20)).toBe(28.8);
    expect(pointsPer48(10, 10)).toBe(48);
    expect(pointsPer48(5, 17)).toBe(14.1);
    expect(pointsPer48(0, 0)).toBe(0);
    expect(pointsPer48(25.5, 30)).toBe(40.8);
});
