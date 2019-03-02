import countChar from './solution';

describe('countChar', () => {
  test('returns correct result', () => {
    expect(countChar('fizzbuzz', 'z')).toEqual(4);
    expect(countChar('JAVASCRIPT', 'a')).toEqual(2);
  });
});