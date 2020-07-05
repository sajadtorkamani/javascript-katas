import { capitalsFirst } from './solution'

describe('#capitalsFirst', () => {
  test('returns correct result', () => {
    expect(capitalsFirst('hey You, Sort me $foo Already!')).toEqual(
      'You, Sort Already! hey me'
    )
  })
})
