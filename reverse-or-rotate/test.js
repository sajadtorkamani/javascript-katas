import revrot from './solution';

describe('revrot', () => {
  test('returns correct result', () => {
    expect(revrot('123456987654', 6)).toEqual('234561876549');
    expect(revrot('123456987653', 6)).toEqual('234561356789');
    expect(revrot('66443875', 4)).toEqual('44668753');
    expect(revrot('66443875', 8)).toEqual('64438756');
    expect(revrot('664438769', 8)).toEqual('67834466');
    expect(revrot('123456779', 8)).toEqual('23456771');
    expect(revrot('', 8)).toEqual('');
    expect(revrot('123456779', 0)).toEqual('');
    expect(revrot('563000655734469485', 4)).toEqual('0365065073456944');
    expect(revrot('1234', 10)).toEqual('');
  });
});
