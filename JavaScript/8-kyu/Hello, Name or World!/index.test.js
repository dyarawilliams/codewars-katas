const hello = require('./index.js');

describe('hello', () => {
    test('should return "Hello, John!" when name is "john"', () => {
        expect(hello('john')).toBe('Hello, John!');
    });

    test('should return "Hello, Alice!" when name is "aliCE"', () => {
        expect(hello('aliCE')).toBe('Hello, Alice!');
    });

    test('should return "Hello, World!" when name is not given', () => {
        expect(hello()).toBe('Hello, World!');
    });

    test('should return "Hello, World!" when name is an empty string', () => {
        expect(hello('')).toBe('Hello, World!');
    });
});