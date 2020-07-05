import cubeSum from './solution'

describe('cubeSum', () => {
  test('returns correct result', () => {
    expect(cubeSum(5, 0)).toEqual(225)
    expect(cubeSum(2, 3)).toEqual(27)
    expect(cubeSum(9, 9)).toEqual(0)
  })
})
