import intDiff from './solution';

describe('intDiff', () => {
  test('returns correct result', () => {
    expect(intDiff([1, 1, 5, 6, 9, 16, 27], 4)).toEqual(3);
    expect(intDiff([1, 1, 3, 3], 2)).toEqual(4);
  });
});