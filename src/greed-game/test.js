import score from './solution'

describe('score', () => {
  test('returns correct result', () => {
    expect(score([2, 3, 4, 6, 2])).toEqual(0)
    expect(score([4, 4, 4, 3, 3])).toEqual(400)
    expect(score([2, 4, 4, 5, 4])).toEqual(450)
    expect(score([1, 1, 1, 3, 1])).toEqual(1100)
  })
})
