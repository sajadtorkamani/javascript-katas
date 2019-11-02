import integrate from './solution';

describe('integrate', () => {
  test('returns correct result', () => {
    expect(integrate(3, 2)).toEqual('1x^3');
    expect(integrate(12, 5)).toEqual('2x^6');
    expect(integrate(20, 1)).toEqual('10x^2');
    expect(integrate(40, 3)).toEqual('10x^4');
    expect(integrate(90, 2)).toEqual('30x^3');
  });
});
