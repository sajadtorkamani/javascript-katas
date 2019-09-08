import getUsersIds from './solution';

describe('getUserIds', () => {
  test('returns correct result', () => {
    expect(getUsersIds('uid12 ab, uid#, uidMiXeDcHaRs')).toEqual([
      '12 ab',
      '',
      'mixedchars'
    ]);
    expect(getUsersIds('  uidin name whitespace')).toEqual([
      'in name whitespace'
    ]);
    expect(getUsersIds('uid##doublehashtag')).toEqual(['doublehashtag']);
    expect(getUsersIds('uidMultipleuid')).toEqual(['multipleuid']);
    expect(getUsersIds(' uidT#e#S#t# ')).toEqual(['test']);
    expect(
      getUsersIds(
        'uid1234, uid12, uid1234567890, uidHaCk  eR, uid 123, uid1234#, uidPASsword'
      )
    ).toEqual([
      '1234',
      '12',
      '1234567890',
      'hack  er',
      '123',
      '1234',
      'password'
    ]);
  });
});
