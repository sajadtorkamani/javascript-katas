import past from './solution'

describe('past', () => {
  test('returns correct result', () => {
    expect(past(0, 1, 1)).toEqual(61000)
    expect(past(1, 1, 1)).toEqual(3661000)
    expect(past(0, 0, 0)).toEqual(0)
    expect(past(1, 0, 1)).toEqual(3601000)
    expect(past(1, 0, 0)).toEqual(3600000)
  })
})
