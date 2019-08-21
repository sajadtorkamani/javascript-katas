import roundedOdd from './solution';

describe('roundedOdd', () => {
  test('handles positive integers', () => {
    expect(roundedOdd(5)).toEqual(true);
    expect(roundedOdd(7)).toEqual(true);

    expect(roundedOdd(4)).toEqual(false);
  });

  test('handles negative integers', () => {
    expect(roundedOdd(-5)).toEqual(true);
    expect(roundedOdd(-7)).toEqual(true);

    expect(roundedOdd(-4)).toEqual(false);
  });

  test('handles decimals by first rounding down', () => {
    expect(roundedOdd(3.9)).toEqual(true);
    expect(roundedOdd(7.4)).toEqual(true);

    expect(roundedOdd(4.8)).toEqual(false);
  });

  test('handles numeric strings', () => {
    expect(roundedOdd('5')).toEqual(true);
    expect(roundedOdd('7.9')).toEqual(true);
    expect(roundedOdd('-7.9')).toEqual(true);

    expect(roundedOdd('4')).toEqual(false);
    expect(roundedOdd('4.9')).toEqual(false);
    expect(roundedOdd('-4.9')).toEqual(false);
  });

  test('handles non-numeric strings', () => {
    expect(roundedOdd('foo')).toEqual(false);
    expect(roundedOdd('123foo')).toEqual(false);
  });

  test('handles invalid argument types', () => {
    [undefined, null, [], {}, true].forEach(arg => {
      expect(roundedOdd(arg)).toEqual(false);
    });
  });
});
