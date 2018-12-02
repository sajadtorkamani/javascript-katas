import { olympicRing } from './solution';

describe('#olympicRing', () => {
  test('returns correct result', () => {
    expect(olympicRing('wHjMudLwtoPGocnJ')).toEqual('Bronze!');
    expect(olympicRing('eCEHWEPwwnvzMicyaRjk')).toEqual('Bronze!');
    expect(olympicRing('JKniLfLW')).toEqual('Not even a medal!');
  });
});