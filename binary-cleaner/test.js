import binaryCleaner from './solution';

describe('binaryCleaner', () => {
  test('returns correct result', () => {
    expect(
      binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0])
    ).toEqual([[0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0], [2, 5, 10, 11, 12, 13]]);
    expect(binaryCleaner([0, 1, 1, 2, 0])).toEqual([[0, 1, 1, 0], [3]]);
    expect(binaryCleaner([2, 2, 0])).toEqual([[0], [0, 1]]);
    expect(binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1])).toEqual([
      [0, 1, 1, 0, 1, 1],
      [2, 5]
    ]);
    expect(binaryCleaner([1])).toEqual([[1], []]);
  });
});
