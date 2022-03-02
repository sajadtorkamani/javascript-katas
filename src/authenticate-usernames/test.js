import authList from './solution'

describe('authList', () => {
  test('returns true if all usernames are valid', () => {
    const usernames = ['john123', 'alex222', 'sandra1']

    expect(authList(usernames)).toEqual(true)
  })

  test('returns false if not all usernames are valid', () => {
    const invalidUsernamesList = [
      ['john123', 'alex222', 'sandraW'],
      ['john_123', 'alex222', 'sandra1'],
      [''],
      ['123456'],
      ['abcdef']
    ]

    invalidUsernamesList.forEach(invalidList => {
      expect(authList(invalidList)).toEqual(false)
    })
  })
})
