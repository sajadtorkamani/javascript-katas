import switcher from './solution'

describe('switcher', () => {
  test('returns correct result', () => {
    expect(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])).toEqual(
      'codewars'
    )
    expect(
      switcher([
        '25',
        '7',
        '8',
        '4',
        '14',
        '23',
        '8',
        '25',
        '23',
        '29',
        '16',
        '16',
        '4'
      ])
    ).toEqual('btswmdsbd kkw')
    expect(switcher(['4', '24'])).toEqual('wc')
  })
})
