import change from './solution';

describe('change', () => {
  test('returns correct result', () => {
    const s1 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha';
    const s2 = 'Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release';
    const s3 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha';
    const s4 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0090\nDate: Tues April 9, 2005\nVersion: .7\nLevel: Alpha';

    expect(change(s1, 'Ladder', '1.1')).toEqual('Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1');
    expect(change(s2, 'Balance', '1.5.6')).toEqual('Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0');
    expect(change(s3, 'Ladder', '1.1')).toEqual('ERROR: VERSION or PHONE');
    expect(change(s4, 'Ladder', '1.1')).toEqual('ERROR: VERSION or PHONE');
  });
});