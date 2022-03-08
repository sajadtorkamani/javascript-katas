import { ponyExpress } from './ponyExpress'

describe('ponyExpress', () => {
  test(`returns the total number of ponyExpress needed to deliver the mail along 
  the station route`, () => {
    expect(ponyExpress([18, 15])).toEqual(1)
    expect(ponyExpress([43, 23, 40, 13])).toEqual(2)
    expect(ponyExpress([33, 8, 16, 47, 30, 30, 46])).toEqual(3)
    expect(
      ponyExpress([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])
    ).toEqual(4)
  })
})
