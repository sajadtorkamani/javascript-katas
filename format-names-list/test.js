import list from './solution'

describe('list', () => {
  test('returns correct result', () => {
    expect(list([])).toEqual('')
    expect(list([{ name: 'Bart' }])).toEqual('Bart')
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toEqual('Bart & Lisa')
    expect(
      list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' }
      ])
    ).toEqual('Bart, Lisa, Maggie, Homer & Marge')
    expect(
      list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
    ).toEqual('Bart, Lisa & Maggie')
  })
})
