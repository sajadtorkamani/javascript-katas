import bald from './solution'

describe('bald', () => {
  test('returns correct result', () => {
    expect(bald('/---------')).toEqual(['----------', 'Unicorn!'])
    expect(bald('/-----/-')).toEqual(['--------', 'Homer!'])
    expect(bald('--/--/---/-/---')).toEqual(['---------------', 'Careless!'])
  })
})
