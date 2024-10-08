const reverse = require('./index')

describe("Reversing Words in a String", () => {
    test("return string of words reversed" , () => {
        expect(reverse("Hello World")).toBe("World Hello");
        expect(reverse("Hi There.")).toBe("There. Hi");
        expect(reverse("I am an expert at this")).toBe("this at expert an am I");
        expect(reverse("This is so easy")).toBe("easy so is This");
    });
});