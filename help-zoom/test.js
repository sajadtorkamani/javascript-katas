import helpZoom from './solution'

describe('helpZoom', () => {
  test('returns correct result', () => {
    expect(helpZoom([1, 1, 0, 0, 0, 0, 0, 1, 1])).toEqual('Yes')
    expect(helpZoom([1, 1, 0, 0, 0, 0, 1, 1, 0])).toEqual('No')
  })
})

// Check if left side is equal to the right side reversed
// - Extract left side
// - Extract and reverse right side
// - Compare the two sides
