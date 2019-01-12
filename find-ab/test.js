import findAB from './solution';

describe('findAB', () => {
  test('returns correct result', () => {
    expect(findAB([1, 2, 3], 3)).toEqual([1, 3]);
    expect(findAB([1, 2, 3], 6)).toEqual([2, 3]);
    expect(findAB([1, 2, 3], 7)).toEqual(null);
    expect(findAB([1, 2, 3, 6], 6)).toEqual([1, 6]);
    expect(findAB([1, 2, 3, 4, 5, 6], 15)).toEqual([3, 5]);
    expect(findAB([0, 0, 2], 4)).toEqual(null);
    expect(findAB([0, 0, 2, 2], 4)).toEqual([2, 2]);
    expect(findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4)).toEqual([-2, -2]);
    expect(findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0)).toEqual([-3, 0]);
    expect(findAB([-3, -2, -1, 0, 1, 2, 3, 4], 4)).toEqual([1, 4]);
  });
});