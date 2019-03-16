import asteriscIt from './solution';

describe('asteriscIt', () => {
  test('returns correct result', () => {
    expect(asteriscIt(5312708)).toEqual('531270*8');
    expect(asteriscIt(9682135)).toEqual('96*8*2135');
    expect(asteriscIt(2222)).toEqual('2*2*2*2');
    expect(asteriscIt(1111)).toEqual('1111');
    expect(asteriscIt(9999)).toEqual('9999');
    expect(asteriscIt('0000')).toEqual('0*0*0*0');
    expect(asteriscIt(8)).toEqual('8');
    expect(asteriscIt([1, 2, 4, 8, 16])).toEqual('12*4*816')
  });
});