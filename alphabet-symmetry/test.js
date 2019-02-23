import solve, { getCorrectPositionsCount } from './solution';

describe('getCorrectPositionsCount', () => {
  test('returns correct result', () => {
    expect(getCorrectPositionsCount('abode')).toEqual(4);
  });
});

describe('solve', () => {
  test('returns correct result', () => {
    expect(solve(['abode', 'ABc', 'xyzD'])).toEqual([4, 3, 1]);
    expect(solve(['abide', 'ABc', 'xyz'])).toEqual([4, 3, 0]);
    expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])).toEqual([6, 5, 7]);
    expect(solve(['encode', 'abc', 'xyzD', 'ABmD'])).toEqual([1, 3, 1, 3]);
  });
});