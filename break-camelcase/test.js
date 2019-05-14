import solution from './solution';

describe('solution', () => {
  test('returns correct result', () => {
    expect(solution('camelCasing')).toEqual('camel Casing');
    expect(solution('camelCasingFoo')).toEqual('camel Casing Foo');
    expect(solution('camelcase')).toEqual('camelcase');
  });
});