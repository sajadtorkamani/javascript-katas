import nextItem from './solution';

describe('nextItem', () => {
  test('works for normal array', () => {
    expect(nextItem([2, 4, 6, 8], 4)).toEqual(6);
    expect(nextItem([2, 4, 6, 8], 8)).toEqual(undefined);
    expect(nextItem([2, 4, 6, 8], 12)).toEqual(undefined);
  });

  test('works for strings', () => {
    expect(nextItem('sajad', 'j')).toEqual('a');
    expect(nextItem('sajad', 'd')).toEqual(undefined);
  });
});
