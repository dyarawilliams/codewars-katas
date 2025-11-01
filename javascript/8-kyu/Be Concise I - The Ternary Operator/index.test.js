const describeAge = require('./index.js');

describe('describeAge', () => {
    it('should return "You\'re a(n) kid" for age 12 or lower', () => {
        expect(describeAge(12)).toBe("You're a(n) kid");
        expect(describeAge(0)).toBe("You're a(n) kid");
        expect(describeAge(5)).toBe("You're a(n) kid");
    });
    
    it('should return "You\'re a(n) teenager" for age between 13 and 17', () => {
        expect(describeAge(13)).toBe("You're a(n) teenager");
        expect(describeAge(15)).toBe("You're a(n) teenager");
        expect(describeAge(17)).toBe("You're a(n) teenager");
    });
    
    it('should return "You\'re a(n) adult" for age between 18 and 64', () => {
        expect(describeAge(18)).toBe("You're a(n) adult");
        expect(describeAge(30)).toBe("You're a(n) adult");
        expect(describeAge(64)).toBe("You're a(n) adult");
    });
    
    it('should return "You\'re a(n) elderly" for age 65 or above', () => {
        expect(describeAge(65)).toBe("You're a(n) elderly");
        expect(describeAge(70)).toBe("You're a(n) elderly");
        expect(describeAge(100)).toBe("You're a(n) elderly");
    });
});