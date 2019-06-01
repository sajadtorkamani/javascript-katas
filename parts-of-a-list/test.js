import partlist from './solution';

describe('partlist', () => {
  test('returns all possible combinations from the list', () => {
    expect(partlist(['I', 'wish', 'I', 'hadn\'t', 'come'])).toEqual([
      ['I', 'wish I hadn\'t come'],
      ['I wish', 'I hadn\'t come'],
      ['I wish I', 'hadn\'t come'],
      ['I wish I hadn\'t', 'come']
    ]);

    // testing(partlist(['I', 'wish', 'I', 'hadn't', 'come']),
    //   [['I', 'wish I hadn't come'], ['I wish', 'I hadn't come'], ['I wish I', 'hadn't come'], ['I wish I hadn't',
    // 'come']]) testing(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']), [['cdIw', 'tzIy xDu rThG'], ['cdIw tzIy', 'xDu
    // rThG'], ['cdIw tzIy xDu', 'rThG']]); testing(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']), [['vJQ', 'anj mQDq sOZ'],
    // ['vJQ anj', 'mQDq sOZ'], ['vJQ anj mQDq', 'sOZ']]);
  });
});