import compoundMatch from './solution'

describe('compoundMatch', () => {
  test('returns correct result', () => {
    expect(
      compoundMatch(
        ['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'],
        'superbowl'
      )
    ).toEqual(['super', 'bowl', [0, 2]])
    expect(
      compoundMatch(
        ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
        'crystalline'
      )
    ).toEqual(['crystal', 'line', [1, 5]])
    expect(
      compoundMatch(
        ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
        'rainbow'
      )
    ).toEqual(['bow', 'rain', [4, 0]])
    expect(
      compoundMatch(
        ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
        'organically'
      )
    ).toEqual(['organic', 'ally', [2, 3]])
    expect(
      compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], 'mainline')
    ).toEqual(['main', 'line', [1, 5]])
    expect(
      compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], 'treetop')
    ).toEqual(['top', 'tree', [2, 0]])
  })
})
