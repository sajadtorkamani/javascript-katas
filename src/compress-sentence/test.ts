import { compressSentence } from './solution'

describe('compressSentence', () => {
  it('returns correct solution', () => {
    expect(compressSentence('The bumble bee')).toEqual('012')
    expect(compressSentence('SILLY LITTLE BOYS silly little boys')).toEqual(
      '012012'
    )
    expect(
      compressSentence(
        'Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country'
      )
    ).toEqual('01234567802856734')
    expect(
      compressSentence(
        'The number 0 is such a strange number Strangely it has zero meaning'
      )
    ).toEqual('012345617891011')
  })
})
