import kira from './solution';

describe('kira', () => {
  test('returns correct result', () => {
    expect(kira([16, 16], [10, 5], 'Doctor')).toEqual('doctor');
    expect(kira([15, 15], [5, 4], 'Doctor')).toEqual('DOCTOR');
  });
});