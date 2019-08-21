import add from './solution';

describe('add', () => {
  test('returns correct result', () => {
    expect(add(100, 200, 300)).toEqual(300);
    expect(add(2)).toEqual(2);
    expect(add(4, -3, -2)).toEqual(2);
    expect(add(-1, -2, -3, -4)).toEqual(-4);
    expect(add()).toEqual(0);
  });
});
