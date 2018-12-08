import { roundedDigitsAverage, rapNameGen } from './solution.js';

describe('#roundedDigitsAverage', () => {
  test('returns correct result', () => {
    expect(roundedDigitsAverage('23')).toEqual(3);
    expect(roundedDigitsAverage('552')).toEqual(4);
  });
});

describe('#rapNameGen', () => {
  test('returns correct result', () => {
    expect(rapNameGen('23.11.93')).toEqual('3hree 6ix');
    expect(rapNameGen('14.07.84')).toEqual('3hree 6ix');
    expect(rapNameGen('03.49.04')).toEqual('2wo 2wo');
    expect(rapNameGen('01.01.01')).toEqual( '1ne 1ne');
    expect(rapNameGen('24.06.94')).toEqual('3hree 7even');
    expect(rapNameGen('24.06.00')).toEqual('3hree 0ero');
  });
});
