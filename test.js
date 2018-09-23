import { merryChristmas } from './solution';

describe('', () => {
  
});

describe('merryChristmas', () => {
  it('returns correct result', function () {
    const a = _ => "M",
      b = _ => "e",
      c = _ => "r",
      d = _ => "y",
      e = _ => "C",
      f = _ => "h",
      g = _ => "i",
      h = _ => "s",
      i = _ => "t",
      j = _ => "m",
      k = _ => "a",
      l = _ => " ",
      m = _ => "!";

    const funcs = [a, b, c, d, e, f, g, h, i, j, k, l, m];

    expect(merryChristmas(funcs)).toEqual('a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m');
  });
});