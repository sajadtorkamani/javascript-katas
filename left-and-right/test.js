import { left$, right$ } from './solution'

const str = 'Hello (not so) cruel World!'

describe('left', () => {
  test('returns empty string if 0 given', () => {
    expect(left$(str, 0)).toEqual('')
  })

  test('handles empty input', () => {
    expect(left$(str)).toEqual('H')
  })

  test('handles positive in-range input', () => {
    expect(left$(str, 5)).toEqual('Hello')
    expect(left$(str, 1)).toEqual('H')
  })

  test('handles negative input', () => {
    expect(left$(str, -3)).toEqual('Hello (not so) cruel Wor')
  })

  test('handles positive out-of-range input', () => {
    expect(left$(str, 99)).toEqual(str)
  })

  test('handles string input', () => {
    expect(left$(str, 'o')).toEqual('Hell')
    expect(left$(str, 'lo')).toEqual('Hel')
  })
})

describe('right', () => {
  test('returns empty string if 0 given', () => {
    expect(right$(str, 0)).toEqual('')
  })

  test('handles empty input', () => {
    expect(right$(str)).toEqual('!')
  })

  test('handles positive in-range input', () => {
    expect(right$(str, 5)).toEqual('orld!')
  })

  test('handles positive out-of-range input', () => {
    expect(right$(str, 99)).toEqual(str)
  })

  test('handles negative input', () => {
    expect(right$(str, -2)).toEqual('llo (not so) cruel World!')
  })

  test('handles string input', () => {
    expect(right$(str, 'o')).toEqual('rld!')
    expect(right$(str, 'cruel ')).toEqual('World!')
  })
})
