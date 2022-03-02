import './solution'

describe('Array#each', () => {
  test('works correctly', () => {
    const letters = ['a', 'b', 'c', 'd', 'e']
    let allowedLetters = []

    letters.each(letter => {
      if (letter === 'd') {
        return true
      }

      allowedLetters.push(letter)
    })
    expect(allowedLetters).toEqual(['a', 'b', 'c'])
  })
})
