import whoIsPaying from './solution'

describe('whoIsPaying', () => {
  test('returns correct result', () => {
    expect(whoIsPaying('Mexico')).toEqual(['Mexico', 'Me'])
    expect(whoIsPaying('Melania')).toEqual(['Melania', 'Me'])
    expect(whoIsPaying('Melissa')).toEqual(['Melissa', 'Me'])
    expect(whoIsPaying('Me')).toEqual(['Me'])
    expect(whoIsPaying('')).toEqual([''])
    expect(whoIsPaying('I')).toEqual(['I'])
  })
})
