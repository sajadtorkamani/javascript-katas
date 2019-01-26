import countMissingCarriages from './solution';

describe('countMissingCarriages', () => {
  test('returns correct result', () => {
    expect(countMissingCarriages('ABC')).toEqual(0);
    expect(countMissingCarriages('ABD')).toEqual(1);
    expect(countMissingCarriages("BCF")).toEqual(3);
  });
});