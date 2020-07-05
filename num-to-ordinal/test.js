import { numberToOrdinal } from './solution'

describe('numberToOrdinal', () => {
  test('returns correct result', () => {
    expect(numberToOrdinal(11)).toEqual('11th')
    expect(numberToOrdinal(12)).toEqual('12th')
    expect(numberToOrdinal(13)).toEqual('13th')
    expect(numberToOrdinal(111)).toEqual('111th')
    expect(numberToOrdinal(112)).toEqual('112th')
    expect(numberToOrdinal(1)).toEqual('1st')
    expect(numberToOrdinal(2)).toEqual('2nd')
    expect(numberToOrdinal(3)).toEqual('3rd')
    expect(numberToOrdinal(4)).toEqual('4th')
    expect(numberToOrdinal(0)).toEqual('0')
  })
})
