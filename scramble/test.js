import scramble from './solution';

describe('scramble', () => {
  test('returns correct result', () => {
    expect(scramble('abcd', [0, 3, 1, 2])).toEqual('acdb');
    expect(scramble('sc301s', [4, 0, 3, 1, 5, 2])).toEqual('c0s3s1');
    expect(scramble('bskl5', [2, 1, 4, 3, 0])).toEqual('5sblk');
  });
});