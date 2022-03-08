import { singleDigit } from './singleDigit'

describe('singleDigit', () => {
  test('reduces number to a single digit', () => {
    expect(singleDigit(5)).toEqual(5)
    expect(singleDigit(999)).toEqual(8)
    expect(singleDigit(1234444123)).toEqual(1)
    expect(singleDigit(443566)).toEqual(2)
    expect(singleDigit(565656565)).toEqual(3)
    expect(singleDigit(4868872)).toEqual(8)
    expect(singleDigit(234234235)).toEqual(2)
    expect(singleDigit(567448)).toEqual(7)
    expect(singleDigit(1000000000)).toEqual(3)
  })
})
