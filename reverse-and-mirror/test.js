import reverseAndMirror, { invertCasing, reverseString } from './solution'

describe('reverseAndMirror', () => {
  test('returns correct result', () => {
    expect(reverseAndMirror('FizZ', 'buZZ')).toEqual('zzUB@@@zZIffIZz')
    expect(reverseAndMirror('String Reversing', 'Changing Case')).toEqual(
      'ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING'
    )
  })
})

describe('reverseString', () => {
  test('reverses string correctly', () => {
    expect(reverseString('foo')).toEqual('oof')
  })
})

describe('invertCasing', () => {
  test('returns correct result', () => {
    expect(invertCasing('foo BAR BAz')).toEqual('FOO bar baZ')
  })
})
