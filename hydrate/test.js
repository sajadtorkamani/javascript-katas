import hydrate from './solution';

describe('hydrate', () => {
  test('returns correct result', () => {
    expect(hydrate('1 beer')).toEqual('1 glass of water');
    expect(hydrate('2 glasses of wine and 1 shot')).toEqual(
      '3 glasses of water'
    );
    expect(
      hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer')
    ).toEqual('10 glasses of water');
  });
});
