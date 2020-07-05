import { absentVowel } from './solution'

describe('absentVowel', () => {
  test('returns correct result', () => {
    expect(
      absentVowel('Bb Smith sent us six neatly arranged range bicycles')
    ).toEqual(3)
    expect(absentVowel('John Doe hs seven red pples under his bsket')).toEqual(
      0
    )
  })
})
