import whatCentury from './solution'

describe('whatCentury', () => {
  test('returns correct result', () => {
    expect(whatCentury('1999')).toEqual('20th')
    expect(whatCentury('2011')).toEqual('21st')
    expect(whatCentury('2154')).toEqual('22nd')
    expect(whatCentury('2259')).toEqual('23rd')
    expect(whatCentury('1124')).toEqual('12th')
    expect(whatCentury('2000')).toEqual('20th')
    expect(whatCentury('2100')).toEqual('21st')
  })
})
