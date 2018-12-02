export const popShift = str => {
  let strChars = str.split('');
  let string1 = '';
  let string2 = '';

  while (strChars.length > 1) {
    string1 += strChars.pop();
    string2 += strChars.shift();
  }

  return [string1, string2, strChars[0] || ''];
};