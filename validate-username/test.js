import validateUsr from './solution';

describe('validateUsr', () => {
  test('validates username correctly', () => {
    expect(validateUsr('asddsa')).toEqual(true);
    expect(validateUsr('a')).toEqual(false);
    expect(validateUsr('Hass')).toEqual(false);
    expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toEqual(false);
    expect(validateUsr('')).toEqual(false);
    expect(validateUsr('____')).toEqual(true);
    expect(validateUsr('012')).toEqual(false);
    expect(validateUsr('p1pp1')).toEqual(true);
    expect(validateUsr('asd43 34')).toEqual(false);
    expect(validateUsr('asd43_34')).toEqual(true);
  });
});