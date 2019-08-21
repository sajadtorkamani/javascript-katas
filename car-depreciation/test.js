import car from './solution';

describe('cars', () => {
  test('returns correct result', () => {
    // expect(car(10000, 1)).toEqual('8000.00');
    // expect(car(5681, 2)).toEqual('3635.84');
    expect(car(8000, 3)).toEqual('4608.00');
  });
});
