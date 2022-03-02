import isLockNessMonster from './solution'

describe('isLockNessMonster', () => {
  test('returns correct result', () => {
    expect(isLockNessMonster('foo bar tree fiddy foo')).toBe(true)
    expect(isLockNessMonster('foo bar three fifty foo')).toBe(true)
    expect(isLockNessMonster('foo bar 3.50 foo')).toBe(true)
    expect(isLockNessMonster('foo bar foo three bar')).toBe(false)
  })
})
