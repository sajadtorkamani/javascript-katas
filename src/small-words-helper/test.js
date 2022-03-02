import smallWordHelper from './solution'

describe('smallWordHelper', () => {
  test('returns correct result', () => {
    expect(
      smallWordHelper('The quick brown fox jumps over the lazy dog')
    ).toEqual('THE qck brwn FOX jmps vr THE lzy DOG')

    expect(
      smallWordHelper("I'm just a small word from a small word family")
    ).toEqual("I'M jst A smll wrd frm A smll wrd fmly")
  })
})
