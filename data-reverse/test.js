import dataReverse from './solution'

describe('dataReverse', () => {
  test('returns correct result', () => {
    const input2 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
    const expectedOutput2 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
    expect(dataReverse(input2)).toEqual(expectedOutput2)

    const input1 = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0
    ]
    const expectedOutput1 = [
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
    expect(dataReverse(input1)).toEqual(expectedOutput1)
  })
})
