import fifa from './solution';

describe('fifa', () => {
  test('returns correct result', () => {
    expect(fifa(
      {
        'Home': '£75',
        'Away': '£5000',
        'Draw': '£1324'
      },
      ['1-0', '2-3', '0-1'])
    ).toEqual('£5075');
  });
});