const dup = require('./dup');

test('finds duplicates', () => {
  expect(dup([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])).toEqual([4,7]);
});