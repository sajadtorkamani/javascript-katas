const decrypt = (encoded: string): string => {
  return encoded
    .replace(/'(\d+)'/g, (_, charCode) => String.fromCharCode(+charCode))
    .split('')
    .reverse()
    .join('')
}

export default decrypt
