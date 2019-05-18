import stockList from './solution';

describe('stockList', () => {
  test('returns correct result', () => {
    const stock1 = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    const categories1 = ['A', 'B'];
    const expectedResult1 = '(A : 200) - (B : 1140)';
    expect(stockList(stock1, categories1)).toEqual(expectedResult1);

    const stock2 = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
    const categories2 = ['A', 'B', 'C', 'W'];
    const expectedResult2 = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
    expect(stockList(stock2, categories2)).toEqual(expectedResult2);

    expect(stockList([], ['A', 'B'])).toEqual('');
  });
});