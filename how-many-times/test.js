import { howManyTimes } from './solution';

describe('howManyTimes', () => {
  test('returns correct result', () => {
    expect(howManyTimes(40, 15)).toEqual(3);
    expect(howManyTimes(30, 10)).toEqual(3);
    expect(howManyTimes(80, 15)).toEqual(6);
  });
});
