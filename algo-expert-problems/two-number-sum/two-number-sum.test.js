const twoNumberSum = require('./two-number-sum');

test('two sum works right', () => {
    expect(twoNumberSum([1, 2, 3, 4, 4], 8)).toMatchObject([4, 4])
});

test('two sum works right', () => {
    expect(twoNumberSum([1, 2, 3], 8)).toBe("no matches")
});

test('two sum works right', () => {
    expect(twoNumberSum([], 8)).toBe("no matches")
});