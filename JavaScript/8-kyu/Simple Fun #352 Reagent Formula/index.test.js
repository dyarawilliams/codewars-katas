const isValid = require('./index.js');

test('Sample test for Reagent Formula', () =>{
    expect(isValid([1, 3, 7])).toBeTruthy();
    expect(isValid([7, 1, 2, 3])).toBeFalsy();
    expect(isValid([1, 3, 5, 7])).toBeFalsy();
    expect(isValid([1, 5, 6, 7, 3])).toBeTruthy();
    expect(isValid([5, 6, 7])).toBeTruthy();
    expect(isValid([5, 6, 7, 8])).toBeTruthy();
    expect(isValid([6, 7, 8])).toBeFalsy();
    expect(isValid([7, 8])).toBeTruthy();
    expect(isValid([1, 2, 3, 4, 5, 6, 7, 8])).toBeFalsy();
});