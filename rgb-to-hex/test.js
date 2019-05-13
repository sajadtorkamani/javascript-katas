import rgb, { normalizeRgb, rgbToHex } from './solution';

describe('rgbToHex', () => {
  test('returns correct HEX representation', () => {
    expect(rgbToHex(0)).toEqual('00');
    expect(rgbToHex(10)).toEqual('0A');
    expect(rgbToHex(200)).toEqual('C8');
  });

  test('handles out of range RGB value', () => {
    expect(rgbToHex(300)).toEqual('FF');
    expect(rgbToHex(-10)).toEqual('00');
  });
});

describe('normalizeRgb', () => {
  test('normalizes invalid RGB value', () => {
    expect(normalizeRgb(300)).toEqual(255);
    expect(normalizeRgb(-20)).toEqual(0);
    expect(normalizeRgb(50)).toEqual(50);
  });
});

describe('rgb', () => {
  test('correctly converts RGB to hex', () => {
    expect(rgb(0, 0, 0)).toEqual('000000');
    expect(rgb(0, 0, -20)).toEqual('000000');
    expect(rgb(173, 255, 47)).toEqual('ADFF2F');
  });

  test('handles out of range RGB values', () => {
    expect(rgb(300, 255, 255)).toEqual('FFFFFF');
  });
});