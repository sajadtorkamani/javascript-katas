import isAnagram from './solution';

describe('isAnagram', () => {
  test('returns correct result', () => {
    expect(isAnagram('William Shakespeare', 'I am a weakish speller')).toEqual(true);
    expect(isAnagram('Silent', 'Listen')).toEqual(true);
    expect(isAnagram('Car', 'Cat')).toEqual(false);
    expect(isAnagram('12345', '54321')).toEqual(true);
  });
});