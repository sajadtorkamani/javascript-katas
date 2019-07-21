import findChildren from './solution';

describe('findChildren', () => {
  test('returns correct result', () => {
    expect(findChildren('beeeEBb')).toEqual('BbbEeee');
    expect(findChildren('uwwWUueEe')).toEqual('EeeUuuWww');
  });
});
