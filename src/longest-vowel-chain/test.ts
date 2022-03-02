import longestVowelChain from './solution'

describe('longestVowelChain', () => {
  test('returns correct result', () => {
    expect(longestVowelChain('codewarriors')).toEqual(2)
    expect(longestVowelChain('suoidea')).toEqual(3)
    expect(longestVowelChain('ultrarevolutionariees')).toEqual(3)
    expect(longestVowelChain('strengthlessnesses')).toEqual(1)
    expect(longestVowelChain('cuboideonavicuare')).toEqual(2)
    expect(longestVowelChain('chrononhotonthuooaos')).toEqual(5)
    expect(longestVowelChain('iiihoovaeaaaoougjyaw')).toEqual(8)
    expect(longestVowelChain('zzz')).toEqual(0)
  })
})
