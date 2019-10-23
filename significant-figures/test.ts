import numberOfSigfigs from './solution';

describe('numberOfSigfigs', () => {
  test('numbers with only non-zero digits have all their digits count as significant figures', () => {
    expect(numberOfSigfigs('4.357')).toEqual(4);
    expect(numberOfSigfigs('152.63')).toEqual(5);
  });

  test('leading zeros are not counted as significant figures', () => {
    expect(numberOfSigfigs('0215')).toEqual(3);
    expect(numberOfSigfigs('0.6')).toEqual(1);
  });

  test('trailing zeros in a number with a decimal point are significant', () => {
    expect(numberOfSigfigs('78.200')).toEqual(5);
    expect(numberOfSigfigs('20.0')).toEqual(3);
  });

  test('trailing zeroes in a number without a decimal point are not significant', () => {
    expect(numberOfSigfigs('1200')).toEqual(2);
    expect(numberOfSigfigs('345000')).toEqual(3);
  });

  test('handles invalid input', () => {
    expect(numberOfSigfigs('foo')).toEqual(0);
  });
});

/**
 * 0215 has 3 significant figures
 0.6 has 1 significant figure
 */
