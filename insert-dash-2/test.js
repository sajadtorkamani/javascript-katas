import insertDashII from './solution';

describe('insertDashII', () => {
  test('inserts dash between each two odd numbers', () => {
    expect(insertDashII(454793)).toEqual('4547-9-3');
  });

  test('inserts asterisk between each two even numbers', () => {
    expect(insertDashII('24568')).toEqual('2*456*8');
  });

  test('inserts both dashes and asterisks when applicable', () => {
    expect(insertDashII(40546793)).toEqual('4054*67-9-3');
  });

  test('handles case when there are no two odd or two even numbers', () => {
    expect(insertDashII(123456)).toEqual('123456');
  });

  test('does not treat zero as odd or even', () => {
    expect(insertDashII(1012356895)).toEqual('10123-56*89-5');
  });
});
