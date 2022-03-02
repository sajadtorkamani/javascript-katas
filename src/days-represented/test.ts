import daysRepresented from './solution'

describe('daysRepresented', () => {
  test('returns correct result', () => {
    expect(daysRepresented([[10, 15], [25, 35]])).toEqual(17)
    expect(daysRepresented([[2, 8], [220, 229], [10, 16]])).toEqual(24)
  })

  test('handles overflows', () => {
    expect(daysRepresented([[2, 8], [6, 16], [17, 26]])).toEqual(25)
  })
})
