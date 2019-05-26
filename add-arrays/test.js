import addArrays from './solution';

describe('addArrays', () => {
  test('adds the two arrays correctly', () => {
    expect(addArrays([6, 7], [6, 7])).toEqual([1, 3, 4]);
    expect(addArrays([-6, 7], [1, 0])).toEqual([-5, 7]);
    expect(addArrays([], [])).toEqual([]);
  });
});