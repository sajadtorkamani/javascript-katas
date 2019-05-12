import toWeirdCase, { toWeirdCaseWord } from './solution';

describe('toWeirdCaseWord', () => {
  test('converts even indexed chars to uppercase and odd indexed chars to lowercase', () => {
    expect(toWeirdCaseWord('sajad')).toEqual('SaJaD');
    expect(toWeirdCaseWord('foobar')).toEqual('FoObAr');
  });
});

describe('toWeirdCase', () => {
  test('converts string to weird case', () => {
    expect(toWeirdCase('This')).toEqual('ThIs');
    expect(toWeirdCase('is')).toEqual('Is');
    expect(toWeirdCase('This is a test')).toEqual('ThIs Is A TeSt');
  });
});