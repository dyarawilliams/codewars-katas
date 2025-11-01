const toCsvText = require('./index');

test('Input is an array with length greater than 2', () => {
    const input = [[ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ]];
    expect(Array.isArray(input)).toBe(true);
    expect(input.length).toBeGreaterThan(2);
});

test('Test 1', () => {
    expect(toCsvText([[ 0, 1, 2, 3, 4 ], [ 10,11,12,13,14 ], [ 20,21,22,23,24 ], [ 30,31,32,33,34 ]])).toBe('0,1,2,3,4\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
    expect(toCsvText([[ 0, 1 ], [ 2, 3 ], [ 4, 5 ]])).toBe('0,1\n2,3\n4,5');
    expect(toCsvText([[ 0 ], [ 2 ], [ 4 ], [ 6 ]])).toBe('0\n2\n4\n6');
    expect(toCsvText([[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]])).toBe('0,1,2,3,4,5,6,7,8,9,10');
});
