import { mergeArrays } from './solution';

describe('mergeArrays', () => {
  test('merges arrays correctly', () => {
    expect(mergeArrays(
      [1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])
    ).toEqual(
      [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
    );
  });
});