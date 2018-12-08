import { tiyFizzBuzz } from './solution';

describe('#tiyFizzBuzz', () => {
  test('returns correct result', () => {
    expect(tiyFizzBuzz("H")).toEqual("Iron");
    expect(tiyFizzBuzz("b")).toEqual("b");
    expect(tiyFizzBuzz("A")).toEqual("Iron Yard");
    expect(tiyFizzBuzz("a")).toEqual("Yard");
    expect(tiyFizzBuzz("Hello WORLD!")).toEqual("IronYardllYard IronIron YardIronIronIron!");
  });
});
