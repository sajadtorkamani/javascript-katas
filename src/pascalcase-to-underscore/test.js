import toUnderscore from './solution'

describe('toUnderscore', () => {
  test('converts pascal case string to snakecase / underscore', () => {
    expect(toUnderscore('TestController')).toEqual('test_controller')
    expect(toUnderscore('MoviesAndBooks')).toEqual('movies_and_books')
    expect(toUnderscore('App7Test')).toEqual('app7_test')
  })
})
