import strongEnough from './solution';

describe('strongEnough', () => {
  test('returns correct result', () => {
    expect(strongEnough([[2, 3, 1], [3, 1, 1], [1, 1, 2]], 2)).toEqual('Safe!');
    expect(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 2)).toEqual('Safe!');
    expect(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 3)).toEqual('Needs Reinforcement!');
  });
});