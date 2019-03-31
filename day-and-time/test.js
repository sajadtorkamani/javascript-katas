import dayAndTime from './solution';

describe('dayAndTime', () => {
  test('returns the correct day and time based on the minutes given', () => {
    expect(dayAndTime(0)).toEqual('Sunday 00:00');
    expect(dayAndTime(-3)).toEqual('Saturday 23:57');
    expect(dayAndTime(45)).toEqual('Sunday 00:45');
    expect(dayAndTime(759)).toEqual('Sunday 12:39');
    expect(dayAndTime(1236)).toEqual('Sunday 20:36');
    expect(dayAndTime(7832)).toEqual('Friday 10:32');
    expect(dayAndTime(18876)).toEqual('Saturday 02:36');
    expect(dayAndTime(259180)).toEqual('Thursday 23:40');
    expect(dayAndTime(-349000)).toEqual('Tuesday 15:20');
  });
});