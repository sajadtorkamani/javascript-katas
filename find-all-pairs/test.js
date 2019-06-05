import duplicates from './solution';

describe('duplicates', () => {
  test('returns correct result', () => {
    expect(duplicates([1, 2, 5, 6, 5, 2])).toEqual(2);
    expect(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])).toEqual(4);
    expect(duplicates([0, 0, 0, 0, 0, 0, 0])).toEqual(3);
    expect(duplicates([1000, 1000])).toEqual(1);
    expect(duplicates([])).toEqual(0);
    expect(duplicates([54])).toEqual(0);
  });
});