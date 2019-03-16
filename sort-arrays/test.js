import sortArrays from './solution';

describe('sortArrays', () => {
  it('merges and sorts arr1 and arr2', () => {
    const arr1 = [6, 2, 4];
    const arr2 = [15, 10, 20, 1];

    expect(sortArrays(arr1, arr2)).toEqual([1, 2, 4, 6, 10, 15, 20]);
  });
});