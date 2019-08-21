import balanceStatements from './solution';

describe('balanceStatements', () => {
  test('returns correct result', () => {
    // expect(
    //   balanceStatements(
    //     'GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S'
    //   )
    // ).toEqual('Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;');
    //
    // expect(
    //   balanceStatements(
    //     'ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B'
    //   )
    // ).toEqual('Buy: 29499 Sell: 0');

    expect(
      balanceStatements(
        'CAP 1300 .2 B, CLH16.NYM 50 56 S, OWW 1000 11 S, OGG 20 580.1 S'
      )
    ).toEqual(
      'Buy: 260 Sell: 11602; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;'
    );
  });
});
