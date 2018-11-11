import { trouble } from './solution';

describe.skip('#trouble', () => {
  test('returns correct result', () => {
    // expect(trouble([1, 3, 5, 6, 7, 4, 3], 7)).toEqual([1, 3, 5, 6, 7, 4]);
    // expect(trouble([4, 1, 1, 1, 4], 2)).toEqual([4, 1, 4]);
    // expect(trouble([2, 2, 2, 2, 2, 2], 4)).toEqual([2]);
    expect(trouble(
      [6, 6, 6, 4, 3, 3, 7, 5, 9, 5, 7, 5, 5, 3, 1, 4, 8, 1, 7, 4, 7, 6, 3], 7)).toEqual(
      [6, 6, 6, 4, 7, 5, 9, 5, 7, 5, 5, 3, 1, 4, 8, 1, 7, 4, 7, 6, 3]
    );

    expect(trouble(
      [4, 8, 7, 8, 5, 2, 2, 3, 3, 2, 9, 1, 1, 7, 3, 5, 7, 3, 9, 9], 5).toEqual(
      [4, 8, 7, 8, 5, 2, 2, 2, 9, 1, 1, 7, 3, 5, 7, 3, 9, 9]
    ));
  });
});
