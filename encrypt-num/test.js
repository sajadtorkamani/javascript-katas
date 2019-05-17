import encryptNum from './solution';

describe('encryptNum', () => {
  test('encrypts last 6 digits of phone number', () => {
    expect(encryptNum('+39 328 6587120')).toEqual('+39 328 6XXXXXX');
    expect(encryptNum('1-212-420-0202')).toEqual('1-212-4XX-XXXX');
    expect(encryptNum('11-211-458-7851')).toEqual(false);
  });
});