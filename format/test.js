import format from './solution';

describe('format', () => {
  test('handles variables in object format', () => {
    const variables = { foo: 'Jack', bar: 'sandwich' };

    expect(format('Hello {foo} - make me a {bar}', variables)).toEqual(
      'Hello Jack - make me a sandwich'
    );

    expect(format('Hello {foo} - {foobar} make me a {bar}', variables)).toEqual(
      'Hello Jack - {foobar} make me a sandwich'
    );

    expect(
      format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', variables)
    ).toEqual('Hello Jack - {foobar} make me a sandwich... Jack!!?');
  });

  test('handles edge case', () => {
    expect(
      format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', {
        bar: 'sandwich {foo}',
        foo: 'Jack'
      })
    ).toEqual('Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?');
  });

  test('handles variables in array format', () => {
    const variables = ['Jack', 'sandwiches', 0];

    expect(
      format("Hello {0} - {foobar} make me {2} {1} - I'm full..", variables)
    ).toEqual("Hello Jack - {foobar} make me 0 sandwiches - I'm full..");
  });
});
