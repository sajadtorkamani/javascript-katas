import findUniq from './solution';

describe('findUniq', () => {
  test('returns the unique number from list of nums', () => {
    expect(findUniq([0, 1, 0])).toEqual(1);
    expect(findUniq([1, 1, 1, 2, 1, 1])).toEqual(2);
    expect(findUniq([3, 10, 3, 3, 3])).toEqual(10);
  });
});