import convertQueryToMap from './solution'
import _isEqual from 'lodash/isEqual'

describe('convertQueryToMap', () => {
  test('returns correct result', () => {
    const query =
      'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'

    const actual = convertQueryToMap(query)
    const expected = {
      user: {
        name: {
          firstname: 'Bob',
          lastname: 'Smith'
        },
        favoritecolor: 'Light Blue'
      }
    }

    expect(_isEqual(actual, expected)).toBe(true)
  })

  test('handles intermediate numeric keys cases', () => {
    const query =
      'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie'

    const actual = convertQueryToMap(query)

    console.log(actual)

    const expected = {
      user: {
        '1': { name: 'Alice' },
        '2': { name: 'Bob' },
        '3': { name: 'Charles' },
        '4': { name: 'Debbie' }
      }
    }

    expect(_isEqual(actual, expected)).toBe(true)
  })

  test('handles empty string', () => {
    expect(convertQueryToMap('')).toEqual({})
  })
})
