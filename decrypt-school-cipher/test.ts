import decrypt from './solution';

describe('decrypt', () => {
  test('returns correct result', () => {
    expect(decrypt("'101''99''105''108''65'")).toEqual('Alice');
    expect(decrypt("'98''111''66'")).toEqual('Bob');
    expect(decrypt('30 71')).toEqual('17 03');
    expect(
      decrypt(
        "2191 '110''105' '110''114''111''98' '115''97''119' '103''110''105''114''117''84' '110''97''108''65'"
      )
    ).toEqual('Alan Turing was born in 1912');
  });
});
