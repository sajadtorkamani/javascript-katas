import { isThueMorse } from './solution';

describe('#isThueMorse', () => {
  test('returns true if sequence is Thue-Morse', () => {
    expect(isThueMorse([0, 1, 1, 0, 1])).toBe(true);
    expect(isThueMorse([0])).toBe(true);
  });

  test('returns false if sequence is not Thue-Morse', () => {
    expect(isThueMorse([0, 1, 0, 0])).toBe(false);
    expect(isThueMorse([1])).toBe(false);
  });
});