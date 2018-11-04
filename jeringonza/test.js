import { jeringonza } from './solution';

describe('#jeringonza', () => {
  test('returns correct result', () => {
    expect(jeringonza('sajad')).toEqual('sapajapad')
    expect(jeringonza('jeringonza')).toEqual('jeperipingoponzapa');
    expect(jeringonza('jEringonzA')).toEqual('jEPEripingoponzAPA');
    expect(jeringonza('Played in Spain and across Latin America')).toEqual('Plapayeped ipin Spapaipin apand apacroposs Lapatipin APAmeperipicapa');
    expect(jeringonza('The quick brown fox jumped over the lazy dog'))
      .toEqual('Thepe qupuipick bropown fopox jupumpeped opoveper thepe lapazy dopog');
    expect(jeringonza('Please give this kata some love if you enjoyed it'))
      .toEqual('Plepeapasepe gipivepe thipis kapatapa sopomepe lopovepe ipif yopoupu epenjopoyeped ipit');
  });
});