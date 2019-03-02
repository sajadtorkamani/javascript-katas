import add from './solution';

describe('add', () => {
  test('returns correct result', () => {
    expect(add(100, 200, 300)).toEqual(1400);
  });
});