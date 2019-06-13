import mineLocation from './solution';

describe('mineLocation', () => {
  test('returns correct result', () => {
    expect(mineLocation([[1, 0], [0, 0]])).toEqual([0, 0]);
    expect(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual([0, 0]);
    expect(
      mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]])
    ).toEqual([2, 2]);
  });
});
