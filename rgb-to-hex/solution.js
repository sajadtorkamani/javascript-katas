/**
 * @param r {number}
 * @param g {number}
 * @param b {number}
 */
const rgb = (r, g, b) => [r, g, b].map(rgbToHex).join('');

/**
 * @param rgb {number}
 */
export const rgbToHex = rgb => {
  let hex = normalizeRgb(rgb).toString(16);

  if (hex.length === 1) {
    hex = '0' + hex;
  }

  return hex.toUpperCase();
};

/**
 * @param rgb {number}
 */
export const normalizeRgb = rgb => {
  if (rgb > 255) {
    return 255;
  }

  if (rgb < 0) {
    return 0;
  }

  return rgb;
};

export default rgb;