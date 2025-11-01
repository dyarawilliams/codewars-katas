const rooms = require('./index.js');

// Generate test suite for the rooms object
describe('rooms', () => {
    test('should have at least three rooms', () => {
        expect(Object.keys(rooms).length).toBeGreaterThanOrEqual(3);
    });
    
    test('each room should be an object', () => {
        for (let room in rooms) {
            expect(typeof rooms[room]).toBe('object');
        }
    });
    
    test('should contain at least three properties per room', () => {
        for (let room in rooms) {
            expect(Object.keys(rooms[room]).length).toBeGreaterThanOrEqual(3);
        }
    });
});