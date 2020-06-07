import { calculator } from './solution';

describe('calculator', () => {
  test('returns correct result', () => {
    expect(calculator(5, 6, 1)).toEqual('Bus');
    expect(calculator(4, 5, 1)).toEqual('Walk');
    expect(calculator(5, 8, 0)).toEqual('Walk');
    expect(calculator(5, 4, 3)).toEqual('Walk');
    expect(calculator(11, 15, 2)).toEqual('Bus');
    expect(calculator(0.6, 0.4, 0)).toEqual('Walk');
    expect(calculator(10, 0.4, 0)).toEqual('Bus');
  });
});
