import { isNarcissistic } from './solution';

describe('isNarcissistic', () => {
  test('returns true if number is narcissistic', () => {
    expect(isNarcissistic(153)).toBe(true);
    expect(isNarcissistic(1)).toBe(true);
    expect(isNarcissistic(370)).toBe(true);
    expect(isNarcissistic(371)).toBe(true);
  });

  test('returns false if number is not narcissistic', () => {
    expect(isNarcissistic(324)).toBe(false);
    expect(isNarcissistic(435)).toBe(false);
  });
});
