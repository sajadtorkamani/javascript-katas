import validate from './solution';

describe('validate', () => {
  test('returns correct result', () => {
    expect(validate('djI38D55')).toEqual(true);
    expect(validate('a2.d412')).toEqual(false);
    expect(validate('JHD5FJ53')).toEqual(false);
    expect(validate('!fdjn345')).toEqual(false);
    expect(validate('Password123')).toEqual(true);
    expect(validate('fjd3IR9.;')).toEqual(false);
  });
});