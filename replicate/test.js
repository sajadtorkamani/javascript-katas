import replicate from './solution';

describe('replicate', () => {
  test('returns correct result', () => {
    expect(replicate(3, 5)).toEqual([5, 5, 5]);
    expect(replicate(5, 1)).toEqual([1, 1, 1, 1, 1]);
    expect(replicate(0, 12)).toEqual([]);
    expect(replicate(-1, 12)).toEqual([]);
    expect(replicate(8, 0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });
});