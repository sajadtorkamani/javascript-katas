/**
 * @param text {string}
 * @param markers {Array<string>}
 */
const stripComments = (text, markers = []) => {
  const commentRegex = new RegExp(`\\s?[${markers.join('')}].*`, 'g')

  return text
    .split('\n')
    .map(line => line.replace(commentRegex, ''))
    .join('\n')
}

export default stripComments
