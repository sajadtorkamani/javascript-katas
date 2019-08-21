import leaderB from './solution';

describe('leaderB', () => {
  test('returns correct result', () => {
    expect(leaderB('g964', 36097, 20000)).toEqual(
      "To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!"
    );
    expect(leaderB('GiacomoSorbi', 23914, 23867)).toEqual(
      "To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata."
    );
    expect(leaderB('ZozoFouchtra', 15991, 12000)).toEqual(
      "To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!"
    );

    expect(leaderB('JohnDoe', 100, 300)).toEqual('Winning!');

    expect(leaderB('JohnDoe', 100, 100)).toEqual('Only need one!');
  });
});
