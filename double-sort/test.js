import { dbSort } from './solution';

describe('dbSort', () => {
  test('returns correct result', () => {
    expect(dbSort([6, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 6]);
    expect(dbSort([14, 32, 3, 5, 5])).toEqual([3, 5, 5, 14, 32]);
    expect(dbSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])).toEqual([0, 2, 2, "Apple", "Banana", "Mango", "Orange"]);
    expect(dbSort(["C", "W", "W", "W", 1, 2, 0])).toEqual([0, 1, 2, "C", "W", "W", "W"]);
  });
});
