import getFirstPython from './solution'

describe('getFirstPython', () => {
  test('returns correct result', () => {
    const list1 = [
      {
        firstName: 'Mark',
        lastName: 'G.',
        country: 'Scotland',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript'
      },
      {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 30,
        language: 'Python'
      },
      {
        firstName: 'Emma',
        lastName: 'B.',
        country: 'Norway',
        continent: 'Europe',
        age: 19,
        language: 'Clojure'
      }
    ]
    const list2 = [
      {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 29,
        language: 'JavaScript'
      },
      {
        firstName: 'Amar',
        lastName: 'V.',
        country: 'Bosnia and Herzegovina',
        continent: 'Europe',
        age: 32,
        language: 'Ruby'
      }
    ]

    expect(getFirstPython(list1)).toEqual('Victoria, Puerto Rico')
    expect(getFirstPython(list2)).toEqual('There will be no Python developers')
  })
})
