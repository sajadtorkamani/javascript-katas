import { ArithmeticSequenceSum } from './solution';

describe('#ArithmeticSequenceSum', () => {
  test('returns correct result', () => {
    expect(ArithmeticSequenceSum(3, 2, 20)).toEqual(440);
    expect(ArithmeticSequenceSum(2, 2, 10)).toEqual(110);
    expect(ArithmeticSequenceSum(1, -2, 10)).toEqual(-80);
  });
});
