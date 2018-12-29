import skiJump from './solution';

describe('skiJump', () => {
  test('returns correct result', () => {
    expect(skiJump(['*'])).toEqual('1.35 metres: He\'s crap!');
    expect(skiJump(['*', '**', '***'])).toEqual('12.15 metres: He\'s ok!');
    expect(skiJump(['*', '**', '***', '****', '*****', '******'])).toEqual('48.60 metres: He\'s flying!');
    expect(skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********'])).toEqual('86.40 metres: Gold!!');
  });
});