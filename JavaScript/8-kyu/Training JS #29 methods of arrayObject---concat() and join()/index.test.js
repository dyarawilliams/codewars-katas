const bigToSmall = require("./index.js")

describe("bigToSmall", () => {
    it("should return '6>5>4>3>2>1' for input [[1,2],[3,4],[5,6]]", () => {
        expect(bigToSmall([[1,2],[3,4],[5,6]])).toBe("6>5>4>3>2>1");
    });
    
    it("should return '6>5>4>3>2>1' for input [[1,3,5],[2,4,6]]", () => {
        expect(bigToSmall([[1,3,5],[2,4,6]])).toBe("6>5>4>3>2>1");
    });
    
    it("should return '1>1>1>1>1' for input [[1,1],[1],[1,1]]", () => {
        expect(bigToSmall([[1,1],[1],[1,1]])).toBe("1>1>1>1>1");
    });
});