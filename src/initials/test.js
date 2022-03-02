import initials from './solution'

describe('initials', () => {
  test('returns correct result', () => {
    expect(initials('code wars')).toEqual('C.Wars')
    expect(initials('Barack hussain obama')).toEqual('B.H.Obama')
    expect(initials('barack hussain Obama')).toEqual('B.H.Obama')
  })
})
