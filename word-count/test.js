import { wordCount } from './solution';

describe('wordCount', () => {
  test('returns correct result', () => {
    expect(wordCount('Everything is hard before it is easy.')).toEqual(7);
    expect(wordCount(' We are what we repeatedly do; excellence, then, is not an act but a habit.')).toEqual(15);
    expect(wordCount('May the force be with you. ')).toEqual(6);
  });
});