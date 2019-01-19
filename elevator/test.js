import elevator from './solution';

describe('elevator', () => {
  test('returns correct result', () => {
    expect(elevator(0, 1, 0)).toEqual('left');
    expect(elevator(0, 1, 1)).toEqual('right');
    expect(elevator(0, 1, 2)).toEqual('right');
    expect(elevator(0, 0, 0)).toEqual('right');
    expect(elevator(0, 2, 1)).toEqual('right');
  });
});