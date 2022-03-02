import { dotCalculator } from './dotCalculator'

describe('dotCalculator', () => {
  test('returns correct result', () => {
    expect(dotCalculator('..... - ...')).toEqual('..')
    expect(dotCalculator('..... - .')).toEqual('....')
    expect(dotCalculator('..... * ...')).toEqual('...............')
    expect(dotCalculator('..... * ..')).toEqual('..........')
    expect(dotCalculator('..... // ..')).toEqual('..')
    expect(dotCalculator('..... // .')).toEqual('.....')
    expect(dotCalculator('. // ..')).toEqual('')
    expect(dotCalculator('. - .')).toEqual('')
    expect(dotCalculator('..... + ...............')).toEqual(
      '....................'
    )
  })
})
