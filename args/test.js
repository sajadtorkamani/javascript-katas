import args from './solution';

describe('args', () => {
  test('handles simple case where there is only one command', () => {
    expect(args('ls -R /')).toEqual(['ls', '-R', '/']);
  });

  test('ignores arguments after special characters', () => {
    expect(args('cat /tmp/data.txt & less')).toEqual(['cat', '/tmp/data.txt']);
    expect(args('cat /tmp/data.txt; echo "foo"')).toEqual([
      'cat',
      '/tmp/data.txt'
    ]);
    expect(args('cat /tmp/data.txt > /dev/null')).toEqual([
      'cat',
      '/tmp/data.txt'
    ]);
    expect(args('cat /tmp/data.txt | less')).toEqual(['cat', '/tmp/data.txt']);
  });

  test('ignores trailing spaces', () => {
    expect(args('   cat /tmp/data.txt & less  ')).toEqual([
      'cat',
      '/tmp/data.txt'
    ]);
  });
});
