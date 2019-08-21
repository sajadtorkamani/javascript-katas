import ho from './solution';

describe('ho', () => {
  test('returns correct result', () => {
    expect(ho()).toEqual('Ho!');
    expect(ho(ho())).toEqual('Ho Ho!');
    expect(ho(ho(ho()))).toEqual('Ho Ho Ho!');
  });
});
