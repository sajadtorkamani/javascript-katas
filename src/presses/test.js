import presses from './solution'

describe('presses', () => {
  test('returns correct result', () => {
    expect(presses('LOL')).toEqual(9)
    expect(presses('HOW R U')).toEqual(13)
  })
})
