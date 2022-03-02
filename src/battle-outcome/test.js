import battleOutcome from './solution'

describe('battleOutcome', () => {
  test('Simple battles: both players roll a single die', () => {
    expect(battleOutcome([1], [4])).toEqual([1, 0])
    expect(battleOutcome([5], [5])).toEqual([1, 0])
    expect(battleOutcome([6], [3])).toEqual([0, 1])
  })
  test('Typical battles: attacker rolls three dice, defender rolls one or two dice', () => {
    expect(battleOutcome([1, 6, 2], [5])).toEqual([0, 1])
    expect(battleOutcome([2, 3, 4], [3, 2])).toEqual([0, 2])
    expect(battleOutcome([5, 2, 4], [4, 4])).toEqual([1, 1])
  })
})
