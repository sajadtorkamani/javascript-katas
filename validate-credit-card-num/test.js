import validate from './solution';

describe('validate', () => {
  test('correctly validates credit card number using the Luhn algorithm', () => {
    expect(validate(2121)).toEqual(true);
    expect(validate(1230)).toEqual(true);
    expect(validate(26)).toEqual(true);
    expect(validate(4111111111111111)).toEqual(true);

    expect(validate(891)).toEqual(false);
    expect(validate(92)).toEqual(false);
    expect(validate(8675309)).toEqual(false);
  });
});