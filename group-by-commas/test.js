import groupByCommas from './solution';

describe('groupByCommas', () => {
  test('returns correct result', () => {
    expect(groupByCommas(1)).toEqual('1');
    expect(groupByCommas(10)).toEqual('10');
    expect(groupByCommas(100)).toEqual('100');
    expect(groupByCommas(1000)).toEqual('1,000');
    expect(groupByCommas(10000)).toEqual('10,000');
    expect(groupByCommas(100000)).toEqual('100,000');
    expect(groupByCommas(1000000)).toEqual('1,000,000');
    expect(groupByCommas(35235235)).toEqual('35,235,235');
  });
});