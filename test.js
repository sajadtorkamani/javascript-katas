import { switcheroo } from './solution';

describe('switcheroo', () => {
  test('returns correct result', () => {
    expect(switcheroo('abc')).toEqual('bac');
    expect(switcheroo('aaaaccccbbbb')).toEqual('bbbbccccaaaa');
  });
})
