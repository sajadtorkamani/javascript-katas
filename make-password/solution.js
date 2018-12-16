export const makePassword = sentence => {
  return sentence
    .split(' ')
    .map(word => word[0])
    .join('')
    .replace(/[iIoOsS]/g, match => {
      if (/[iI]/.test(match)) { return '1'; }
      if (/[oO]/.test(match)) { return '0'; }
      if (/[sS]/.test(match)) { return '5'; }

      return match;
    });
};