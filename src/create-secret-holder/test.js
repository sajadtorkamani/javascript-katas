import createSecretHolder from './solution'

describe('createSecretHolder', () => {
  describe('#getSecret', () => {
    test('returns the secret', () => {
      const obj = createSecretHolder(10)
      expect(obj.getSecret()).toEqual(10)
    })
  })

  describe('#setSecret', () => {
    test('sets the secret', () => {
      const obj = createSecretHolder('foo')
      expect(obj.getSecret()).toEqual('foo')

      obj.setSecret('bar')
      expect(obj.getSecret()).toEqual('bar')
    })
  })
})
