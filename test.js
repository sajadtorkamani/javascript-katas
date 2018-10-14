import { similarity } from './solution';

describe('similarity', () => {
  test('returns correct result', () => {
    expect(similarity([1, 2, 4, 6, 7], [2, 3, 4, 7])).toEqual(0.5);
  });
});
