import alphabetWar from './solution'

describe('alphabetWar', () => {
  test('returns correct result', () => {
    expect(alphabetWar('z')).toEqual('Right side wins!')
    expect(alphabetWar('****')).toEqual("Let's fight again!")
    expect(alphabetWar('z*dq*mw*pb*s')).toEqual("Let's fight again!")
    expect(alphabetWar('zdqmwpbs')).toEqual("Let's fight again!")
    expect(alphabetWar('zz*zzs')).toEqual('Right side wins!')
    expect(alphabetWar('sz**z**zs')).toEqual('Left side wins!')
    expect(alphabetWar('z*z*z*zs')).toEqual('Left side wins!')
    expect(alphabetWar('*wwwwww*z*')).toEqual('Left side wins!')
  })
})
