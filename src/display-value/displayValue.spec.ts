import { displayValue } from './displayValue'

describe('displayValue', () => {
  test('handles minutes under an hour', () => {
    expect(displayValue(0)).toEqual('0 minutes')
    expect(displayValue(1)).toEqual('1 minute')
    expect(displayValue(25)).toEqual('25 minutes')
  })

  test('handles minutes equal to or over an hour', () => {
    expect(displayValue(60)).toEqual('1 hour')
    expect(displayValue(61)).toEqual('1 hour 1 minute')
    expect(displayValue(100)).toEqual('1 hour 40 minutes')
  })

  test('misc', () => {
    expect(displayValue(40321)).toEqual('1 month 1 minute')
    expect(displayValue(52874)).toEqual(
      '1 month 1 week 1 day 17 hours 14 minutes'
    )
  })
})
