const shortcut = require('./index');

test("vowel remover", () => {
    expect(shortcut("hello")).toBe("hll")
    expect(shortcut("codewars")).toBe("cdwrs");
    expect(shortcut("goodbye")).toBe("gdby")
    expect(shortcut("HELLO")).toBe("HELLO") // take a look at this if it is uppercase 
    expect(shortcut("how are you today?")).toBe("hw r y tdy?");
});