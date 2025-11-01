const splitAndMerge = require('./index.js');

describe('splitAndMerge', () => {
    it('should split and merge the string correctly', () => {
        expect(splitAndMerge("My name is John", " ")).toBe("M y n a m e i s J o h n");
        expect(splitAndMerge("My name is John", "-")).toBe("M-y n-a-m-e i-s J-o-h-n");
        expect(splitAndMerge("Hello World!", ".")).toBe("H.e.l.l.o W.o.r.l.d.!");
        expect(splitAndMerge("Hello World!", ",")).toBe("H,e,l,l,o W,o,r,l,d,!");
    });

    it('should handle empty strings', () => {
        expect(splitAndMerge("", " ")).toBe("");
        expect(splitAndMerge("", "-")).toBe("");
    });
});