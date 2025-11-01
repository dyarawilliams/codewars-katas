const howMuchILoveYou = require('./index');

describe('howMuchILoveYou', () => {
    it('should return "I love you" for 1 petal', () => {
        expect(howMuchILoveYou(1)).toBe("I love you");
    });

    it('should return "a little" for 2 petals', () => {
        expect(howMuchILoveYou(2)).toBe("a little");
    });

    it('should return "a lot" for 3 petals', () => {
        expect(howMuchILoveYou(3)).toBe("a lot");
    });

    it('should return "passionately" for 4 petals', () => {
        expect(howMuchILoveYou(4)).toBe("passionately");
    });

    it('should return "madly" for 5 petals', () => {
        expect(howMuchILoveYou(5)).toBe("madly");
    });

    it('should return "not at all" for 6 petals', () => {
        expect(howMuchILoveYou(6)).toBe("not at all");
    });

    it('should cycle back to "I love you" for 7 petals', () => {
        expect(howMuchILoveYou(7)).toBe("I love you");
    });

    it('should handle larger numbers of petals correctly', () => {
        expect(howMuchILoveYou(8)).toBe("a little");
        expect(howMuchILoveYou(9)).toBe("a lot");
        expect(howMuchILoveYou(10)).toBe("passionately");
        expect(howMuchILoveYou(11)).toBe("madly");
        expect(howMuchILoveYou(12)).toBe("not at all");
        expect(howMuchILoveYou(13)).toBe("I love you");
    });
});