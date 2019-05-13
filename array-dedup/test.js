import arrayDeDup from './solution';

describe('arrayDeDup', () => {
  test('removes falsy values & duplicates and sorts array with numbers appearing before strings', () => {
    let array = ['g', 3, 'a', 'a'];
    expect(arrayDeDup(array)).toEqual([3, 'a', 'g']);

    array = [0, 1, 2, 3, 4, 1, 2, 3, 4];
    expect(arrayDeDup(array)).toEqual([1, 2, 3, 4]);

    array = ['code', 'wars', 'ain\'t', null, NaN, 'code', 'wars', 'ain\'t', 'the', 'same', 'as', 'the', 'rest'];
    expect(arrayDeDup(array)).toEqual(['ain\'t', 'as', 'code', 'rest', 'same', 'the', 'wars']);

    array = [3, '3', 3, 'three', 'three', 'three'];
    expect(arrayDeDup(array).join()).toEqual(['3', 3, 'three'].join());
  });

  test('handles non-array argument', () => {
    expect(arrayDeDup('foo')).toEqual('Not an array');
  });
});