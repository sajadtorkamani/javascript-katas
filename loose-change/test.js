import looseChange from './solution'

describe('looseChange', () => {
  test('returns correct result', () => {
    expect(looseChange(56)).toEqual({
      Nickels: 1,
      Pennies: 1,
      Dimes: 0,
      Quarters: 2
    })
    expect(looseChange(100)).toEqual({
      Nickels: 0,
      Pennies: 0,
      Dimes: 0,
      Quarters: 4
    })
    expect(looseChange(0)).toEqual({
      Nickels: 0,
      Pennies: 0,
      Dimes: 0,
      Quarters: 0
    })
    expect(looseChange(-3)).toEqual({
      Nickels: 0,
      Pennies: 0,
      Dimes: 0,
      Quarters: 0
    })
    expect(looseChange(7.9)).toEqual({
      Nickels: 1,
      Pennies: 2,
      Dimes: 0,
      Quarters: 0
    })
  })
})
