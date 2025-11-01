const correctTail = require('./index');

// toBeTruthy matches any thing that an if statement treats as true
test ("is this my tail (true)", () => {
    expect(correctTail("Fox", "x")).toBeTruthy();
    expect(correctTail("Rhino", "o")).toBeTruthy();
    expect(correctTail("Meerkat", "t")).toBeTruthy();
});

// toBeFalsy matches any thing that an if statement treats as false
test ("is this my tail (false)", () => {
    expect(correctTail("Dog", "a")).toBeFalsy();
    expect(correctTail("Cat", "b")).toBeFalsy();
    expect(correctTail("Tiger", "t")).toBeFalsy();
});
