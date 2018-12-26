import bingo from './solution';

describe('bingo', () => {
  test('returns correct result', () => {
    expect(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual('LOSE');
    expect(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])).toEqual('WIN');
  });
});