import convertCF from './solution';

describe('convertCF', () => {
  test('returns correct result', () => {
    expect(convertCF(60, "f")).toEqual(140);
    expect(convertCF(32, "c")).toEqual(0);
    expect(convertCF(50)).toEqual(10);

    expect(() => {
      convertCF(20, 'w');
    }).toThrow()
  });
});