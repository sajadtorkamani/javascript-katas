import getIssuer from './solution'

describe('getIssuer', () => {
  test('returns AMEX when number is 15 digits and begins with 34 or 37', () => {
    expect(getIssuer(341234512345123)).toEqual('AMEX')
    expect(getIssuer(371234512345123)).toEqual('AMEX')
    expect(getIssuer(340101010101010)).toEqual('AMEX')
    expect(getIssuer(370101010101010)).toEqual('AMEX')
  })

  test('returns Discover when number is 16 digits and begins with 6011', () => {
    expect(getIssuer(6011929292929292)).toEqual('Discover')
    expect(getIssuer(6011020202020202)).toEqual('Discover')
  })

  test('returns Mastercard when number is 16 digits and begins with 51, 52, 53, 54 or 55', () => {
    expect(getIssuer(5111929292929292)).toEqual('Mastercard')
    expect(getIssuer(5211929292929292)).toEqual('Mastercard')
    expect(getIssuer(5311929292929292)).toEqual('Mastercard')
    expect(getIssuer(5411929292929292)).toEqual('Mastercard')
    expect(getIssuer(5119292929292922)).toEqual('Mastercard')
  })

  test('returns VISA when number is 13 or 16 digits and begins with 4', () => {
    expect(getIssuer(4123451234512345)).toEqual('VISA')
    expect(getIssuer(4123451234512)).toEqual('VISA')
  })

  test('returns Unknown when number is not a recognized pattern', () => {
    expect(getIssuer(34010101010101)).toEqual('Unknown') // Almost like AMEX
    expect(getIssuer(37010101010101)).toEqual('Unknown') // Almost like AMEX
    expect(getIssuer(6012929292929292)).toEqual('Unknown') // Almost like Discover
    expect(getIssuer(5011929292929292)).toEqual('Unknown') // Almost like Mastercard
    expect(getIssuer(412345123451234)).toEqual('Unknown') // Almost like VISA
  })
})
