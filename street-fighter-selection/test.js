import streetFighterSelection from './solution';

describe('streetFighterSelection', () => {
  const FIGHTERS = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
  ];

  test('returns correct result', () => {
    const moves = ['up', 'left', 'right', 'left', 'left'];
    const expectedResult = ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual(
      expectedResult
    );
  });

  test('works with no moves', () => {
    const moves = [];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([]);
  });

  test('handles left moves only', () => {
    const moves = [
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left'
    ];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([
      'Vega',
      'Balrog',
      'Guile',
      'Blanka',
      'E.Honda',
      'Ryu',
      'Vega',
      'Balrog'
    ]);
  });

  test('handles right moves only', () => {
    const moves = [
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right',
      'right'
    ];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([
      'E.Honda',
      'Blanka',
      'Guile',
      'Balrog',
      'Vega',
      'Ryu',
      'E.Honda',
      'Blanka'
    ]);
  });

  test('handles vertical moves', () => {
    const moves = [
      'up',
      'left',
      'down',
      'right',
      'up',
      'left',
      'down',
      'right'
    ];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken'
    ]);
  });

  test('handles down moves only', () => {
    const moves = ['down', 'down', 'down', 'down'];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([
      'Ken',
      'Ken',
      'Ken',
      'Ken'
    ]);
  });

  test('handles up moves only', () => {
    const moves = ['up', 'up', 'up', 'up'];

    expect(streetFighterSelection(FIGHTERS, [0, 0], moves)).toEqual([
      'Ryu',
      'Ryu',
      'Ryu',
      'Ryu'
    ]);
  });
});
