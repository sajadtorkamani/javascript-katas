import { quicksum } from './solution';

describe('#quicksum', () => {
  test('returns correct result', () => {
    expect(quicksum("ACM")).toEqual(46);
    expect(quicksum("MID CENTRAL")).toEqual(650);
    expect(quicksum("BBC")).toEqual(15);
    expect(quicksum("???")).toEqual(0);
    expect(quicksum("axg ")).toEqual(0);
    expect(quicksum("234 234 WEF ASDF AAA 554211 ???? ")).toEqual(0);
    expect(quicksum("A C M")).toEqual(75);
  });
});