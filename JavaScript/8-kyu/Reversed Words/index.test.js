const reverseWords = require("./index");

test("reverse the words passed into function", () => {
  expect(reverseWords("The greatest victory is that which requires no battle")).toBe("battle no requires which that is victory greatest The");
});
