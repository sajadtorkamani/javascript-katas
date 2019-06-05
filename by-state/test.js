import byState from './solution';

describe('byState', () => {
  test('returns correct result', () => {
    const input1 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`;

    const input2 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`;

    const input3 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA

Sal Carpenter, 73 6th Street, Boston MA`;

    // const expectedResult1 = "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia";
    // expect(byState(input1)).toEqual(expectedResult1);
    //
    // const expectedResult2 = "California\r\n..... Amy Wilde 334 Bayshore Pkwy Mountain View California\r\n Massachusetts\r\n..... Eric Adams 20 Post Road Sudbury Massachusetts\r\n..... Hubert Sims 328A Brook Road Roanoke Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Oklahoma\r\n..... Orville Thomas 11345 Oak Bridge Road Tulsa Oklahoma\r\n Pennsylvania\r\n..... Terry Kalkas 402 Lans Road Beaver Falls Pennsylvania\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia";
    // expect(byState(input2)).toEqual(expectedResult2);

    const expectedResult3 = "Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia";
    expect(byState(input3)).toEqual(expectedResult3);
  });
});