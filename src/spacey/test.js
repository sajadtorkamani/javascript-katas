import spacey from './solution'

describe('spacey', () => {
  test('returns correct result', () => {
    expect(spacey(['kevin', 'has', 'no', 'space'])).toEqual([
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace'
    ])

    expect(spacey(['this', 'cheese', 'has', 'no', 'holes'])).toEqual([
      'this',
      'thischeese',
      'thischeesehas',
      'thischeesehasno',
      'thischeesehasnoholes'
    ])
  })
})
