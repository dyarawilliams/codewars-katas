const seatsInTheater = require('./index.js');

describe('seatsInTheater', () => {
    test('should return the number of people who sit strictly behind you and in your column or to the left', () => {
        expect(seatsInTheater(16, 11, 5, 3)).toBe(96);
        expect(seatsInTheater(1, 1, 1, 1)).toBe(0);
        expect(seatsInTheater(13, 6, 8, 3)).toBe(18);
    });
});