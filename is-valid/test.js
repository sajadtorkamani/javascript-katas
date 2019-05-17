import isValid from './solution';

describe('isValid', () => {
  test('returns correct result', () => {
    expect(isValid('okay_ok1')).toEqual(true);
    expect(isValid('$ok')).toEqual(true);
    expect(isValid('___')).toEqual(true);
    expect(isValid('str_STR')).toEqual(true);
    expect(isValid('myIdentf')).toEqual(true);

    expect(isValid('1ok0okay')).toEqual(false);
    expect(isValid('!Ok')).toEqual(false);
    expect(isValid('')).toEqual(false);
    expect(isValid('str-str')).toEqual(false);
    expect(isValid('no no')).toEqual(false);
  });
});