import { lastManStanding } from './lastManStanding'

describe('lastManStanding', () => {
  it('returns the last number standing', () => {
    expect(lastManStanding(9)).toEqual(6)
    expect(lastManStanding(10)).toEqual(8)
    expect(lastManStanding(100)).toEqual(54)
    expect(lastManStanding(1000)).toEqual(510)
  })
})
