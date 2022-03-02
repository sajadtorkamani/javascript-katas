import { initializeNames } from './solution'

describe('initializeNames', () => {
  test('returns correct result', () => {
    expect(initializeNames('Jack Ryan')).toEqual('Jack Ryan')
    expect(initializeNames('Lois Mary Lane')).toEqual('Lois M. Lane')
    expect(initializeNames('Dimitri')).toEqual('Dimitri')
    expect(initializeNames('Alice Betty Catherine Davis')).toEqual(
      'Alice B. C. Davis'
    )
  })
})
