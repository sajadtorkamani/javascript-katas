import autocomplete from './solution';

describe('autocomplete', () => {
  test('returns matching words from dictionary that start with the given string', () => {
    expect(
      autocomplete('ai', ['airplane', 'airport', 'apple', 'ball'])
    ).toEqual(['airplane', 'airport']);

    expect(
      autocomplete('ma', ['manufacture', 'mankind', 'melon', 'computer'])
    ).toEqual(['manufacture', 'mankind']);
  });

  test('is case-insensitive', () => {
    expect(
      autocomplete('ma', ['MANUFACTURE', 'mAnkind', 'melon', 'computer'])
    ).toEqual(['MANUFACTURE', 'mAnkind']);
  });

  test('returns only first five matches', () => {
    expect(
      autocomplete('ai', ['airplane', 'airport', 'apple', 'ball', 'airstrip', 'ailing', 'airborn', 'airing'])
    ).toEqual(['airplane', 'airport', 'airstrip', 'ailing', 'airborn']);
  });

  test('ignores non-letters in input string', () => {
    expect(
      autocomplete('a%3i.', ['airplane', 'airport', 'apple'])
    ).toEqual(['airplane', 'airport']);
  });
});