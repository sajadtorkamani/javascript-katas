import getADownArrowOf, { getRowString } from './solution'

describe('getADownArrowOf', () => {
  test('handles inputs below 10', () => {
    expect(getADownArrowOf(1)).toEqual('1')
    expect(getADownArrowOf(3)).toEqual('12321\n 121\n  1')
    expect(getADownArrowOf(5)).toEqual(
      '123454321\n 1234321\n  12321\n   121\n    1'
    )
  })

  test('handles input above or equal to 10', () => {
    expect(getADownArrowOf(10)).toEqual(
      '1234567890987654321\n 12345678987654321\n  123456787654321\n   1234567654321\n    12345654321\n     123454321\n      1234321\n       12321\n        121\n         1'
    )
  })

  test('handles inputs <= 0', () => {
    expect(getADownArrowOf(0)).toEqual('')
    expect(getADownArrowOf(-5)).toEqual('')
  })
})

describe('getRowString', () => {
  test('returns correct result', () => {
    expect(getRowString(5)).toEqual('123454321')
    expect(getRowString(11)).toEqual('123456789010987654321')
  })
})
