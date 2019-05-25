import mygcd from './solution';

describe('mygcd', () => {
  test('returns the greatest common divisor of a and b', () => {
    expect(mygcd(30, 12)).toEqual(6);
    expect(mygcd(60, 12)).toEqual(12);
    expect(mygcd(8, 9)).toEqual(1);
    expect(mygcd(1, 1)).toEqual(1);
  });
});