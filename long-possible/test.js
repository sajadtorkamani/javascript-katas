import longestPossible, { getSeconds } from './solution'

describe('longestPossible', () => {
  const songs = [
    { artist: 'Marillion', title: 'Keyleigh', playback: '03:36' },
    { artist: 'Pink Floyd', title: 'Time', playback: '06:48' },
    { artist: 'Rush', title: 'YYZ', playback: '04:27' },
    { artist: 'Bonobo', title: 'Days To Come', playback: '03:50' },
    { artist: 'Coldplay', title: 'Yellow', playback: '04:32' },
    { artist: 'Bloc Party', title: 'Like Eating Glass', playback: '04:22' },
    { artist: 'The Killers', title: 'For Reasons Unknown', playback: '03:30' },
    { artist: 'Arctic Monkeys', title: 'Teddy Picker', playback: '03:25' },
    {
      artist: 'Joe Satriani',
      title: 'Surfing With The Alien',
      playback: '04:34'
    }
  ]

  test('returns title of longest song that is below the maximum length', () => {
    expect(longestPossible(songs, 215)).toEqual('For Reasons Unknown')
  })

  test('returns false if no song is found that is below the minimum length', () => {
    expect(longestPossible(songs, 5)).toEqual(false)
  })
})

describe('getSeconds', () => {
  test('returns seconds from time format', () => {
    expect(getSeconds('03:00')).toEqual(180)
    expect(getSeconds('02:30')).toEqual(150)
  })
})
