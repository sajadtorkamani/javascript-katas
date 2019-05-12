import countSmileys from './solution';

describe('countSmileys', () => {
  test('returns count of valid smiley faces', () => {
    expect(countSmileys([])).toEqual(0);
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toEqual(4);
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
  });
});