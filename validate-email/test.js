import validate from './solution'

describe('validate', () => {
  test('validates that input is a valid email', () => {
    expect(validate('abc@example.com')).toEqual(true)
    expect(validate('_bc@example.com')).toEqual(false)
    expect(validate('abc_123@a-1_23.co.uk')).toEqual(true)
    expect(validate('abc@abc')).toEqual(false)
    expect(validate('abc@example.com#')).toEqual(false)
  })
})
