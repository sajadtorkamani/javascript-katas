import { change } from './solution';

describe('change', () => {
  test('returns correct change for customer who is not John', () => {
    expect(change('Alice', [4, 2, 1.5], 10)).toEqual(2.5);
    expect(change('Bob', [7], 5)).toEqual(-2);
  });

  test('returns correct change for customer who is John', () => {
    expect(change('John', [1.2, 1.4], 5)).toEqual(2.8);
    expect(change('John', [7], 5)).toEqual(0);
  });
});