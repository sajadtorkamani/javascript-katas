import isDigit from './solution'

describe('isDigit', () => {
  test('handles simple digits', () => {
    expect(isDigit('3')).toEqual(true)
    expect(isDigit('45')).toEqual(true)
  })

  test('handles negative digits', () => {
    expect(isDigit('  -34  ')).toEqual(true)
  })

  test('handles decimal digits', () => {
    expect(isDigit('3.23')).toEqual(true)
  })

  test('handles edge cases', () => {
    expect(isDigit('  -3.23 ')).toEqual(true)
  })

  test('handles invalid digits', () => {
    expect(isDigit('foo')).toEqual(false)
    expect(isDigit('--4')).toEqual(false)
    expect(isDigit('55f')).toEqual(false)
  })
})
