import dayPlan from './solution'

describe('dayPlan', () => {
  test('returns correct result', () => {
    expect(dayPlan(8, 5, 30)).toEqual([30, 83, 30, 83, 30, 83, 30, 83, 30])
    expect(dayPlan(2, 2, 60)).toEqual([60, 0, 60])
    expect(dayPlan(3, 5, 60)).toEqual("You're not sleeping tonight!")
  })
})
