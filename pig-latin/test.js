import pigLatin from './solution';

describe('pigLatin', () => {
  test('handles words starting with vowel', () => {
    expect(pigLatin('egg')).toEqual('eggway');
  });

  test('handles words starting with consonant', () => {
    expect(pigLatin('mnap')).toEqual('apmnay');
  });

  test('handles words with non-alpha characters', () => {
    expect(pigLatin('tes3t5')).toEqual(null);
  });
});
