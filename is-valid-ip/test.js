import isValidIP from './solution';

describe('isValidIP', () => {
  test('correctly validates whether the input is a valid IP', () => {
    expect(isValidIP('0.0.0.0')).toEqual(true);
    expect(isValidIP('12.255.56.1')).toEqual(true);
    expect(isValidIP('137.255.156.100')).toEqual(true);
    expect(isValidIP('238.46.26.43')).toEqual(true);

    expect(isValidIP('')).toEqual(false);
    expect(isValidIP('abc.def.ghi.jkl')).toEqual(false);
    expect(isValidIP('123.456.789.0')).toEqual(false);
    expect(isValidIP('12.34.56')).toEqual(false);
    expect(isValidIP('01.02.03.04')).toEqual(false);
    expect(isValidIP('256.1.2.3')).toEqual(false);
    expect(isValidIP('1.2.3.4.5')).toEqual(false);
    expect(isValidIP('123,45,67,89')).toEqual(false);
    expect(isValidIP('1e0.1e1.1e2.2e2')).toEqual(false);
    expect(isValidIP(' 1.2.3.4')).toEqual(false);
    expect(isValidIP('1.2.3.4 ')).toEqual(false);
    expect(isValidIP('12.34.56.-7')).toEqual(false);
    expect(isValidIP('1.2.3.4\n')).toEqual(false);
    expect(isValidIP('\n1.2.3.4')).toEqual(false);
  });
});