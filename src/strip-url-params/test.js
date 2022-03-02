import stripUrlParams from './solution'

describe('stripUrlParams', () => {
  test('strips duplicate url params', () => {
    expect(stripUrlParams('www.codewars.com?a=1&b=2&a=2')).toEqual(
      'www.codewars.com?a=1&b=2'
    )
    expect(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])).toEqual(
      'www.codewars.com?a=1'
    )
    expect(stripUrlParams('www.codewars.com', ['b'])).toEqual(
      'www.codewars.com'
    )
  })
})
