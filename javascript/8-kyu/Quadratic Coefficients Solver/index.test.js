const quadratic = require('./index.js');

test('Sample test for Quadratic Coefficients', () => {
    expect(quadratic(1,2)).toStrictEqual([1, -3, 2]);
    expect(quadratic(0,1)).toStrictEqual([1, -1, 0]);
    expect(quadratic(2,2)).toStrictEqual([1, -4, 4]);
});