import stringChunk from './solution';

describe('stringChunk', () => {
  test('returns correct result', () => {
    expect(stringChunk('codewars', 2)).toEqual(['co', 'de', 'wa', 'rs']);
    expect(stringChunk('thiskataeasy', 4)).toEqual(['this', 'kata', 'easy']);
    expect(stringChunk('hello world', 3)).toEqual(['hel', 'lo ', 'wor', 'ld']);

    expect(stringChunk('foobar', 7)).toEqual(['foobar']);
    expect(stringChunk('sunny day', 0)).toEqual([]);
    expect(stringChunk()).toEqual([]);
  });
});
