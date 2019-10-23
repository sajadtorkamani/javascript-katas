import save from './solution';

describe('save', () => {
  test('returns correct result', () => {
    expect(save([4, 4, 4, 3, 3], 12)).toEqual(3);
    expect(save([4, 4, 4, 3, 3], 11)).toEqual(2);
    expect(save([4, 8, 15, 16, 23, 42], 108)).toEqual(6);
    expect(save([13], 13)).toEqual(1);
    expect(save([1, 2, 3, 4], 250)).toEqual(4);
    expect(save([100], 500)).toEqual(1);
    expect(save([11, 13, 15, 17, 19], 8)).toEqual(0);
    expect(save([45], 12)).toEqual(0);
  });
});
