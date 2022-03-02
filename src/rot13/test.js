import rot13, { encryptLetter } from './solution'

describe('rot13', () => {
  test('rotates each letter by 13 places', () => {
    expect(rot13('aabb123')).toEqual('nnoo123')
    expect(rot13('EBG13 rknzcyr.')).toEqual('ROT13 example.')
    expect(rot13('This is my first ROT13 excercise!')).toEqual(
      'Guvf vf zl svefg EBG13 rkprepvfr!'
    )
  })
})

describe('encryptLetter', () => {
  test('returns letter after 13 places', () => {
    expect(encryptLetter('a')).toEqual('n')
    expect(encryptLetter('n')).toEqual('a')
    expect(encryptLetter('b')).toEqual('o')
    expect(encryptLetter('x')).toEqual('k')
    expect(encryptLetter('z')).toEqual('m')

    expect(encryptLetter('A')).toEqual('N')
  })
})
