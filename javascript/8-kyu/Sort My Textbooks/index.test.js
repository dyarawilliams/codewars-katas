const sorter = require('./index');

describe('sorter', () => {
    it('should sort the textbooks by subject', () => {
        expect(sorter(["Algebra", "History", "Geometry", "English"])).toEqual(["Algebra", "English", "Geometry", "History"]);
        expect(sorter(["Algebra", "history", "Geometry", "english"])).toEqual(["Algebra", "english", "Geometry", "history"]);
        expect(sorter(["Math", "science", "History"])).toEqual(["History", "Math", "science"]);
        expect(sorter(["Alg#bra", "$istory", "Geom^try", "**english"])).toEqual(["$istory", "**english", "Alg#bra", "Geom^try"]);
    });
})