const correctPolishLetters = require('./index.js');

test('Sample Test for polish alphabet', () => {
    expect(correctPolishLetters("Jędrzej Błądziński")).toBe("Jedrzej Bladzinski");
    expect(correctPolishLetters("Lech Wałęsa")).toBe("Lech Walesa");
    expect(correctPolishLetters("Maria Skłodowska-Curie")).toBe("Maria Sklodowska-Curie");
});