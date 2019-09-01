import countCombinations from './solution';

describe('countCombinations', () => {
  test('handles simple cases', () => {
    expect(
      countCombinations('my name is billy and billy is awesome', 'billy')
    ).toEqual(2);
    expect(
      countCombinations('abcdefghijklmonopolymonorailqrstuv', 'mono')
    ).toEqual(2);

    expect(countCombinations('@#$##@@@', '@')).toEqual(4);
  });

  test('matches case-insensitively', () => {
    expect(countCombinations('GrEggreGGREGgREG', 'greg')).toEqual(4);
  });

  test('handles no occurrence case', () => {
    expect(countCombinations('wow nothing', 'yeah')).toEqual(0);
  });

  test('does not include overlapping matches', () => {
    expect(countCombinations('lololololol', 'lol')).toEqual(3);
  });

  test('handles regex needles', () => {
    expect(countCombinations('93049', '\\d')).toEqual(5);
    expect(countCombinations('Five ', '.')).toEqual(5);
  });
});
