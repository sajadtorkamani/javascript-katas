import fix from './solution'

describe('fix', () => {
  test('returns correct result', () => {
    // expect(fix('')).toEqual('');
    // expect(fix('hi.')).toEqual('Hi.');
    expect(
      fix(
        'hello. my name is inigo montoya. you killed my father. prepare to die.'
      )
    ).toEqual(
      'Hello. My name is inigo montoya. You killed my father. Prepare to die.'
    )
  })
})
