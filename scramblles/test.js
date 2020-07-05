import scramble from './solution'

describe('scramble', () => {
  test('returns correct result', () => {
    expect(scramble('scriptjava', 'javascript')).toEqual(true)
    expect(scramble('rkqodlw', 'world')).toEqual(true)
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toEqual(true)
    expect(scramble('scriptjava', 'javascript')).toEqual(true)
    expect(scramble('scriptingjava', 'javascript')).toEqual(true)
    expect(scramble('scriptsjava', 'javascripts')).toEqual(true)
    expect(scramble('aabbcamaomsccdd', 'commas')).toEqual(true)

    expect(scramble('jscripts', 'javascript')).toEqual(false)
    expect(scramble('katas', 'steak')).toEqual(false)
  })
})
