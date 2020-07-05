import { formatAsThousands } from './solution'
import numberToMoney from './solution'

describe('numberToMoney', () => {
  test('returns correct result', () => {
    // expect(numberToMoney(2546.2562)).toEqual('2,546.25');
    // expect(numberToMoney(1500.342626)).toEqual('1,500.34');
    // expect(numberToMoney(100.2134)).toEqual('100.21341');
    expect(numberToMoney(571.8060840722881)).toEqual('571.8')
    // expect(numberToMoney(95876.0095294565)).toEqual('95,876');
  })
})

describe('formatAsThousands', () => {
  test('returns correct result', () => {
    expect(formatAsThousands(18000000)).toEqual('18,000,000')
    expect(formatAsThousands(20000000)).toEqual('20,000,000')
    expect(formatAsThousands(1000000)).toEqual('1,000,000')
    expect(formatAsThousands(100000)).toEqual('100,000')
    expect(formatAsThousands(50000)).toEqual('50,000')
    expect(formatAsThousands(5000)).toEqual('5,000')
    expect(formatAsThousands(500)).toEqual('500')
    expect(formatAsThousands(10)).toEqual('10')
  })
})
