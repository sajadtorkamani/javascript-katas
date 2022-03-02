import findMiddle from './solution'

describe('findMiddle', () => {
  test('returns correct result', () => {
    expect(findMiddle('s7d8jd9')).toEqual(0)
    expect(findMiddle('58jd9fgh/fgh6s.,sdf')).toEqual(16)
  })

  test('handles string with no numbers', () => {
    expect(findMiddle('asd.fasd.gasdfgsdfgh-sdfghsdfg/asdfga=sdfg')).toEqual(-1)
  })

  test('handles invalid inputs', () => {
    expect(findMiddle(2)).toEqual(-1)
  })
})
