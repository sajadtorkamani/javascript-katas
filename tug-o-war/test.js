import tug_o_war from './solution'

describe('tug_o_war', () => {
  test('returns correct winner', () => {
    expect(tug_o_war([[1, 2, 3, 4, 6], [5, 4, 3, 2, 1]])).toEqual(
      'Team 1 wins!'
    )
    expect(tug_o_war([[2, 2, 2], [3, 3, 3]])).toEqual('Team 2 wins!')
  })

  test('returns correct winner if total strengths are tied but not anchors', () => {
    expect(tug_o_war([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]])).toEqual(
      'Team 2 wins!'
    )
    expect(tug_o_war([[5, 2, 3, 4, 1], [5, 2, 3, 4, 1]])).toEqual(
      'Team 1 wins!'
    )
  })

  test('returns tie if both total and anchor strengths are equal', () => {
    expect(tug_o_war([[4, 3, 2], [2, 3, 4]])).toEqual("It's a tie!")
  })
})
