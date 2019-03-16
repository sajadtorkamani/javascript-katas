import warnTheSheep from './solution';

describe('warnTheSheep', () => {
  test('returns correct result', () => {
    expect(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'])).toEqual('Oi! Sheep number 2! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).toEqual('Oi! Sheep number 5! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).toEqual('Oi! Sheep number 6! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['sheep', 'wolf', 'sheep'])).toEqual('Oi! Sheep number 1! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['sheep', 'sheep', 'wolf'])).toEqual('Pls go away and stop eating my sheep');
  });
});