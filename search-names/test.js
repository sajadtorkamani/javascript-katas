import searchNames from './solution';

describe('searchNames', () => {
  test('returns correct result', () => {
    expect(
      searchNames(['foo', 'foo@bar.com', 'bar', 'bar@foo.com', '.foo', 'food@bar.com'])
    ).toEqual(['food@bar.com']);

    expect(
      searchNames(['foo', 'foo@bar.com', 'bar.', 'bar@foo.com', '.foo', 'food@bar.com'])
    ).toEqual(['bar@foo.com', 'food@bar.com']);
  });
});