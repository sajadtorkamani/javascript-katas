import getHashtags from './solution'

describe('getHashtags', () => {
  test('returns all valid hashtags from string', () => {
    expect(getHashtags('Hello #world')).toEqual(['world'])
    expect(getHashtags('#sorryNotSorry')).toEqual(['sorryNotSorry'])
    expect(getHashtags('#foo bar#baz #foobar# ##foobaz')).toEqual([
      'foo',
      'foobaz'
    ])
  })
})
