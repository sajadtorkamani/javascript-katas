import { explode } from './solution';

describe('#explode', () => {
  test('returns correct result', () => {
    expect(explode([9, 3])).toEqual([[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
    expect(explode(['a', 3])).toEqual([['a', 3], ['a', 3], ['a', 3]]);
    expect(explode([6, 'c'])).toEqual([[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]);
    expect(explode(['a', 'b'])).toEqual('Void!');
  });
});