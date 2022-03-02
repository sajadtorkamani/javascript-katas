import randomCase from './solution'

describe('randomCase', () => {
  test('returns correct result', () => {
    const inputs = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Donec eleifend cursus lobortis',
      'THIS IS AN ALL CAPS STRING',
      'this is an all lower string'
    ]

    inputs.forEach(input => {
      const result = randomCase(input)

      expect(result.toLowerCase()).toEqual(input.toLowerCase())
      expect(result).not.toEqual(input)
      expect(result).not.toEqual(input.toUpperCase())
      expect(result).not.toEqual(input.toLowerCase())
    })
  })
})
