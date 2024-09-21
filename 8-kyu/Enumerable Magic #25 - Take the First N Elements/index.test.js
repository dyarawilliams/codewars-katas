const take = require('./index');

test('return the first n elements', () => {
    expect(take([0,1,2,3,5,8,13], 3)).toEqual([0,1,2]);
    expect(take([10, 59, -38, -26, 55], 2)).toEqual([10, 59]);
    expect(
      take(
        [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
        13
      )
    ).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]);
});