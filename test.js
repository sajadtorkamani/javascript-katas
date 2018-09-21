import { isSubsetOf, isSupersetOf } from './solution';

describe('isSubsetOf', () => {
  test('returns true if s1 is a subset of s2', () => {
    expect(isSubsetOf(new Set([1, 2, 3]), new Set([1, 2, 3, 4]))).toBe(true);
    expect(isSubsetOf(new Set([1, 2, 3]), new Set([1, 2, 4, 5]))).toBe(false);
  });
});

describe('isSupersetOf', () => {
  test('returns true if s1 is a superset of s2', () => {
    expect(isSupersetOf(new Set([1, 2, 3, 4]), new Set([1, 2]))).toBe(true);
    expect(isSupersetOf(new Set([1, 2, 3, 4]), new Set([1, 2, 5]))).toBe(false);
  });
});
