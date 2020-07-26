import humanReadable from './solution'

describe('humanReadableTime', () => {
  test('returns correct result', () => {
    expect(humanReadable(0)).toEqual('00:00:00')
    expect(humanReadable(5)).toEqual('00:00:05')
    expect(humanReadable(60)).toEqual('00:01:00')

    expect(humanReadable(86399)).toEqual('23:59:59')
    expect(humanReadable(359999)).toEqual('99:59:59')
  })
})
