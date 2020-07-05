import { meeting } from './solution'

describe('#meeting', () => {
  test('returns correct result', () => {
    expect(meeting(['X', 'O', 'X'])).toEqual(1)
    expect(meeting(['O', 'X', 'X', 'X', 'X'])).toEqual(0)
    expect(meeting(['X', 'X', 'X', 'X', 'X'])).toEqual('None available!')
  })
})
