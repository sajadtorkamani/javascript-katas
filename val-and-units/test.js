import valAndUnits from './solution'

describe('valAndUnits', () => {
  test('should handle integers', () => {
    const { val, units } = valAndUnits('12px')

    expect(val).toEqual(12)
    expect(units).toEqual('px')
  })

  test('should handle floats', () => {
    const { val, units } = valAndUnits('12.5%')
    expect(val).toEqual(12.5)
    expect(units).toEqual('%')
  })

  test('should handle negative numbers', () => {
    const { val, units } = valAndUnits('-1rem')
    expect(val).toEqual(-1)
    expect(units).toEqual('rem')
  })

  test('should handle unitless strings', () => {
    const { val, units } = valAndUnits('13')
    expect(val).toEqual(13)
    expect(units).toEqual('')
  })

  test('should handle spaces', () => {
    const { val, units } = valAndUnits('13 px')
    expect(val).toEqual(13)
    expect(units).toEqual('px')
  })
})
