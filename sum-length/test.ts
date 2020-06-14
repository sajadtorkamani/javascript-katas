import sumLength from './solution';

describe('sumLength', () => {
  test('returns correct result', () => {
    expect(sumLength([1, 2, 3, 4, -1, -2, -3])).toEqual('10 3');
    expect(sumLength([1, 2, 3, 4, 0, -1, -2, -3])).toEqual('10 4');
    expect(sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3])).toEqual('10 5');
    expect(sumLength([-1, -2, -3, -4, 0, -1, 0, -2, 0, -3])).toEqual('0 9');
    expect(sumLength([1, 2, 3, 4, 1, 2, 3])).toEqual('16 0');
    expect(sumLength([0, 0, 0, 0, 0, 0, 0])).toEqual('0 4');
    expect(sumLength([])).toEqual('0 0');
  });
});
