import paul from './solution'

describe('paul', () => {
  test('returns correct result', () => {
    expect(paul(['life', 'eating', 'life'])).toEqual('Super happy!')
    expect(
      paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating'])
    ).toEqual('Super happy!')
    expect(
      paul([
        'Petes kata',
        'Petes kata',
        'eating',
        'Petes kata',
        'Petes kata',
        'eating'
      ])
    ).toEqual('Happy!')
  })
})
