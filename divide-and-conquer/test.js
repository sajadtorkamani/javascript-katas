import divCon from './solution';

describe('divCon', () => {
  test('returns correct result', () => {
    expect(divCon([9, 3, '7', '3'])).toEqual(2);
    expect(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toEqual(14);
    expect(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toEqual(13);
  });
});