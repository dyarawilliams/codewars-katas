const parseF = require('./index.js');

test('Sample test for Parse float', () => {
    expect(parseF('1')).toBe(1);
    expect(parseF('1.0')).toBe(1);
    expect(parseF('1.1')).toBe(1.1);
    expect(parseF('a')).toBe(null);
    expect(parseF('')).toBe(null);
});