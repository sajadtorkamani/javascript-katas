import findOutChristmasWeekday from './solution';

describe('findOutChristmasWeekday', () => {
  test('handles string format A', () => {
    expect(findOutChristmasWeekday('2013 12 25')).toEqual('Wednesday');
  });
});
