import validISBN10 from './solution'

describe('validISBN10', () => {
  test('validates string correctly', () => {
    expect(validISBN10('1112223339')).toEqual(true)
    expect(validISBN10('1234554321')).toEqual(true)
    expect(validISBN10('1234512345')).toEqual(false)
    expect(validISBN10('119')).toEqual(false)
    expect(validISBN10('X123456789')).toEqual(false)
    expect(validISBN10('XXXXXXXXXX')).toEqual(false)
  })
})
