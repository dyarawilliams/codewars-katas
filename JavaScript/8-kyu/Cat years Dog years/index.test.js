const humanYearsCatYearsDogYears = require('../index.js');

// Test cases
test('Test Case 1', () => {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
});
test('Test Case 2', () => {
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
});
test('Test Case 3', () => {
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64]);
});
test('Test Case 4', () => {
    expect(humanYearsCatYearsDogYears(0)).toEqual([0, 0, 0]);
});