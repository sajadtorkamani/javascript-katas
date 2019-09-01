const format = (str, variables) => {
  return Array.isArray(variables)
    ? handleArrayVariables(str, variables)
    : handleObjectVariables(str, variables);
};

const handleObjectVariables = (str, variables) => {
  for (let identifier in variables) {
    const replacement = variables[identifier]
      .replace(/{/g, '####')
      .replace(/}/g, '&&&&');

    const regex = new RegExp(`{${identifier}}`, 'g');

    str = str.replace(regex, replacement);
  }

  return str.replace(/####/g, '{').replace(/&&&&/g, '}');
};

const handleArrayVariables = (str, variables) => {
  variables.forEach((replacement, index) => {
    const regex = new RegExp(`\\{${index}\\}`, 'g');
    str = str.replace(regex, replacement);
  });

  return str;
};

export default format;
