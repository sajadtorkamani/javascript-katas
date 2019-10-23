const decrypt = (encoded: string): string => {
  return encoded
    .replace(/'\d+'/g, m => {
      const charCode = +m.replace(/'/g, '');

      return String.fromCharCode(charCode);
    })
    .split('')
    .reverse()
    .join('');
};

export default decrypt;
