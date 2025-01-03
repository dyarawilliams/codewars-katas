const shark = require('./index.js');

test('Sample test for Holiday VI- Shark Pontoon', () => {
    expect(shark(12, 50, 4, 8, true)).toBe('Alive!');
    expect(shark(7, 55, 4, 16, true)).toBe('Alive!');
    expect(shark(24, 0, 4, 8, true)).toBe('Shark Bait!');
    expect(shark(24, 0, 4, 16, false)).toBe('Shark Bait!');
})