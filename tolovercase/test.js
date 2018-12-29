import './solution';

describe('String.prototype.toLoverCase', () => {
  test('is a function', () => {
    expect(typeof String.prototype.toLoverCase).toBe('function');
  });

  test('returns correct result', () => {
    expect('love!'.toLoverCase()).toEqual('EVOL!');
    expect('LOVE'.toLoverCase()).toEqual('EVOL');
  });
});