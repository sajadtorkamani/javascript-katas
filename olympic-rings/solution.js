export const olympicRing = str => {

  // Calculate total rings
  const totalRings = str
    .split('')
    .reduce((ringsCount, letter) => {
      if (/B/.test(letter)) {
        return ringsCount += 2;
      }

      if (/[abdegopqADOPRQ]/.test(letter)) {
        return ringsCount += 1;
      }

      return ringsCount;
    }, 0);

  // Determine medal
  const roundedTotalRings = Math.floor(totalRings / 2);

  if (roundedTotalRings > 3) {
    return 'Gold!';
  }

  if (roundedTotalRings === 3) {
    return 'Silver!';
  }

  if (roundedTotalRings === 2) {
    return 'Bronze!';
  }

  return 'Not even a medal!';
};