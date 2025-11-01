const stringToArray = require('./index');

describe('stringToArray', () => {
    it('should convert a string to an array of words', () => {
        expect(stringToArray("Robin Singh")).toEqual(["Robin", "Singh"]);
        expect(stringToArray("I love arrays they are my favorite")).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"]);
        
    });
});