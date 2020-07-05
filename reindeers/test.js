import reindeers from './solution'

describe('reindeers', () => {
  test('returns correct result', () => {
    expect(reindeers(0)).toEqual(2)
    expect(reindeers(1)).toEqual(3)
    expect(reindeers(30)).toEqual(3)
    expect(reindeers(80)).toEqual(5)

    expect(() => {
      reindeers(200)
    }).toThrow()
  })
})
