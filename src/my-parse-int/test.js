import myParseInt from './solution'

describe('myParseInt', () => {
  test('returns correct result', () => {
    expect(myParseInt('1')).toEqual(1)
    expect(myParseInt('  1 ')).toEqual(1)
    expect(myParseInt('08')).toEqual(8)

    expect(myParseInt('5 friends')).toEqual('isNaN')
    expect(myParseInt('16.5')).toEqual('isNaN')
  })
})
