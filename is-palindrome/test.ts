import isPalindrome from './solution';

describe('isPalindrome', () => {
  test('handles simple palindromes', () => {
    expect(isPalindrome('aba')).toEqual(true);
    expect(isPalindrome('bob')).toEqual(true);
    expect(isPalindrome('madam')).toEqual(true);
  });

  test('handles case-insensitive palindromes', () => {
    expect(isPalindrome('Aba')).toEqual(true);
    expect(isPalindrome('Madam')).toEqual(true);
  });

  test('handles non-palindromes', () => {
    expect(isPalindrome('sajad')).toEqual(false);
  });
});
