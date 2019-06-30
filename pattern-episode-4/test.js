import { pattern } from './solution';

describe('pattern', () => {
  test('returns correct result', () => {
    expect(pattern(5)).toEqual('12345\n2345\n345\n45\n5');
    expect(pattern(1)).toEqual('1');
    expect(pattern(2)).toEqual('12\n2');
    expect(pattern(12)).toEqual(
      '123456789101112\n23456789101112\n3456789101112\n456789101112\n56789101112\n6789101112\n789101112\n89101112\n9101112\n101112\n1112\n12'
    );
  });
});
