const solution = require('./index');

test('reverse the string passed into function', () => {
    expect(solution("world")).toBe("dlrow");
    expect(solution("hello")).toBe("olleh");
    expect(solution('javascript')).toBe("tpircsavaj");
});