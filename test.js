import { average } from './solution';

describe('average', () => {
  test('returns average of all arguments', () => {
    expect(average(2, 4, 6)).toBe(4);
  });
});
