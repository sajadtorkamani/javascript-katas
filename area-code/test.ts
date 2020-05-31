import { areaCode } from './solution';

describe('areaCode', () => {
  test('returns correct result', () => {
    expect(areaCode("The supplier's phone number is (555) 867-5309")).toEqual(
      '555'
    );
    expect(areaCode("Grae's cell number used to be (123) 456-7890")).toEqual(
      '123'
    );
    expect(
      areaCode("The 102nd district court's fax line is (124) 816-3264")
    ).toEqual('124');
  });
});
