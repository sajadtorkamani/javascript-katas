import split from './solution';

describe('split', () => {
  test('returns correct result', () => {
    const obj1 = { prop: true };
    const obj2 = { prop: false };
    const values = split([obj1, obj2], 'prop');

    expect(values[0].length).toEqual(1);
    expect(values[1].length).toEqual(1);
    expect(values[0][0]).toEqual(obj1);
    expect(values[1][0]).toEqual(obj2);
  });
});