import { reOrdering } from './solution'

describe('#reOrdering', () => {
  test('returns correct result', () => {
    expect(reOrdering('ming Yao')).toEqual('Yao ming')
    expect(reOrdering('Mano donowana')).toEqual('Mano donowana')
    expect(reOrdering('wario LoBan hello')).toEqual('LoBan wario hello')
  })
})
