const derive = require('./index');

test('Sample test for Take the Derivative', () => {
    expect(derive(7, 8)).toBe('56x^7');
    expect(derive(5, 9)).toBe('45x^8');
    expect(derive(9, 5)).toBe('45x^4');
    expect(derive(4, 3)).toBe('12x^2');
    expect(derive(15, 9)).toBe('135x^8');
});