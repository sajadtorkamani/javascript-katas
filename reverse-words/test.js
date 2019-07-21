import reverse from './solution';

describe('reverse', () => {
  test('returns correct result', () => {
    expect(reverse('Reverse this string, please!')).toEqual(
      'Reverse siht string, !esaelp'
    );
    expect(reverse("I really don't like reversing strings!")).toEqual(
      "I yllaer don't ekil reversing !sgnirts"
    );
    expect(reverse(' foo bar baz ')).toEqual('foo rab baz');
  });
});
