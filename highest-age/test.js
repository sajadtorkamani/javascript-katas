import { highestAge } from './solution'

describe('highestAge', () => {
  test('returns correct result', () => {
    expect(
      highestAge(
        [
          { name: 'kay', age: 1 },
          { name: 'john', age: 13 },
          { name: 'kay', age: 76 }
        ],
        [{ name: 'john', age: 1 }, { name: 'alice', age: 77 }]
      )
    ).toEqual('alice')
    expect(
      highestAge(
        [
          { name: 'kay', age: 1 },
          { name: 'john', age: 13 },
          { name: 'kay', age: 76 }
        ],
        [{ name: 'john', age: 1 }, { name: 'alice', age: 76 }]
      )
    ).toEqual('kay')
    expect(
      highestAge(
        [
          { name: 'kay', age: 1 },
          { name: 'john', age: 130 },
          { name: 'kay', age: 76 }
        ],
        [{ name: 'john', age: 1 }, { name: 'alice', age: 76 }]
      )
    ).toEqual('john')
  })
})
