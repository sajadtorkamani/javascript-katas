import { pendulum } from './solution';

describe('#pendulum', () => {
  test('returns correct result', () => {
    expect(pendulum([6, 6, 8, 5, 10])).toEqual([10, 6, 5, 6, 8]);
  });

  test('handles list of even length', () => {
    expect(pendulum([-9, -2, -10, -6])).toEqual([-6, -10, -9, -2]);
  });
});