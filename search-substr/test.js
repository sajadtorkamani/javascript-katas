import searchSubstr from './solution';

describe('searchSubstr', () => {
  test('returns correct result when overlap is enabled', () => {
    expect(searchSubstr('foo bar_foo baz foo', 'foo')).toEqual(3);
    expect(searchSubstr('fo bar', 'foo')).toEqual(0);
    expect(searchSubstr('_bbb_aa_b_c', 'bb')).toEqual(2);
    expect(searchSubstr('aa_bb_cc_dd_bb_e', 'bb')).toEqual(2);
    expect(searchSubstr('aaabbbcccc', 'bbb')).toEqual(1);
    expect(searchSubstr('aaa', 'aa')).toEqual(2);
    expect(searchSubstr('aaa', '')).toEqual(0);
    expect(searchSubstr('aaa', 'aa', false)).toEqual(1);
  });

  test('returns correct result when overlap is disabled', () => {
    expect(searchSubstr('_bbb_aa_b_c', 'bb', false)).toEqual(1);
  });
});

