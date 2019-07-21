import range from './solution';

describe('range', () => {
  test('returns correct result', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(range(1, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(0, 30, 5)).toEqual([0, 5, 10, 15, 20, 25]);
    expect(range(1, 4, 0)).toEqual([1, 1, 1]);
    expect(range(0)).toEqual([]);
    expect(range(10, 0)).toEqual([]);
  });
});
