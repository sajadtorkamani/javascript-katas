import sumOrProduct from './solution';

describe('sumOrProduct', () => {
  test('returns correct result', () => {
    expect(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual('sum');
    expect(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)).toEqual('product');
    expect(sumOrProduct([10, 20, 3, 30, 5, 4], 3)).toEqual('same');
  });
});