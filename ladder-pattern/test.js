import { pattern } from './solution'

describe('pattern', () => {
  test('returns correct result', () => {
    expect(pattern(5)).toEqual('1\n333\n55555')
    expect(pattern(4)).toEqual('1\n333')
    expect(pattern(1)).toEqual('1')
    expect(pattern(0)).toEqual('')
    expect(pattern(-25)).toEqual('')
  })
})
