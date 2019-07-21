import binaryToString from './solution';

describe('binaryToString', () => {
  test('returns correct result', () => {
    // Test alpha chars
    expect(binaryToString('01100001')).toEqual('a');
    expect(
      binaryToString('01001011010101000100100001011000010000100101100101000101')
    ).toEqual('KTHXBYE');

    // Test numeric
    expect(binaryToString('00110001001100000011000100110001')).toEqual('1011');

    // Test special chars
    expect(binaryToString('001111000011101000101001')).toEqual('<:)');

    // Test empty input
    expect(binaryToString('')).toEqual('');
  });
});
