import wordsToMarks from './solution'

describe('wordsToMarks', () => {
  test('returns correct result', () => {
    expect(wordsToMarks('attitude')).toEqual(100)
    expect(wordsToMarks('friends')).toEqual(75)
    expect(wordsToMarks('family')).toEqual(66)
    expect(wordsToMarks('selfness')).toEqual(99)
    expect(wordsToMarks('knowledge')).toEqual(96)
  })
})
