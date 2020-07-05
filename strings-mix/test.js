import mix, { getMultiOccurringLetterCounts } from './solution'

describe('solution', () => {
  describe('mix', () => {
    test('returns correct result', () => {
      // expect(mix('Are they here', 'yes, they are here')).toEqual('2:eeeee/2:yy/=:hh/=:rr');
      // expect(mix('looping is fun but dangerous', 'less dangerous than coding')).toEqual('1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');
      // expect(mix(' In many languages', ' there\'s a pair of functions')).toEqual('1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt');
      // expect(mix('Lords of the Fallen', 'gamekult')).toEqual('1:ee/1:ll/1:oo');
      // expect(mix('codewars', 'codewars')).toEqual('');
      // expect(mix('A generation must confront the looming ', 'codewarrs')).toEqual('1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr');
      expect(
        mix('(trliKowdaHudnsTkgouVrgpi@wksz', 'Lxspt/iiosUokmj+pvfqKujfnBomgt')
      ).toEqual(
        '2:ooo/1:dd/1:gg/1:kk/1:rr/1:uu/1:ww/2:ff/2:jj/2:mm/2:pp/2:tt/=:ii/=:ss'
      )
    })
  })

  describe('getMultiOccurringLettersCounts', () => {
    test('returns counts of lowercase letters that appear atleast twice in string', () => {
      expect(getMultiOccurringLetterCounts('foo baar')).toEqual({ o: 2, a: 2 })
    })
  })
})
