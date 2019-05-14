import solution from './solution';

describe('solution', () => {
  it('returns correct result', () => {
    expect(solution('1234567890')).toEqual(67890);
    expect(solution('1234567898765')).toEqual(98765);
  });
});