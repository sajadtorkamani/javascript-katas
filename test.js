import { reverseAll, reverseLines, reverseOrder, reverseSections } from './solution';

describe('reverseOrder', () => {
  test('reverses order of elements', () => {
    expect(reverseOrder(['foo', 'bar', 'baz'])).toEqual(['baz', 'bar', 'foo']);
  });
});

describe('reverseLines', () => {
  test('reverses lines in string', () => {
    expect(reverseLines('abc\n123\n!!!')).toEqual('!!!\n123\nabc');
  });
});

describe('reverseSections', () => {
  test('reverses sections within string', () => {
    expect(reverseSections('xyz886abc#$%')).toEqual('zyx688cba%$#');
  });
});

describe('reverseAll', () => {
  test('returns correct result', () => {
    expect(reverseAll(
      ["abc123!@#\n314159", "987bbc\n#$%\nxyz886"]
    )).toEqual(
      ["zyx688\n%$#\n789cbb", "951413\ncba321#@!"]
    );
  });
});

// Test.assertSimilar(reverseAll(["abc123!@#\n314159","987bbc\n#$%\nxyz886"]),["zyx688\n%$#\n789cbb","951413\ncba321#@!"])
// Test.assertSimilar(reverseAll(["JOVmG$&&?@\nJcE91632PXFhMAsRli\n30620DOXPZoO149\n5513??%-&@YUpyCmRUAO","_@!?#^15915736199076984"]),
// ["^#?!@_48967099163751951","3155@&-%??OAURmCypUY\n02603OoZPXOD941\nEcJ23619ilRsAMhFXP\nGmVOJ@?&&$"])
