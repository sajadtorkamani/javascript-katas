const splitInParts = (str, partLength) => {
  const PARTS_REGEX = new RegExp(`\\w{1,${partLength}}`, 'g')

  return str.match(PARTS_REGEX).join(' ')
}

export default splitInParts
