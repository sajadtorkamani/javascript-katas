import inArray from './solution';

describe('inArray', () => {
  test('returns correct result', () => {
    let a1 = ['xyz', 'live', 'strong'];
    let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

    expect(inArray(a1, a2)).toEqual(['live', 'strong']);

    a1 = ['live', 'strong', 'arp'];
    expect(inArray(a1, a2)).toEqual(['arp', 'live', 'strong']);

    a1 = ['tarp', 'mice', 'bull'];
    expect(inArray(a1, a2)).toEqual([]);
  });
});