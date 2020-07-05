import parse, { Node } from './solution'

describe('parse', () => {
  test('returns linked list from string', () => {
    expect(parse('1 -> 2 -> 3 -> null')).toEqual(
      new Node(1, new Node(2, new Node(3)))
    )
    expect(parse('0 -> 1 -> 4 -> 9 -> 16 -> null')).toEqual(
      new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
    )
    expect(parse('null')).toEqual(null)
  })
})
