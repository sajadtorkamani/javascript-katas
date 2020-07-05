import sing from './solution'

describe('sing', () => {
  test('returns correct result', () => {
    const result = sing()

    expect(result[0]).toEqual(
      '99 bottles of beer on the wall, 99 bottles of beer.'
    )
    expect(result[199]).toEqual(
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })
})
