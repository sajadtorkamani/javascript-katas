import sumTheTreeValues from './solution'

describe('sumTheTreeValues', () => {
  test('returns correct result', () => {
    const simpleNode = {
      value: 10,
      left: { value: 1, left: null, right: null },
      right: { value: 2, left: null, right: null }
    }
    expect(sumTheTreeValues(simpleNode)).toEqual(13)

    const unbalancedNode = {
      value: 11,
      left: { value: 0, left: null, right: null },
      right: {
        value: 0,
        left: null,
        right: { value: 1, left: null, right: null }
      }
    }
    expect(sumTheTreeValues(unbalancedNode)).toEqual(12)
  })
})
