import prefill from './solution';

describe('prefill', () => {
  test('returns correct result', () => {
    expect(prefill(3, 1)).toEqual([1, 1, 1]);
    expect(prefill(2, 'abc')).toEqual(['abc', 'abc']);
    expect(prefill(2, 'abc')).toEqual(['abc', 'abc']);
    expect(prefill('1', 1)).toEqual([1]);
    expect(prefill(3, prefill(2, '2d'))).toEqual([['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
  });

  test('throws TypeError if n is not a valid integer', () => {
    const invalidInputs = ['foo', undefined, 5.2, -3, Infinity, true, false];

    invalidInputs.forEach(invalidInput => {
      expect(() => {
        prefill(invalidInput, 'foo');
      }).toThrowError(`${invalidInput} is invalid`);
    });
  });
});