import hidePasswordFromConnection from './solution';

describe('hidePasswordFromConnection', () => {
  test('returns correct result', () => {
    expect(
      hidePasswordFromConnection(
        'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345'
      )
    ).toEqual(
      'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****'
    );

    expect(
      hidePasswordFromConnection(
        'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?password=12345&user=root'
      )
    ).toEqual(
      'jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?password=*****&user=root'
    );
  });
});
