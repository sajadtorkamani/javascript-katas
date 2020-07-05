import stringify, { Node } from './solution'

describe('stringify', () => {
  test('returns correct result', () => {
    expect(stringify(new Node(1, new Node(2, new Node(3))))).toEqual(
      '1 -> 2 -> 3 -> null'
    )
    expect(
      stringify(
        new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
      )
    ).toEqual('0 -> 1 -> 4 -> 9 -> 16 -> null')
    expect(stringify(null)).toEqual('null')
  })
})
