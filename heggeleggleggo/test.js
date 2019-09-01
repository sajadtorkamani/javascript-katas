import heggeleggleggo from './solution';

describe('heggeleggleggo ', () => {
  test("inserts 'egg' after each consonant", () => {
    expect(heggeleggleggo('hello')).toEqual('heggeleggleggo');
    expect(heggeleggleggo('code here')).toEqual('ceggodegge heggeregge');
  });
});
