import { sumCubes } from './solution';

describe('sumCubes', () => {
  test('returns correct result', () => {
    [[1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876]].forEach(
      ([n, expected]) => expect(sumCubes(n)).toEqual(expected)
    );
  });
});
