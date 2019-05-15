import trim from './solution';

describe('trim', () => {
  test('returns correct result', () => {
    expect(trim('Creating kata is fun', 14)).toEqual('Creating ka...');
    expect(trim('He', 1)).toEqual('H...');
    expect(trim('Code Wars is pretty rad', 50)).toEqual('Code Wars is pretty rad');
  });
});
