import swap from './solution';

describe('swap', () => {
  test('returns string with all the vowels capitalised', () => {
    expect(swap('HelloWorld!')).toEqual('HEllOWOrld!');
    expect(swap('Sunday')).toEqual('SUndAy');
    expect(swap('SAjaD')).toEqual('SAjAD');
  });
});