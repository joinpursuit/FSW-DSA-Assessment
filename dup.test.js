const {sum, find_duplicate} = require('./dup');

test('finds duplicates', () => {
  expect(find_duplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])).toEqual([4,7]);
});




test('adds 1 and 2 ', () => {
  expect(sum(1,2)).toBe(3);
});