import gameWinners from './solution';

describe('gameWinners', () => {
  test('returns correct result', () => {
    expect(gameWinners([100, 'yes'], [100, 'no'])).toEqual('Gryffindor wins!');
    expect(gameWinners([350, 'no'], [250, 'yes'])).toEqual('Slytherin wins!');
    expect(gameWinners([100, 'yes'], [250, 'no'])).toEqual('It\'s a draw!');
  });
});