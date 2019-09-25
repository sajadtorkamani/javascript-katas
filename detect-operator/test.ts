import detectOperator from './solution';

describe('detectOperator', () => {
  test('returns correct result', () => {
    expect(detectOperator(80931551119)).toEqual('Life:)');
    expect(detectOperator(8011155117711)).toEqual('no info');
  });
});
