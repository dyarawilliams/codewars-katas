const solution = require('./index');

describe('Reversed Strings', () => {
    test('should be a function', () => {
        expect(typeof solution).toBe('function');
    });

    test('reverse the string passed into function', () => {
        expect(solution("world")).toBe("dlrow");
        expect(solution("hello")).toBe("olleh");
        expect(solution('javascript')).toBe("tpircsavaj");
    });
});

