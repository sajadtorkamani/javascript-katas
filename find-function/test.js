import FindFunction from './solution';

describe('FindFunction', () => {
  test('returns correct result', () => {
    expect(FindFunction(
      [(a => a % 2 == 0), 9, 3, 1, 0],
      [1, 2, 3, 4])
    ).toEqual([2, 4]);

    expect(FindFunction(
      [9, 3, (a => a % 2), 1, 0],
      [1, 2, 3, 4])
    ).toEqual([1, 3]);
  });
});