import stringTask from './solution'

describe('stringTask', () => {
  test('returns correct result', () => {
    expect(stringTask('tour')).toEqual('.t.r')
    expect(stringTask('Codewars')).toEqual('.c.d.w.r.s')
    expect(stringTask('aBAcAba')).toEqual('.b.c.b')
  })
})
