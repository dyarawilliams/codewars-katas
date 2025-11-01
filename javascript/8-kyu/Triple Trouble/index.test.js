const tripleTrouble = require('./index');

describe('tripleTrouble', () => {
    test('should return "abcabc" for inputs "aa", "bb", "cc"', () => {
        expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
    });

    test('should return "abc" for inputs "a", "b", "c"', () => {
        expect(tripleTrouble("a", "b", "c")).toBe("abc");
    });
});