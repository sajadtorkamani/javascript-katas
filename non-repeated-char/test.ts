import firstNonRepeated from './solution';

describe('firstNonRepeatedChar', () => {
  test('handles simple cases', () => {
    expect(firstNonRepeated('test')).toEqual('e');
    expect(firstNonRepeated('teeter')).toEqual('r');
    expect(firstNonRepeated('1122321235121222')).toEqual('5');
    expect(firstNonRepeated('rend')).toEqual('r');
  });

  test('returns null if no repeating char in string', () => {
    expect(firstNonRepeated('aabbcc')).toBeNull();
  });
});

/**
 * Split into chars array
 * Find first char with count of 1 in string
 */
