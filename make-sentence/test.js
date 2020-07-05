import makeSentence from './solution'

describe('makeSentence', () => {
  test('returns correctly formed sentence from given parts', () => {
    expect(makeSentence(['hello', 'world'])).toEqual('hello world.')
    expect(makeSentence(['hello', ',', 'my', 'dear'])).toEqual(
      'hello, my dear.'
    )
    expect(makeSentence(['hello', 'world', '.', '.', '.'])).toEqual(
      'hello world.'
    )
  })
})
