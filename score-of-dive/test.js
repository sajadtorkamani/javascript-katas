import scoreOfDive from './solution';

describe('scoreOfDive', () => {
  test('returns correct result', () => {
    expect(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3)).toEqual('64.50');
    expect(scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2)).toEqual('52.80');
    expect(scoreOfDive([7, 7, 7, 7.5, 6.5, 7, 7], 2.6)).toEqual('54.60');
  });
});