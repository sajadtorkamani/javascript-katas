import { dateNbDays } from './solution'

describe('#dateNbDays', () => {
  test('returns correct result', () => {
    expect(dateNbDays(100, 101, 0.98)).toEqual('2017-01-01')
    expect(dateNbDays(4281, 5087, 2)).toEqual('2024-07-03')
    expect(dateNbDays(4620, 5188, 2)).toEqual('2021-09-19')
  })
})
