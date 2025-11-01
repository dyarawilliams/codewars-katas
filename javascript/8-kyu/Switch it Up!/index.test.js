const switchItUp = require('./index');

describe('Switch it Up!', () => {
    it('should return "Zero" for input 0', () => {
        expect(switchItUp(0)).toBe("Zero");
    });
    
    it('should return "One" for input 1', () => {
        expect(switchItUp(1)).toBe("One");
    });
    
    it('should return "Two" for input 2', () => {
        expect(switchItUp(2)).toBe("Two");
    });
    
    it('should return "Three" for input 3', () => {
        expect(switchItUp(3)).toBe("Three");
    });
    
    it('should return "Four" for input 4', () => {
        expect(switchItUp(4)).toBe("Four");
    });
    
    it('should return "Five" for input 5', () => {
        expect(switchItUp(5)).toBe("Five");
    });
    
    it('should return "Six" for input 6', () => {
        expect(switchItUp(6)).toBe("Six");
    });
    
    it('should return "Seven" for input 7', () => {
        expect(switchItUp(7)).toBe("Seven");
    });
    
    it('should return "Eight" for input 8', () => {
        expect(switchItUp(8)).toBe("Eight");
    });
    
    it('should return "Nine" for input 9', () => {
        expect(switchItUp(9)).toBe("Nine");
    });
});