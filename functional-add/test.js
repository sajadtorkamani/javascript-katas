import add from './solution';

describe('add', () => {
  test('returns a function', () => {
    expect(typeof add(4)).toEqual('function');
  });

  test('returns a function that adds initial argument with new argument', () => {
    expect(add(4)(2)).toEqual(6);
    expect(add(5)(2)).toEqual(7);
  });
});