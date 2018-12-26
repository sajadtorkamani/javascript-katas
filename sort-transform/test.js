import sortTransform from './solution';

describe.skip('sortTransform', () => {
  test('returns correct result', () => {
    expect(sortTransform([121, 122, 123, 124, 125, 120, 122, 132])).toEqual('yzz-xy}-}yx-xy}');
    expect(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])).toEqual('oprn-nors-sron-nors');
    expect(sortTransform([51, 62, 73, 84, 95, 100, 99, 126])).toEqual('3>c~-3>d~-~d>3-3>d~');
  });
});