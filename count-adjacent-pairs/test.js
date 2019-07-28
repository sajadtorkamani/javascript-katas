import countAdjacentPairs from './solution';

describe('countAdjacentPairs', () => {
  test('returns correct result', () => {
    expect(countAdjacentPairs('dog cat')).toEqual(0);
    expect(countAdjacentPairs('dog dog cat')).toEqual(1);
    expect(countAdjacentPairs('apple dog cat')).toEqual(0);
    expect(countAdjacentPairs('pineapple apple dog cat')).toEqual(0);
    expect(countAdjacentPairs('apple     apple dog cat')).toEqual(1);
    expect(countAdjacentPairs('apple dog apple dog cat')).toEqual(0);
    expect(countAdjacentPairs('dog dog dog dog dog dog')).toEqual(1);
    expect(countAdjacentPairs('dog dog dog dog cat cat')).toEqual(2);
    expect(countAdjacentPairs('cat cat dog dog cat cat')).toEqual(3);
  });
});
