import mineColor from './solution';

describe('mineColor', () => {
  test('returns correct result', () => {
    expect(mineColor('a', 8)).toEqual('white');
    expect(mineColor('b', 2)).toEqual('black');
    expect(mineColor('f', 5)).toEqual('white');
  });
});
