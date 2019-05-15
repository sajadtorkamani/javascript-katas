import encrypt from './solution';

describe('encrypt', () => {
  test('encrypts text according to rule', () => {
    expect(encrypt('', 1)).toEqual( '');
    expect(encrypt('a', 1)).toEqual( 'b');
    expect(encrypt('please encrypt me', 2)).toEqual( 'rngcug"gpet{rv"og');
  });
});