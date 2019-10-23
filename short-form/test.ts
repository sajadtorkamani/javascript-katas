import shortForm from './solution';

describe('shortForm', () => {
  test('returns correct result', () => {
    expect(shortForm('assault')).toEqual('asslt');
  });
});
