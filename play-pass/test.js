import playPass, {
  handleDigit,
  handleLetterIndex,
  handleLetterOffset
} from './solution'

describe('handleLetterOffset', () => {
  test('returns next letter by the given offset', () => {
    expect(handleLetterOffset('A', 3)).toEqual('D')
    expect(handleLetterOffset('S', 5)).toEqual('X')
  })

  test('handles out of range offsets', () => {
    expect(handleLetterOffset('Z', 3)).toEqual('C')
    expect(handleLetterOffset('Y', 5)).toEqual('D')
  })
})

describe('handleLetterIndex', () => {
  test('converts letter to uppercase if index is even', () => {
    expect(handleLetterIndex('s', 2)).toEqual('S')
    expect(handleLetterIndex('s', 1)).toEqual('s')
    expect(handleLetterIndex('S', 1)).toEqual('s')
  })
})

describe('handleDigit', () => {
  test('subtracts the given number from 9', () => {
    expect(handleDigit(7)).toEqual(2)
    expect(handleDigit(5)).toEqual(4)
    expect(handleDigit(9)).toEqual(0)
  })
})

describe('playPass', () => {
  test('returns correct result', () => {
    expect(playPass('ABC 2015', 1)).toEqual('4897 DcB')
    expect(playPass('I LOVE YOU!!!', 1)).toEqual('!!!vPz fWpM J')
    expect(
      playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2)
    ).toEqual('4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO')
  })
})
