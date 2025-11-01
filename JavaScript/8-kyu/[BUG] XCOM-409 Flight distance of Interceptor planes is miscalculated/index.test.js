const travelDistance = require('./index.js');


describe('travelDistance', () => {
    test('should return the correct travel distance in kilometers', () => {
        expect(travelDistance(600, 60)).toBeCloseTo(1111.2, 1);
        expect(travelDistance(800, 60)).toBeCloseTo(1481.6, 1);
    });
    test('should return 0 for 0 speed or 0 travel time', () => {
        expect(travelDistance(0, 60)).toBe(0);
        expect(travelDistance(600, 0)).toBe(0);
    });
    
    test('should handle large numbers', () => {
        expect(travelDistance(10000, 120)).toBeCloseTo(37040, 1);
        expect(travelDistance(10000, 0)).toBe(0);
    });
});