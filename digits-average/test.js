import { digitsAverage } from './solution';

describe('#digitsAverage', () => {
  test('returns correct result', () => {
    expect(digitsAverage(246)).toEqual(4);
    expect(digitsAverage(89)).toEqual( 9);
    expect(digitsAverage(2)).toEqual(2);

    expect(digitsAverage(245)).toEqual(4);
    expect(digitsAverage(345)).toEqual(5);
    expect(digitsAverage(346)).toEqual(5);
  });
});