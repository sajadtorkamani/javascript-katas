import songDecoder from './solution';

describe('songDecoder', () => {
  test('returns correct result', () => {
    expect(songDecoder('AWUBBWUBC')).toEqual('A B C');
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toEqual('A B C');
    expect(songDecoder('WUBAWUBBWUBCWUB')).toEqual('A B C');
  });
});