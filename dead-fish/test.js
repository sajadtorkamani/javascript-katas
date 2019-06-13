import parse from './solution';

describe.only('parse', () => {
  test('returns correct result', () => {
    expect(parse('iiisdoso')).toEqual([8, 64]);
  });
});
