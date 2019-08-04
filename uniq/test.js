import uniq from './solution';

describe('uniq', () => {
  test('returns correct result', () => {
    const input = ['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c'];

    expect(uniq(input)).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
  });
});
