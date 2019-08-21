/**
 * @param {string} str
 * @returns {string | null}
 */
const pigLatin = str => {
  str = str.toLowerCase();

  if (/[^a-z]/.test(str)) {
    return null;
  }

  if (/^[aeiou]/.test(str)) {
    return str + 'way';
  }

  const leadingConsonantsRegex = new RegExp('^[bcdfghjklmnpqrstvwxyz]+');

  if (leadingConsonantsRegex.test(str)) {
    return (
      str.replace(leadingConsonantsRegex, '') +
      str.match(leadingConsonantsRegex) +
      'ay'
    );
  }
};

export default pigLatin;
