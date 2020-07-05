import to_nato from './solution'

describe('to_nato', () => {
  test('returns phonetic alphabet equivalent of string', () => {
    expect(to_nato('If you can read')).toEqual(
      'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
    )
    expect(to_nato('Did not see that coming')).toEqual(
      'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'
    )
    expect(to_nato('go for it!')).toEqual(
      'Golf Oscar Foxtrot Oscar Romeo India Tango !'
    )
  })
})
