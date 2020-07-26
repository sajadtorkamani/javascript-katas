import mostFrequentDays, { countWeekdaysInYear } from './solution'

describe('mostFrequentDays', () => {
  test('returns correct result', () => {
    expect(mostFrequentDays(2020)).toEqual(['Wednesday', 'Thursday'])
    expect(mostFrequentDays(2427)).toEqual(['Friday'])
    expect(mostFrequentDays(2185)).toEqual(['Saturday'])
    expect(mostFrequentDays(2860)).toEqual(['Thursday', 'Friday'])
  })
})

describe('countWeekdaysInYear', () => {
  test('returns number of times a weekday occurs in a year', () => {
    expect(countWeekdaysInYear('Monday', 2020)).toEqual(52)
    expect(countWeekdaysInYear('Tuesday', 2020)).toEqual(52)
    expect(countWeekdaysInYear('Wednesday', 2020)).toEqual(53)
    expect(countWeekdaysInYear('Thursday', 2020)).toEqual(53)
    expect(countWeekdaysInYear('Friday', 2020)).toEqual(52)
    expect(countWeekdaysInYear('Saturday', 2020)).toEqual(52)
    expect(countWeekdaysInYear('Sunday', 2020)).toEqual(52)
  })
})
