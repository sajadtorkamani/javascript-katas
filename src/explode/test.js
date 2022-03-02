import explode from './solution'

describe('explode', () => {
  test('returns correct result', () => {
    const tests = [
      ['312', '333122'],
      ['102269', '12222666666999999999'],
      ['0', ''],
      ['000', ''],
      ['123', '122333']
    ]

    for (let i = 0; i < tests.length; i++) {
      const input = tests[i][0]
      const expectedOutput = tests[i][1]

      expect(explode(input)).toEqual(expectedOutput)
    }
  })
})
