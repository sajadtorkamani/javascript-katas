import getTotalSundays from './solution';

describe('getTotalSundays', () => {
  test('returns correct result', () => {
    // expect(getTotalSundays(1901, 2000)).toEqual(171);
    // expect(getTotalSundays(1991, 2017)).toEqual(46);
    expect(getTotalSundays(1991)).toEqual(2);
    // expect(getTotalSundays(2017)).toEqual(2);
  });
});