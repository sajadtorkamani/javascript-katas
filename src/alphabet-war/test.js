import { alphabetWar } from './solution'

describe('#alphabetWar', () => {
  test('returns correct result', () => {
    expect(alphabetWar('wz')).toEqual('Left side wins!')
    expect(alphabetWar('z')).toEqual('Right side wins!')
    expect(alphabetWar('zdqmwpbs')).toEqual("Let's fight again!")
    expect(alphabetWar('zzzzs')).toEqual('Right side wins!')
    expect(alphabetWar('wwwwww')).toEqual('Left side wins!')
  })
})
