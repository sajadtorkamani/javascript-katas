export const triangle = row => {
  let result = row.split('');

  while (result.length > 1) {
    let iterationResult = [];

    for (let i = 0; i < result.length - 1; i++) {
      const colour = getColour(`${result[i]}${result[i + 1]}`);

      iterationResult.push(colour);
    }

    result = iterationResult;
  }

  return result[0];
};

/**
 * Return colour based on input.
 *
 * @param colours {string}
 * @returns {string}
 */
export const getColour = colours => {
  if (colours.match(/RR|GB|BG/)) {
    return 'R';
  }

  if (colours.match(/GG|RB|BR/)) {
    return 'G';
  }

  if (colours.match(/BB|RG|GR/)) {
    return 'B';
  }

  throw new Error(`Invalid argument: ${colours}`);
};