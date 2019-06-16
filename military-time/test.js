import getMilitaryTime from './solution';

describe('getMilitaryTime', () => {
  test('returns correct result', () => {
    expect(getMilitaryTime('12:00:01AM')).toEqual('00:00:01');
    expect(getMilitaryTime('11:46:47PM')).toEqual('23:46:47');
    expect(getMilitaryTime('07:14:15AM')).toEqual('07:14:15');
    expect(getMilitaryTime('12:30:00PM')).toEqual('12:30:00');
  });
});
