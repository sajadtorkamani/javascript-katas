import scoreThrows from './solution'

describe('scoreThrows', () => {
  test('returns correct result', () => {
    expect(scoreThrows([1, 5, 11])).toEqual(15)
    expect(scoreThrows([15, 20, 30])).toEqual(0)
  })

  test('rewards 100 bonus points if all radiuses are less than 5', () => {
    expect(scoreThrows([1, 2, 3, 4])).toEqual(140)
  })

  test('returns 0 if list is empty', () => {
    expect(scoreThrows([])).toEqual(0)
  })
})
