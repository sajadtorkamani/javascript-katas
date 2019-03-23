import fizzbuzz from './solution';

describe('fizzbuzz', () => {
  test('returns correct result', () => {
    expect(fizzbuzz(2)).toEqual(2);
    expect(fizzbuzz(4)).toEqual(4);
    expect(fizzbuzz(3)).toEqual("fizz");
    expect(fizzbuzz(15)).toEqual("fizz buzz");
    expect(fizzbuzz(20)).toEqual("buzz");
  });
});