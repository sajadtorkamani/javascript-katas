import addLetters from './solution';

describe('addLetters', () => {
  test('returns correct result', () => {
    expect(addLetters('a', 'b', 'c')).toEqual('f');
    expect(addLetters('a', 'b')).toEqual('c');
    expect(addLetters('z')).toEqual('z');
    expect(addLetters('u', 'p', 'b', 'm', 'h', 'h', 'a', 'i')).toEqual('z');
  });

  test('handles overflows', () => {
    expect(addLetters('z', 'a')).toEqual('a');
    expect(addLetters('y', 'c', 'b')).toEqual('d');
  });

  test('handles empty input', () => {
    expect(addLetters()).toEqual('z');
  });

  /**
   * Calculate total numerical sum (6)
   * Convert number to corresponding alphabet (f)
   * Edge case: Handle overflows
   */
});
