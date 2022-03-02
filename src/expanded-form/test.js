import expandedForm from './solution'

describe('expandedForm', () => {
  test('returns the correct expanded form of number', () => {
    expect(expandedForm(3)).toEqual('3')
    expect(expandedForm(12)).toEqual('10 + 2')
    expect(expandedForm(42)).toEqual('40 + 2')
    expect(expandedForm(3456)).toEqual('3000 + 400 + 50 + 6')
    expect(expandedForm(70304)).toEqual('70000 + 300 + 4')
  })
})
