import countVegetables from './solution';

describe('countVegetables', () => {
  test('returns correct result', () => {
    const input = 'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage';
    const expectedOuput = [
      [2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'],
      [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']
    ];

    expect(countVegetables(input)).toEqual(expectedOuput);
  });
});