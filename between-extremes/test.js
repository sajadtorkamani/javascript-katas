import { betweenExtremes } from './solution';

describe('#betweenExtremes', () => {
  test('returns correct result', () => {
    expect(betweenExtremes([21, 34, 54, 43, 26, 12])).toEqual(42);
    expect(betweenExtremes([-1, -41, -77, -100])).toEqual(99);
  });
});
