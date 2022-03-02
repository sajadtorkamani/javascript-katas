import calculatePayout from './solution'

describe('calculatePayout', () => {
  test('returns correct result', () => {
    expect(calculatePayout([5.2, 143], [4.25, 1], 'Tails')).toEqual(
      'The outcome is Tails, In total I have to pay 4.25$ to the winner, I have pocketed 138.75$ !'
    )
  })
})
