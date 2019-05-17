import { decode, encode } from './solution';

describe('encode', () => {
  test('encodes vowels correctly', () => {
    expect(encode('hello')).toEqual('h2ll4');
  });
});

describe('decode', () => {
  test('decodes vowels correctly', () => {
    expect(decode('h2ll4')).toEqual('hello');
  });
});
