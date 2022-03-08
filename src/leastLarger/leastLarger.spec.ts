import { leastLarger } from './leastLarger'

describe('leastLarger', () => {
  test(`returns index of the smallest number that is larger than the number at 
  the given index`, () => {
    expect(leastLarger([4, 1, 3, 5, 6], 0)).toEqual(3)
    expect(leastLarger([1, 3, 5, 2, 4], 0)).toEqual(3)
  })

  test(`returns -1 if there is no larger number than the number at the given
   index`, () => {
    expect(leastLarger([4, 1, 3, 5, 6], 4)).toEqual(-1)
  })
})
