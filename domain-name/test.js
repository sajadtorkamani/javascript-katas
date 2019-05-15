import domainName from './solution';

describe('domainName', () => {
  test('returns only the domain name from a URL string', () => {
    expect(domainName('http://google.com')).toEqual('google');
    expect(domainName('http://google.co.jp')).toEqual('google');
    expect(domainName('www.xakep.ru')).toEqual('xakep');
    expect(domainName('https://youtube.com')).toEqual('youtube');
  });
});