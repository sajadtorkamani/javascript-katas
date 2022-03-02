import validate from './solution'

describe('validate', () => {
  test('returns true if valid uvb-76 format', () => {
    expect(validate('MDZHB 85 596 KLASA 81 00 02 91')).toEqual(true)
    expect(validate('MDZHB 12 733 EDINENIE 67 79 66 32')).toEqual(true)
  })

  test('returns false if not valid uvb-76 format', () => {
    expect(validate('Is this a right message?')).toEqual(false)
    expect(validate('MDZHV 60 130 VATRUKH 58 89 54 54')).toEqual(false)
  })
})
