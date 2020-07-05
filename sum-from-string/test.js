import sumFromString from './solution'

describe('sumFromString', () => {
  test('returns correct result', () => {
    expect(
      sumFromString('In 2015, I want to know how much does iPhone 6+ cost?')
    ).toEqual(2021)
    expect(sumFromString('1+1=2')).toEqual(4)
    expect(sumFromString('e=mc^2')).toEqual(2)
  })
})
