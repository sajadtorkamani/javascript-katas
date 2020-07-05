import { moveTen, tenAlphabetsAhead } from './solution'

describe('tenAlphabetsForward', () => {
  test('returns alphabet that is ten positions ahead of the given letter', () => {
    expect(tenAlphabetsAhead('a')).toEqual('k')
    expect(tenAlphabetsAhead('q')).toEqual('a')
    expect(tenAlphabetsAhead('p')).toEqual('z')
  })

  test('handles alphabets that are towards the end', () => {
    expect(tenAlphabetsAhead('z')).toEqual('j')
    expect(tenAlphabetsAhead('t')).toEqual('d')
  })
})

describe('#moveTen', () => {
  test('moves each letter in string 10 alphabets forward', () => {
    expect(moveTen('eqgsexe')).toEqual('oaqcoho')
    expect(moveTen('testcase')).toEqual('docdmkco')
  })
})
