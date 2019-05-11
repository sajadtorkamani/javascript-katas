import insertDash from './solution';

describe('insertDash', () => {
  test('inserts a dash between odd numbers', () => {
    expect(insertDash(454793)).toEqual('4547-9-3');
    expect(insertDash(123456)).toEqual('123456');
    expect(insertDash(1003567)).toEqual('1003-567');
  });
});