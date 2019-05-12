/**
 * @param faces {Array<string>}
 */
const countSmileys = faces => {
  return faces
    .filter(face => /^[:;][-~]?[)D]$/.test(face))
    .length;
};

export default countSmileys;