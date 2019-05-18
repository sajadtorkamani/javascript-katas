import errBob from './solution';

describe('errBob', () => {
  test('returns correct result', () => {
    expect(errBob('Hello, I am Mr Bob')).toEqual('Hello, I amerr Mrerr Boberr');
    expect(errBob('THIS, is crazy!')).toEqual('THISERR, iserr crazyerr!');
    // expect(errBob('r r r r r r r r')).toEqual('rerr rerr rerr rerr rerr rerr rerr rerr');
    // expect(errBob('hI, hi. hI hi skY! sky? skY sky')).toEqual('hI, hi. hI hi skYERR! skyerr? skYERR skyerr');
    // expect(errBob('This, is. another! test? case to check your beautiful code.')).toEqual('Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.');
  });
});