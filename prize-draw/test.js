import rank, { calculateSom } from './solution';

describe('calculateSom', () => {
  test('returns correct result', () => {
    expect(calculateSom('PauL')).toEqual(54);
  });
});

describe('rank', () => {
  test('returns correct result', () => {
    expect(
      rank(
        'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
        [4, 2, 1, 4, 3, 1, 2],
        4
      )
    ).toEqual('Benjamin');

    expect(rank('Lagon,Lily', [1, 5], 2)).toEqual('Lagon');

    expect(
      rank(
        'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
        [4, 2, 1, 4, 3, 1, 2],
        8
      )
    ).toEqual('Not enough participants');
    expect(rank('', [4, 2, 1, 4, 3, 1, 2], 6)).toEqual('No participants');
  });
});
