import wordSearch from './solution';

const exampleText = 'what makes the desert beautiful, said the little prince is that somewhere it hides a well';

describe('wordSearch', () => {
  test('returns correct result', () => {
    expect(wordSearch('desert', exampleText)).toEqual(true);
    expect(wordSearch('blue', exampleText)).toEqual(false);
    expect(wordSearch('well', exampleText)).toEqual(true);
    expect(wordSearch('house', exampleText)).toEqual(false);
    expect(wordSearch('beautiful', exampleText)).toEqual(true);
    expect(wordSearch('prince', exampleText)).toEqual(true);
    expect(wordSearch('le prince', exampleText)).toEqual(false);
  });
});