import group from './solution'

describe('group', () => {
  test('returns correct result', () => {
    expect(group([3, 2, 6, 2, 1, 3])).toEqual([[3, 3], [2, 2], [6], [1]])
    // expect(group([3, 2, 6, 2])).toEqual([[3], [2, 2], [6]]);
  })
})
