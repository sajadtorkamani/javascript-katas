const CalculateString = (length, str) => {
  while (/01|10/.test(str)) {
    str = str.replace(/01|10/, '')
  }

  return str.length
}

export default CalculateString
