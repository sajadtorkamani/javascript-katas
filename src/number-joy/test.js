import { getDigitsSum, isHarshadNum, numberJoy } from './solution'

describe('isHarshadNum', () => {
  test('returns true if number is a Harshad number', () => {
    expect(isHarshadNum(1998)).toEqual(true)
    expect(isHarshadNum(1729)).toEqual(true)
    expect(isHarshadNum(18)).toEqual(true)

    expect(isHarshadNum(1997)).toEqual(false)
    expect(isHarshadNum(15)).toEqual(false)
  })
})

describe('getDigitsSum', () => {
  test("returns sum of a number's digits", () => {
    expect(getDigitsSum(1729)).toEqual(19)
    expect(getDigitsSum(18)).toEqual(9)
  })
})

describe('numberJoy', () => {
  test('returns correct result', () => {
    expect(numberJoy(1997)).toEqual(false)
    expect(numberJoy(1998)).toEqual(false)
    expect(numberJoy(1729)).toEqual(true)
    expect(numberJoy(18)).toEqual(false)
    expect(numberJoy(1)).toEqual(true)
    expect(numberJoy(81)).toEqual(true)
    expect(numberJoy(1458)).toEqual(true)
  })
})
