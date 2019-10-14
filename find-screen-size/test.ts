import findScreenHeight from './solution';

describe('findScreenSize', () => {
  test('returns correct result', () => {
    expect(findScreenHeight(1024, '4:3')).toEqual('1024x768');
    expect(findScreenHeight(1280, '16:9')).toEqual('1280x720');
    expect(findScreenHeight(3840, '32:9')).toEqual('3840x1080');
  });

  /**
   * Extract width ratio, height ratio from ratio string
   * Calculate height: (width / $width ratio) * height ratio
   * Return width and height as dimensions
   */
});
