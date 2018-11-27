import { cutFruits, splitFruit } from './solution';

describe('#splitFruit', () => {
  test('returns splitted words as array', () => {
    expect(splitFruit('apple')).toEqual(['app', 'le']);
  });
});

describe('#cutFruits', () => {
  test('returns correct result', () => {
    expect(cutFruits(['apple', 'pear', 'banana'])).toEqual(['app', 'le', 'pe', 'ar', 'ban', 'ana']);
    expect(cutFruits(['apple', 'pear', 'banana', 'bomb'])).toEqual(['app', 'le', 'pe', 'ar', 'ban', 'ana', 'bomb']);
  });
});