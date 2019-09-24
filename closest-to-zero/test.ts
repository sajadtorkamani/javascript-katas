import closest from './solution';

describe('closest', () => {
  test('returns num closest to zero', () => {
    expect(closest([10, 3, 9, 1])).toEqual(1);
    expect(closest([2, 4, -1, -3])).toEqual(-1);
    expect(closest([13, 0, -6])).toEqual(0);
    expect(closest([2, 4, 8, 2, 10])).toEqual(2);
  });

  test('returns null when more than one candidate', () => {
    expect(closest([5, 1, -1, 2, -10])).toEqual(null);
    expect(closest([5, 11, 11, 2, -1, 1])).toEqual(null);
    expect(closest([-19, -13, 48, -28, -13, 13])).toEqual(null);
  });
});
