const quarterOf = require('./index.js');

describe('quarterOf', () => {
    it('should return 1 for January', () => {
        expect(quarterOf(1)).toBe(1);
    });
    
    it('should return 1 for February', () => {
        expect(quarterOf(2)).toBe(1);
    });
    
    it('should return 1 for March', () => {
        expect(quarterOf(3)).toBe(1);
    });
    
    it('should return 2 for April', () => {
        expect(quarterOf(4)).toBe(2);
    });
    
    it('should return 2 for May', () => {
        expect(quarterOf(5)).toBe(2);
    });
    
    it('should return 2 for June', () => {
        expect(quarterOf(6)).toBe(2);
    });
    
    it('should return 3 for July', () => {
        expect(quarterOf(7)).toBe(3);
    });
    
    it('should return 3 for August', () => {
        expect(quarterOf(8)).toBe(3);
    });
    
    it('should return 3 for September', () => {
        expect(quarterOf(9)).toBe(3);
    });
    
    it('should return 4 for October', () => {
        expect(quarterOf(10)).toBe(4);
    });
    
    it('should return 4 for November', () => {
        expect(quarterOf(11)).toBe(4);
    });
    
    it('should return 4 for December', () => {
        expect(quarterOf(12)).toBe(4);
    });
});