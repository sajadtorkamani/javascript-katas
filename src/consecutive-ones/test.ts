import { consecutiveOnes } from './solution'

describe('consecutiveOnes', () => {
  it('returns correct result', function() {
    expect(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0])).toEqual(3)
    expect(consecutiveOnes([1, 1, 0, 0, 1])).toEqual(2)
    expect(consecutiveOnes([1, 1, 1, 1, 1])).toEqual(5)
    expect(consecutiveOnes([0, 0, 0, 0, 0])).toEqual(0)
    expect(consecutiveOnes([0, 0, 0, 0, 1])).toEqual(1)
  })
})
