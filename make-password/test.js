import { makePassword } from './solution';

describe('makePassword', () => {
  test('returns correct result', () => {
    expect(makePassword('Give me liberty or give me death')).toEqual('Gml0gmd');
    expect(makePassword('Keep Calm and Carry On')).toEqual('KCaC0');
  });
});
