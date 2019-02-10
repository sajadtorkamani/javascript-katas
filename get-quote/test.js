import getQuote from './solution';

describe('getQuote', () => {
  test('returns correct result', () => {
    const quotes = ['WHERE IS SHE?!', 'Holy haberdashery, Batman!', 'Let\'s put a smile on that faaaceee!'];

    expect(getQuote(quotes, 'Rob1n')).toEqual('Robin: Holy haberdashery, Batman!');
    expect(getQuote(quotes, 'Joke2')).toEqual('Joker: Let\'s put a smile on that faaaceee!');
    expect(getQuote(quotes, 'Batm0n')).toEqual('Batman: WHERE IS SHE?!');
  });
});