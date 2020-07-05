import { ppap } from './solution'

describe('#ppap', () => {
  test('returns correct result', () => {
    expect(ppap(['APPLE', 'pen'], ['peN', 'pInEapple'])).toEqual(
      'Pen-Pineapple-Apple-Pen'
    )
  })
})
